/** @type {import('next-sitemap').IConfig} */

import fetch from 'node-fetch';

export default {
    siteUrl: 'http://v2.springtravelservices.com',
    exclude: ['/icon.ico'], // Exclude useless paths from the sitemap
    generateRobotsTxt: true,
    generateIndexSitemap: false, 
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    async additionalPaths() {
        const hotelDetailsPaths = await fetchHotelDetailsPaths();
        const hotelsResultPaths = await fetchHotelsResultPaths();
        return [...hotelDetailsPaths, ...hotelsResultPaths];
    },
};

// Fetch dynamic routes for `HotelDetails`
async function fetchHotelDetailsPaths() {
    try {
        const response = await fetch('http://react.tunisiebooking.com/api/fetchDestinations');
        if (!response.ok) {
            console.error(`Error fetching destinations: ${response.statusText}`);
            return [];
        }
        const destinations = await response.json();
        return destinations.map((destination) => ({
            loc: `/HotelDetails/${destination.id}`,
            lastmod: new Date().toISOString(),
        }));
    } catch (error) {
        console.error('Error fetching hotel details paths:', error);
        return [];
    }
}

// Fetch dynamic routes for `HotelsResult`
async function fetchHotelsResultPaths() {
    try {
        const response = await fetch('http://api.resabookings.com/api/api/api_hotel/api_destination_test.php');
        if (!response.ok) {
            console.error(`Error fetching regions: ${response.statusText}`);
            return [];
        }
        const data = await response.json();
        const regions = data.regions || [];
        return regions.map((region) => ({
            loc: `/HotelsResult?ville=${encodeURIComponent(region.libelle_region)}`,
            lastmod: new Date().toISOString(),
        }));
    } catch (error) {
        console.error('Error fetching hotels result paths:', error);
        return [];
    }
}

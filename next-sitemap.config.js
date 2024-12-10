/** @type {import('next-sitemap').IConfig} */

import fetch from 'node-fetch';

export default {
    siteUrl: 'http://v2.springtravelservices.com', 
    exclude: ['/icon.ico'], 
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
        const manualPaths = [
            { loc: '/', lastmod: new Date().toISOString() }, 
            { loc: '/voyage_organise/tcheque/', lastmod: new Date().toISOString() }, 
        ];
        const hotelDetailPaths = await fetchHotelDetailPaths();
        const regionPaths = await fetchRegionPaths(); // Fetch region paths
        const destinationPaths = await fetchDestinationPaths(); // Fetch HotelDestination3Etoiles paths


        return [ ...manualPaths, ...hotelDetailPaths, ...regionPaths, ...destinationPaths]; // Merge all paths, including manual ones
    },
};

async function fetchHotelDetailPaths() {
    try {
        // Define static filters for destinations and dates
        const destinations = ['hammamet', 'nabeul', 'sousse', 'djerba', 'monastir', 'Monastir', 'tunis', 'Sfax', 'sfax', 'el jem'];
        const dateCombinations = [
            { datedep: '2024-12-06', dateret: '2024-12-12' },
            { datedep: '2024-12-13', dateret: '2024-12-19' },
        ];
        const paths = [];
        // Iterate through destinations and dates to fetch hotels
        for (const ville of destinations) {
            for (const dates of dateCombinations) {
                const { datedep, dateret } = dates;

                const url = `http://api.resabookings.com/api/api/api_hotel/api_hotel_detail2_v22_vf.php?id_partenaire=10&id_marche=5&destination=${ville}&date_fin_1=${datedep}&date_fin_2=${dateret}&type=not%20all`;
                const response = await fetch(url);

                if (!response.ok) continue;
                const data = await response.json();

                const hotels = data.Hotels[0]?.Hotels_hors_promo || [];
                for (const hotel of hotels) {
                    const id_hotel = hotel.id_hotel;
                    if (!id_hotel) continue;

                    paths.push({
                        loc: `/detail_hotel_${id_hotel}/`,
                        lastmod: new Date().toISOString(),
                    });
                }
            }
        }

        return paths;
    } catch (error) {
        console.error('Error fetching hotel detail paths:', error);
        return [];
    }
}

// Fetch dynamic routes for `Region` pages
async function fetchRegionPaths() {
    try {
        const response = await fetch('http://api.resabookings.com/api/api/api_hotel/api_destination_test.php');
        const data = await response.json();

        if (!data.status || !data.regions) return []; 

        const paths = [];

        // Iterate through each region to create the dynamic paths
        for (const region of data.regions) {
            const { libelle_region } = region;
            const regionPath = `/hotels_${libelle_region}`;

            // Add the region URL to paths
            paths.push({
                loc: regionPath, 
                lastmod: new Date().toISOString(), 
            });
        }

        return paths; // Return all region paths
    } catch (error) {
        console.error('Error fetching region paths:', error);
        return [];
    }
}

// Fetch dynamic routes for `HotelDestination3Etoiles` pages
async function fetchDestinationPaths() {
    try {
        const response = await fetch('http://api.resabookings.com/api/api/api_hotel/api_destination_test.php');
        const data = await response.json();

        if (!data.status || !data.regions) return []; // Return empty if no valid regions are found

        const paths = [];

        // Iterate through each region to create the dynamic paths for HotelDestination3Etoiles
        for (const region of data.regions) {
            const { libelle_region } = region;
            const destinationPath = `/HotelDestination3Etoiles/${libelle_region}`;

            // Add the destination URL to paths
            paths.push({
                loc: destinationPath, // Destination path like `/HotelDestination3Etoiles/Ain Draham`
                lastmod: new Date().toISOString(), // Set the last modified date
            });
        }

        return paths; // Return all destination paths
    } catch (error) {
        console.error('Error fetching destination paths:', error);
        return [];
    }
}

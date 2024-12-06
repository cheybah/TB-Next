/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    images: {
        domains: ['image.resabooking.com'], // Add your domain here
    },
    trailingSlash: true, // Add this line to enforce trailing slashes
    async rewrites() {
        return [
            {
                source: '/detail_hotel_:id',
                destination: '/HotelDetails/:id', // This will map to /pages/HotelDetails/page.js
            },
            {
                source: '/hotels_:region',
                destination: '/Hoteldestination/:region',

            },


        ];
    },
};

export default nextConfig;

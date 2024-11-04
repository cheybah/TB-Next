/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: 'http://react.tunisiebooking.com',
    exclude: ['/icon.ico'],  //useless for the sitemap 
    generateRobotsTxt: true,
    generateIndexSitemap: false, //to generate one single sitemap file
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}


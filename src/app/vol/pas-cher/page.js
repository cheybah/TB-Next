export const metadata = {
    title: "Vols Pas Cher",
    description: "Réservez votre vol pas cher et profitez des meilleurs prix Tunisiebooking.com sur les billets moins chers et les vols low cost pour les compagnies : Tunisair, Nouvelair...",
    keywords: "Vol Pas Cher",
    alternates: {
        canonical: `https://tn.tunisiebooking.com/vol/pas-cher/`,
    },
};


const websiteJsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "tunisiebooking",
    "url": "https://tn.tunisiebooking.com/",
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "tunisiebooking",
    "url": "https://tn.tunisiebooking.com/",
    "logo": "https://tn.tunisiebooking.com/images/logo31.png",
    "alternateName": "tunisiebooking",
};


import VolsPasCherPage from "./pasCherPage";

const VolsPasCher = () => {
    return (
        <>
            <VolsPasCherPage />
            {/* JSON-LD Script for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationJsonLd),
                }}
            />
        </>
    );
};

export default VolsPasCher;

export const metadata = {
    title: "Vols Nouvelair",
    description: "Réservez votre vol pas cher et profitez des meilleurs prix Tunisiebooking.com sur les billets moins chers et les vols low cost pour les compagnies : Tunisair, Nouvelair...",
    keywords: "Vol Nouvelair",
    alternates: {
        canonical: `https://tn.tunisiebooking.com/vol/vols-Nouvelair.html`,
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

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Quels sont les pays desservis par Nouvel air ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nouvel air est une grande compagnie aérienne qui sert notamment les pays nord-Africains : Djerba, Tunis, et l’Europe. Elle compte au total 130 aéroports possibles. <a href=\"https://www.tunisiebooking.com/vol/vols-Nouvel air.html\">En savoir Plus</a>"
            }
        },
        {
            "@type": "Question",
            "name": "Combien d’avions compte la flotte de Nouvel air ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nouvel air dispose de 28 avions pour assurer les vols entre les différents pays qu’il dessert. On compte dans le lot un Airbus 320 et un Airbus 321. <a href=\"https://www.tunisiebooking.com/vol/vols-Nouvel air.html\">En savoir Plus</a>"
            }
        },
        {
            "@type": "Question",
            "name": "Quel est le jour le moins cher pour réserver un vol Nouvel air ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le prix du vol Nouvel air varie en fonction des saisons et des mois de l’année. La compagnie propose toutefois ses meilleures offres à la toute dernière minute à savoir pendant l’été et vers la fin de l’année. <a href=\"https://www.tunisiebooking.com/vol/vols-Nouvel air.html\">En savoir Plus</a>"
            }
        },
        {
            "@type": "Question",
            "name": "Combien de kg de bagages à main acceptés chez Nouvel air ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La compagnie impose des conditions strictes pour les bagages en cabine. Ils ne doivent notamment dépasser les 10 kg. <a href=\"https://www.tunisiebooking.com/vol/vols-Nouvel air.html\">En savoir Plus</a>"
            }
        },
        {
            "@type": "Question",
            "name": "Combien de kg de bagages en soute acceptés chez Nouvel air ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pour les bagages en soute, vous ne devez dépasser les 32 kilos avec des pénalités de bagages excédents dont 20 kg de bagages gratuits."
            }
        },
        {
            "@type": "Question",
            "name": "Combien y a-t-il de vols Nouvel air par semaine ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "En moyenne, il y a une trentaine de vols programmés par semaine chez la compagnie aérienne Nouvel air."
            }
        },
        {
            "@type": "Question",
            "name": "Ya-t-il des frais appliqués par Nouvel air en cas de modification ou annulation de la réservation ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui. Les frais dépendent des changements à faire ou du délai d’annulation de la réservation. <a href=\"https://www.tunisiebooking.com/vol/vols-Nouvel air.html\">En savoir Plus</a>"
            }
        },
        {
            "@type": "Question",
            "name": "Les demandes de modification de la réservation Nouvel air peuvent être acceptées en ligne ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pour modifier ou annuler votre réservation, vous pouvez procéder par mail en respectant les conditions d’horaires imposés par la compagnie. <a href=\"https://www.tunisiebooking.com/vol/vols-Nouvel air.html\">En savoir Plus</a>"
            }
        },
        {
            "@type": "Question",
            "name": "Où se trouve le siège de Nouvel air ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A savoir que le siège de la compagnie Nouvel air se trouve à Monastir, Tunis"
            }
        },
        {
            "@type": "Question",
            "name": "Comment trouver des vols Nouvel air pas chers chez TunisieBooking ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sur TunisieBooking, vous avez la possibilité de réserver des vols via Nouvel air moins cher. Il vous suffit d’entrer vos critères de recherche dans le formulaire de comparatif. <a href=\"https://www.tunisiebooking.com/vol/vols-Nouvel air.html\">En savoir Plus</a>"
            }
        },
        {
            "@type": "Question",
            "name": "Quel est le meilleur prix pour un vol aller-retour Nouvel air selon les saisons ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Selon les saisons et la destination choisie, le vol aller-retour Nouvel air peut vous coûter entre 50 et 200 euros. <a href=\"https://www.tunisiebooking.com/vol/vols-Nouvel air.html\">En savoir Plus</a>"
            }
        }
    ]
};

import VolsNouvelairPage from "./volNouvelairPage";

const VolsNouvelair = () => {

    return (
        <>
            <VolsNouvelairPage />

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqJsonLd),
                }}
            />
        </>
    );
};

export default VolsNouvelair;

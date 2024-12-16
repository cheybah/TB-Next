import { fetchHotelData, fetchTripadHotelData, fetchRegionsData } from '../../redux/slices/dataSlice';
import { store } from '../../redux/store';
import HotelsDetailsClient from '../../components/DetailHotel/HotelsDetailsClient';

import { cookies } from 'next/headers'; // Pour récupérer les cookies côté serveur
import { decode } from 'he';

export async function generateMetadata({ params }) {
    const { id } = params;
    const hotelNameCookie = cookies().get('hotelName'); // Récupération du cookie 'hotelName'
    const hotelRatingCookie = cookies().get('rating'); // Récupération du cookie 'nb etoiles'
    const hotelLocationCookie = cookies().get('location'); // Récupération du cookie 'localisation'
    const hotelName = decode(hotelNameCookie?.value) || "Détails de l'hôtel";
    const hotelRating = hotelRatingCookie?.value || "Détails de l'hôtel";
    const hotelLocation = hotelLocationCookie?.value || "Détails de l'hôtel";

    return {
        title: `${hotelName}`,
        description: `Hôtel ${hotelName} + ${hotelRating} * ${hotelLocation} sur Tunisiebooking ! Profitez des meilleures Prix 2025.`,
        keywords: `${hotelName}`,
        alternates: {
            canonical: `https://tn.tunisiebooking.com/detail_hotel_${id}/`,
        },
    };
}

// Fonction pour récupérer les données nécessaires
export async function fetchData(id, ville, datedep, dateret) {
    const dispatch = store.dispatch;
    try {
        // Appels Redux pour récupérer les données
        const regionsDataResult = await dispatch(fetchRegionsData()).unwrap();
        const hotelDataResult = await dispatch(fetchHotelData({ id, ville, datedep, dateret })).unwrap();
        const hotelTripadDataResult = await dispatch(fetchTripadHotelData({ id })).unwrap();

        return {
            regionsData: regionsDataResult || [],
            hotelData: hotelDataResult?.Hotels[0] || [], // Adaptez en fonction de la structure des données
            hotelTripadData: hotelTripadDataResult?.Hotels[0] || [],
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { regionsData: [], hotelData: [], hotelTripadData: [] };
    }
}

// Composant principal pour afficher les détails de l'hôtel
const HotelsDetails = async ({ params }) => {
    const { id } = params;

    // Récupération des cookies côté serveur
    const villeCookie = cookies().get('location');
    const ville = villeCookie?.value || '';  // Récupération de la valeur du cookie 'location'
    const datedep = cookies().get('departureDate')?.value || '';  // Départ
    const dateret = cookies().get('returnDate')?.value || '';    // Retour
    // Récupérer les données en fonction de l'ID et des cookies
    
    const hotelNameCookie = cookies().get('hotelName'); // Récupération du cookie 'hotelName'
    const hotelRatingCookie = cookies().get('rating'); // Récupération du cookie 'nb etoiles'
    const hotelLocationCookie = cookies().get('location'); // Récupération du cookie 'localisation'
    const hotelName = decode(hotelNameCookie?.value) || "Détails de l'hôtel";
    const hotelTripAdvisorCookie = cookies().get('note_tripad');
    const hotelLocation = hotelLocationCookie?.value || "Détails de l'hôtel";
    const { regionsData, hotelData, hotelTripadData } = await fetchData(id, ville, datedep, dateret);

    const faqJsonLd = {
        "microdata": null,
        "jsonld": [
            {
                "telephone": "+216 71 124 124",
                "@context": "http://schema.org",
                "description": `Découvrez ${hotelName} à ${hotelLocation} sur Tunisiebooking ! Profitez des avis fiables, photos récentes et des meilleurs prix garantis pour réserver votre hôtel en toute confiance.`,
                "hasMap": "",
                "address": {
                    "addressRegion": hotelLocation,
                    "addressCountry": "Tunisie",
                    "@type": "PostalAddress",
                    "postalCode": "",
                    "addressLocality": hotelLocation,
                    "streetAddress": hotelLocation
                },
                "aggregateRating": {
                    "reviewCount": "",
                    "@type": "AggregateRating",
                    "ratingValue": `${hotelTripAdvisorCookie?.value}`,
                    "ratingCount": "1",
                    "bestRating": "5"
                },
                "priceRange": "Prix disponible dès 102 TND",
                "@type": "Hotel",
                "name": `${hotelName}`,
                "image": "https://image.resabooking.com/images/hotel/Julius_3.jpg",
                "url": `https://tn.tunisiebooking.com/detail_hotel_${id}/`
            },
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": `${hotelName} ${hotelLocation}`,
                "image": [
                    "https://image.resabooking.com/images/hotel/Julius_3.jpg",
                    "https://image.resabooking.com/images/hotel/Julius_3.jpg",
                    "https://image.resabooking.com/images/hotel/Julius_3.jpg"
                ],
                "@id": `https://tn.tunisiebooking.com/detail_hotel_${id}/`,
                "description": `${hotelName} ${hotelLocation} sur Tunisiebooking`,
                "sku": "536",
                "mpn": "536",
                "brand": {
                    "@type": "Brand",
                    "name": "tunisiebooking"
                },
                "review": {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue":`${hotelTripAdvisorCookie?.value}`,
                        "bestRating": "5"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "tunisiebooking"
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": `${hotelTripAdvisorCookie?.value}`,
                    "reviewCount": "1"
                },
                "offers": {
                    "@type": "Offer",
                    "url": `https://tn.tunisiebooking.com/detail_hotel_${id}/`,
                    "priceCurrency": "TND",
                    "price": "102",
                    "priceValidUntil": datedep,
                    "itemCondition": "https://schema.org/NewCondition",
                    "availability": "https://schema.org/InStock"
                }
            }
        ],
        "graph": null
    }


    // Rendu du composant
    return (
        <div className="min-h-screen flex flex-col">
            <HotelsDetailsClient
                listsHotels={hotelData}
                regionsData={regionsData}
                hotelTripadData={hotelTripadData}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqJsonLd),
                }}
            />
        </div>
    );
};

export default HotelsDetails;

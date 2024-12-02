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
            hotelTripadData: hotelTripadDataResult || [],
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

    // Affichage dans la console pour vérifier la valeur de 'ville'
    console.log("Ville récupérée depuis le cookie:", ville);

    // Récupérer les données en fonction de l'ID et des cookies
    const { regionsData, hotelData, hotelTripadData } = await fetchData(id, ville, datedep, dateret);

    // Rendu du composant
    return (
        <div className="min-h-screen flex flex-col">
            <HotelsDetailsClient
                listsHotels={hotelData}
                regionsData={regionsData}
                hotelTripadData={hotelTripadData}
            />
        </div>
    );
};

export default HotelsDetails;

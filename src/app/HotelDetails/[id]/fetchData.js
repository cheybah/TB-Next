import { fetchHotelData, fetchTripadHotelData, fetchRegionsData } from '../../redux/slices/dataSlice';
import { store } from '../../redux/store';

export async function fetchMetadataAndData(id, cookies) {
    const ville = cookies?.get('location')?.value || 'Hammamet';
    const datedep = '2024-12-26'; // Default start date
    const dateret = '2024-12-30'; // Default end date

    const hotelNameCookie = cookies?.get('hotelName')?.value || null;
    const hotelRatingCookie = cookies?.get('rating')?.value || null;

    try {
        const rawResponse = await store.dispatch(fetchHotelData({ id, ville, datedep, dateret }));
        console.log('Raw Response:', rawResponse);

        const hotelDataResult = rawResponse.payload; // Access payload directly
        if (!hotelDataResult) throw new Error('Failed to fetch hotel data');

        const hotelData = hotelDataResult?.Hotels?.[0] || {};
        console.log('Parsed Hotel Data:', hotelData);

        const hotelName = hotelData?.Hotels_hors_promo?.[0]?.libelle_hotel || hotelNameCookie || "Default Hotel Name";
        const hotelRating = hotelData?.rating || hotelRatingCookie || "4.0";

        return { hotelData, hotelName, hotelRating, ville };
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return { hotelData: {}, hotelName: hotelNameCookie || "Default Hotel Name", hotelRating: hotelRatingCookie || "4.0", ville };
    }
}
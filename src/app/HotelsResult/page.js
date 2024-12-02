
import { fetchHotelsData, fetchTripadData, fetchRegionsData } from '../redux/slices/dataSlice';
import { store } from '../redux/store';
import Header from '../components/Header/Header';
import MoteurResult from '../components/MoteurResult/MoteurResult';
import ResultHotel from '../components/ResultHotel/ResultHotel';
import Footer from '../components/Footer/Footer';

export const metadata = {
    title: 'Tunisiebooking.com vacances a prix promos',
    description: 'Tunisiebooking.com vacances aprés promos',
    keywords: "hotels hammamet, hotel sousse, centre de bien-etre, journée de bien-etre, sorties, loisirs, restaurants, promos, réductions, promotions", 
};

// Fetch data from the API
export async function fetchData(ville,datedep,dateret) {
    const dispatch = store.dispatch;
    try {
        const regionsData = await dispatch(fetchRegionsData());
        const hotelsData = await dispatch(fetchHotelsData({ville,datedep,dateret}));
        const hotelsTripadData = await dispatch(fetchTripadData());
        return {
            regionsData: regionsData.payload || [],
            hotelsData: hotelsData.payload?.Hotels[0] || [],  // Make sure you're accessing the right property
            hotelsTripadData: hotelsTripadData.payload || [],
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { regionsData: [],hotelsData: [], hotelsTripadData: [] };
    }
}

// Component to display the hotel results
const HotelsResult = async ({ searchParams }) => {
    const ville = searchParams?.ville || '';  // Get ville from search params
    const datedep = searchParams?.datedep || '';  // Get datedep from search params
    const dateret = searchParams?.dateret || '';  // Get dateret from search params
    const { regionsData,hotelsData, hotelsTripadData } = await fetchData(ville,datedep,dateret);  // Fetch the data using ville
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <MoteurResult listRegions={regionsData} />
            <div className="overflow-x-hidden">
                <ResultHotel listsHotels={hotelsData} listsHotelTripAdv={hotelsTripadData} />
            </div>
            <Footer />
        </div>
    );
};

export default HotelsResult;

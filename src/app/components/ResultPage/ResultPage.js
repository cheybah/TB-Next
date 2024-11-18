

import { fetchHotelsData, fetchTripadData ,fetchRegionsData } from '../../redux/slices/dataSlice';
import { store } from '../../redux/store';
import Header from '../Header/Header';
import MoteurResult from '../MoteurResult/MoteurResult';
import ResultHotel from '../ResultHotel/ResultHotel';
import Footer from '../Footer/Footer';

export const metadata = {
    title: 'Hotel Results',
    description: 'Find the best hotel results here.',
};

// Fetch data from the API
export async function fetchData(ville) {
    const dispatch = store.dispatch;
    try {
        const hotelsData = await dispatch(fetchHotelsData({ville }));
        const hotelsTripadData = await dispatch(fetchTripadData());
        const regionsData = await dispatch(fetchRegionsData());

        // Log the data here
        //console.log('Hotels Data:', hotelsData);
        //console.log('Hotels Tripad Data:', hotelsTripadData);
        //console.log('Regions Data:', regionsData);

        return {
            hotelsData: hotelsData.payload?.Hotels[0] || [],  // Make sure you're accessing the right property
            hotelsTripadData: hotelsTripadData.payload || [],
            regionsData: regionsData.payload || [],
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { hotelsData: [], hotelsTripadData: [],regionsData: [] };
    }
}

// Component to display the hotel results
const ResultPage = async ({ searchParams }) => {
    const ville = searchParams?.ville || '';  // Get ville from search params

    const { hotelsData, hotelsTripadData ,regionsData } = await fetchData(ville);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <MoteurResult ListDestinations={regionsData} />
            <div className="overflow-x-hidden">
                <ResultHotel listsHotels={hotelsData} listsHotelTripAdv={hotelsTripadData} />
            </div>
            <Footer />
        </div>
    );
};

export default ResultPage;

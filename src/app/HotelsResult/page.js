
import Header from '../components/Header/Header';
import MoteurResult from '../components/MoteurResult/MoteurResult';
import ResultHotel from '../components/ResultHotel/ResultHotel';
import Footer from '../components/Footer/Footer';

export const metadata = {
    title: 'Hotel Results',
    description: 'Find the best hotel results here.',
};

// Server-side data fetching within the HotelsResult component
async function fetchHotelData(ville) {
    const [hotelResponse, tripAdvisorResponse] = await Promise.all([
        fetch(`http://api.resabookings.com/api/api/api_hotel/api_hotel_detail2_v22_vf.php?id_partenaire=10&id_marche=5&destination=${ville}&date_fin_1=2024-10-18&date_fin_2=2024-10-22&type=not%20all`, { cache: 'no-store' }),
        fetch(`http://api.resabookings.com/api/api/api_hotel/api_tripad.php`, { cache: 'no-store' })
    ]);

    const hotelData = await hotelResponse.json();
    const tripAdvisorData = await tripAdvisorResponse.json();

    const listHotels = hotelData.Hotels[0].Hotels_hors_promo.slice(0, 5); 
    const listHotelTripAdv = tripAdvisorData.Hotels;

    return { listHotels, listHotelTripAdv };
}

const HotelsResult = async ({ searchParams }) => {
    const ville = searchParams?.ville || '';
    const { listHotels, listHotelTripAdv } = await fetchHotelData(ville);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <MoteurResult />
            <div className="overflow-x-hidden">
                <ResultHotel listHotels={listHotels} listHotelTripAdv={listHotelTripAdv} />
            </div>
            <Footer />
        </div>
    );
};

export default HotelsResult;

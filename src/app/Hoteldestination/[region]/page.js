import Destination from '../../components/Destination/Destination';
import { cookies } from 'next/headers'; 
import { store } from '../../redux/store';// Importer l'API cookies de Next.js
import { fetchCarouselData } from '../../redux/slices/dataSlice';

export async function generateMetadata({ params }) {
    const cookieStore = cookies();
    const region = cookieStore.get('region')?.value || 'Tunisie'; // Lire le cookie région, avec fallback à "Tunisie" si non défini
    return {
        title: `${region}`,
        description: `Trouvez votre hôtel ${region} pas cher en ligne sur Tunisiebooking.com !`,
        keywords: `Hotel ${region}`,
    };
}
export async function fetchData() {
    const dispatch = store.dispatch;
    try {
      const carouselData = await dispatch(fetchCarouselData());
      return {
        carouselData: carouselData.payload || [],  // Ensure it's always an array
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { carouselData: [] }; // Return empty arrays in case of error
    }
  }

// The component renders the page for a specific region
const HotelsDestination = async({ params }) => {
    const region = params.region || 'Tunisie'; // Get region from URL params
    const { carouselData } = await fetchData();

    return (
        <div>
            <Destination region={region} sliders={carouselData}/>
        </div>
    );
};

export default HotelsDestination;

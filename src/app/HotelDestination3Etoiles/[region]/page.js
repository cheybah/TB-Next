import { cookies } from 'next/headers'; 
import { store } from '../../redux/store';// Importer l'API cookies de Next.js
import { fetchCarouselData } from '../../redux/slices/dataSlice';
import Destination from '@/app/components/Destination3etoiles/Destination';

export  function generateMetadata({ params }) {
    const cookieStore = cookies();
    const region = cookieStore.get('region')?.value || 'Tunisie'; 
    return {
        title: `Hotel ${region} 3 étoiles`,
        description: `Supers Promos sur Hotel ${region} 3 étoiles chez TunisieBooking.com ! Meilleur Prix GARANTI. Tarifs et disponibilité en temps réel des hotels 3* à ${region} . `,
        keywords: `hotel 3 étoiles ${region} , ${region} 3 étoiles, hotels ${region} 3 étoiles , hotel 3 étoiles ${region} , ${region} 3 étoiles, hotel ${region} 3 étoiles  pas cher, prix hotel  3 étoiles ${region}, promo hotel  3 étoiles ${region}`,
        alternates: {
          canonical: `https://tn.tunisiebooking.com/hotel_${region}_3_etoiles.html`,
        },
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
            <Destination region={region} sliders={carouselData} />
        </div>
    );
};

export default HotelsDestination;

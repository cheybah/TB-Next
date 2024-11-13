// src/app/components/Home/Home.js
// src/app/components/Home/Home.js

import { fetchCarouselData, fetchDestinations } from '../../redux/slices/dataSlice';
import { store } from '../../redux/store';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import Separator from '../Separator/Separator';
import TopDestinations from '../TopDestinations/TopDestinations';
import AdTb from '../AdTB/AdTB';
import Slides from '../Slides/Slides';
import BackgroundSection from '../Moteur/BackgroundSection';
import Carousel from '../Carousel/Carousel';

export async function fetchData() {
  // Dispatching actions to fetch data
  const dispatch = store.dispatch;
  try {
    const carouselData = await dispatch(fetchCarouselData());
    const destinationsData = await dispatch(fetchDestinations());
    return {
      carouselData: carouselData.payload, // The actual data after fulfilled
      destinationsData: destinationsData.payload, // The actual data after fulfilled
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { carouselData: [], destinationsData: [] }; // Return empty if fetch fails
  }
}

const Home = async () => {
  const { carouselData, destinationsData } = await fetchData();
  return (
    <div className="text-center">
      <Header />
      <BackgroundSection />
      <Slides />
      <Separator />
      <Carousel sliders={carouselData} />
      <TopDestinations destinations={destinationsData} />
      <AdTb />
      <Separator />
      <Footer />
    </div>
  );
};

export default Home;

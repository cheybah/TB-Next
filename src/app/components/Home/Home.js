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
  const dispatch = store.dispatch;
  try {
    const carouselData = await dispatch(fetchCarouselData());
    const destinationsData = await dispatch(fetchDestinations());
    console.log("Fetched carousel data:", carouselData.payload);  // Log to check the data
    return {
      carouselData: carouselData.payload || [],  // Ensure it's always an array
      destinationsData: destinationsData.payload || [],  // Ensure it's always an array
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { carouselData: [], destinationsData: [] }; // Return empty arrays in case of error
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
      <Footer />
    </div>
  );
};

export default Home;

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Separator from "../Separator/Separator";
import TopDestinations from "../TopDestinations/TopDestinations";
import AdTb from "../AdTB/AdTB";
import Slides from "../Slides/Slides";
import BackgroundSection from "../Moteur/BackgroundSection";
import Carousel from "../Carousel/Carousel";
import {useDataStore, initializeDataStore} from "../../zustand/dataStore";

const Home = async () => {
  await initializeDataStore();
  
  // Access Zustand store state for server-side rendering
  const { destinations, carouselSlides } = useDataStore.getState();


  return (
    <div className="text-center">
      <Header />
      <BackgroundSection />
      <Slides />
      <Separator />
      <Carousel carouselSlides={carouselSlides} />
      <TopDestinations destinations={destinations} />
      <AdTb />
      <Separator />
      <Footer />
    </div>
  );
};

export default Home;

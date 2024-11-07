"use client" ;
import dynamic from 'next/dynamic';
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import Separator from "../Separator/Separator";
import TopDestinations from "../TopDestinations/TopDestinations";
import AdTb from "../AdTB/AdTB";
import Slides from "../Slides/Slides";
import BackgroundSection from "../Moteur/BackgroundSection";
//import Carousel from '../Carousel/Carousel';

async function fetchCarouselData() {
  const [CarouselResponse] = await Promise.all([
    fetch(`http://api.resabookings.com/api/api/api_slides/api_slides.php`, { cache: 'no-store' })
  ]);
  const CarouselData = await CarouselResponse.json();
  const slides = CarouselData.Slides;

  return { slides };
}

const Home = async () => {
  const { slides } = await fetchCarouselData();

  return (
    <div className="text-center">
      <Header />
      <BackgroundSection />
      <Slides />
      <Separator />
      {/*<Carousel slides={slides} />*/}
      <TopDestinations />
      <AdTb />
      <Separator />
      <Footer />
    </div>
  );
};

export default Home;

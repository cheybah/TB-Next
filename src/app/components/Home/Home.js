
 import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
// import './SplashScreen.css';
import Carousel from "../Carousel/Carousel";
import Separator from "../Separator/Separator";
import Slides from "../Slides/Slides";
import TopDestinations from "../TopDestinations/TopDestinations";
import AdTb from "../AdTB/AdTB";
import BackgroundSection from "../Moteur/BackgroundSection";

// Splash Screen Component
const SplashScreen = () => {
    return (
        <div className="splash-screen w-full h-screen flex items-center justify-center bg-white-500">
            <img 
                src="/logo-TunisieBooking1.svg" 
                alt="Tunisiebooking logo" 
                className="floating-logo"
            />
        </div>
    );
};
// Server-side data fetching within the Carousel component
async function fetchCarouselData() {
    const [CarouselResponse] = await Promise.all([
        fetch(`http://api.resabookings.com/api/api/api_slides/api_slides.php`, { cache: 'no-store' })
    ]);

    const CarouselData = await CarouselResponse.json();

    const slides = CarouselData.Slides;

    return { slides};
}

const Home = async() => {
    // Initialize state for the splash screen check
    // let hasSeenSplash = false;
   const { slides} = await fetchCarouselData();
    // // Check if we are running in the browser
    // if (typeof window !== 'undefined') {
    //     // Check if splash screen has been seen before
    //     hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    // }

    // // If the splash screen has not been seen, show it and then set the sessionStorage
    // if (!hasSeenSplash) {
    //     if (typeof window !== 'undefined') {
    //         // Mark splash screen as seen
    //         sessionStorage.setItem("hasSeenSplash", "true");

    //         // Show splash screen and then reload the page after a timeout (3.5 seconds)
    //         setTimeout(() => {
    //             window.location.reload(); // Refresh page after splash screen
    //         }, 3500);
    //     }

    //     // Return the splash screen component
    //     return <SplashScreen />;
    // }

    // Main content for when splash screen has already been seen
    return (
        <>
            <div className="text-center">
                {/* <Header />
                <BackgroundSection />
                <Slides />
                <Separator /> */}
                <Carousel slides={slides} />
                {/* <TopDestinations />
                <AdTb />
                <Separator /> */}
                <Footer />
            </div>
        </>
    );
};

export default Home;



import Header from '../../components/Header/Header';
;
import Footer from '../../components/Footer/Footer';
import BackgroundSection from '../../components/Moteur/BackgroundSection'; // Fixed double slash


export const metadata = {
    title: 'Tunisiebooking.com vacances a prix promos',
    description: 'Tunisiebooking.com vacances aprés promos',
    keywords: "hotels hammamet, hotel sousse, centre de bien-etre, journée de bien-etre, sorties, loisirs, restaurants, promos, réductions, promotions", 
};



// Component to display the hotel results
const Destination = async ({ searchParams }) => {   
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <BackgroundSection />
            <Footer />
        </div>
    );
};

export default Destination;

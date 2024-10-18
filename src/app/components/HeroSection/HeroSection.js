import React from 'react';
import SearchBar from '../AdvancedSearchBar/SearchBar';

const HeroSection = () => {
    return (
        <section className="relative h-[80vh] overflow-hidden"> {/* Set section height to match video */}
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 object-cover w-full h-full" 
            >
                <source src="/tunisiebooking.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center h-full" style={{ marginTop: '10vh' }}>
                <h1 className="text-4xl font-bold text-white mb-4">Bienvenue Sur TunisieBooking !</h1>
                <p className="text-lg text-white mb-12">Trouvez l'endroit idéal pour votre séjour</p>
                <SearchBar />
            </div>
        </section>
    );
};

export default HeroSection;

import React from 'react';
import SearchBar from './SearchBar';
import ST from './ST';

const BackgroundSection = () => {
    return (
        <section className="w-full bg-no-repeat bg-cover bg-[url('https://tn.tunisiebooking.com/images/img_moteur_home2-min.jpg')] bg-blend-multiply lg:h-[328px] sm:h-[500px]" >
        <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56 ">
            <span className="hidden sm:block titre absolute flex top-20 sm:top-28 lg:top-24 md:top-20 text-white   md:text-left text-[24px] sm:text-[38px] lg:text-[48px] font-semibold leading-[32px] sm:leading-[59px] opacity-100 w-[80%] sm:w-3/4 sm:px-0 md:top-20 md:w-4/5"
                style={{ top:"8rem" ,textShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)', fontFamily: '-apple-system, Roboto, Segoe UI, Helvetica, Arial, sans-serif'}}>
                Bienvenue sur TunisieBooking.com
            </span>
            
            <span className=" hidden sm:block sub_title absolute flex top-40 sm:top-44 md:top-42 lg:top-42 text-white text-justify text-[14px] sm:text-[17px] lg:text-[20px] font-semibold leading-[18px] sm:leading-[20px] opacity-100 w-[80%] sm:w-2/4 sm:px-0 md:w-4/5"
                style={{ top: "13rem", textShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)', fontFamily: '-apple-system, Roboto, Segoe UI, Helvetica, Arial, sans-serif'}}>
                Retrouvez nos offres d’hôtels en Tunisie, de Voyages à l’étranger, des Billets d’avion, Omra et plus encore …
            </span>
            <ST />
        </div>
    </section>
    );
};  

export default BackgroundSection
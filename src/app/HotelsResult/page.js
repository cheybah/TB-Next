// app/hotels/page.js (or your relevant path)

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import client components without SSR
const Header = dynamic(() => import('../components/Header/Header'), { ssr: false });
const MoteurResult = dynamic(() => import('../components/MoteurResult/MoteurResult'), { ssr: false });
const ResultHotel = dynamic(() => import('../components/ResultHotel/ResultHotel'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer/Footer'), { ssr: false });

export async function generateMetadata() {
    return {
        title: 'Tunisiebooking.com vacances à prix promos',
        description: 'Tunisiebooking.com vacances après promos',
    };
}

const HotelsResult = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <MoteurResult />
            <ResultHotel />
            <Footer />
        </div>
    );
};

export default HotelsResult;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackgroundSection from '../../components/MoteurDestination/BackgroundSection';
import Questions from './Questions';
// Component to display the hotel results
const Destination =  ({ region, sliders = [] }) => {
    const router = useRouter();
    
    // Replace underscores with spaces
    const formattedRegion = region.replace(/_/g, ' ');

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <BackgroundSection region={formattedRegion} customSpanContent=""/>
            <Questions region={formattedRegion} slides={sliders} />
            <Footer />
        </div>
    );
};
export default Destination;

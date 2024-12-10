"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "../Header/Header";
import BackgroundSection from "../MoteurDestination/BackgroundSection";
import Footer from "../Footer/Footer";
import Questions from "./Questions";

// Component to display the hotel results
const Destination = ({ region, sliders = [] }) => {
    const router = useRouter();
    
    // Replace underscores with spaces
    const formattedRegion = region.replace(/_/g, ' ');

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <BackgroundSection region={formattedRegion} customSpanContent={`Hôtels ${formattedRegion} 3 étoiles`} />
            <Questions region={formattedRegion} slides={sliders} />
            <Footer />
        </div>
    );
};

export default Destination;

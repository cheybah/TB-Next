"use client";

import React, { useState, useEffect } from "react";
import Header  from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import './SplashScreen.css';
import Carousel from "../components/Carousel/Carousel";
import Separator from "../components/Separator/Separator";
import Slides from "../components/Slides/Slides";
import TopDestinations from "../components/TopDestinations/TopDestinations";
import AdTb from "../components/AdTB/AdTB";


// Splash Screen Component
const SplashScreen = () => {
return (
    <div className="splash-screen w-full h-screen flex items-center justify-center bg-white-500">
    <img 
        src="https://tn.tunisiebooking.com/images/icons-menu-moteur/logo-TunisieBooking1.svg" 
        alt="Tunisie Booking Logo" 
        className="floating-logo"
    />
    </div>
);
};

const TestComponent = () => {
const [loading, setLoading] = useState(true);

useEffect(() => {
    // Check if the splash screen has been shown before using sessionStorage
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
        // If the splash screen was already shown, skip the loading state
        setLoading(false);
    } else {
        // Otherwise, show the splash screen for 3.5 seconds
        const timer = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("hasSeenSplash", "true"); // Mark as shown
        }, 3500);

        return () => clearTimeout(timer);
    }
}, []);

return (
    <div className="text-center">
    {/* Show Splash Screen while loading */}
    {loading ? (
        <SplashScreen />
    ) : (
        // Main content will be shown after loading
        <>
        <Header />
        <HeroSection />
        <Slides />
        <Separator />
        <Carousel />
        <TopDestinations />
        <AdTb />
        <Separator />
        <Footer />
        </>
    )}
    </div>
);
};

export default TestComponent;

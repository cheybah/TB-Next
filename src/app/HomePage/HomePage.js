"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import './SplashScreen.css';
import Carousel from "../components/Carousel/Carousel";
import Separator from "../components/Separator/Separator";
import Slides from "../components/Slides/Slides";
import TopDestinations from "../components/TopDestinations/TopDestinations";
import AdTb from "../components/AdTB/AdTB";
import BackgroundSection from "../components/Moteur/BackgroundSection";
import Image from 'next/image';

// Splash Screen Component
const SplashScreen = () => {
    return (
        <div className="splash-screen w-full h-screen flex items-center justify-center bg-white-500">
            <Image
                src="https://tn.tunisiebooking.com/images/icons-menu-moteur/logo-TunisieBooking1.svg"
                alt="Tunisie Booking Logo"
                className="floating-logo"
                width={500}
                height={300}
                loading="lazy"
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

    useEffect(() => {
        /** JSON LD **/
        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "tunisiebooking",
            "url": "http://react.tunisiebooking.com/",
            "logo": "/logo31.png",
            "alternateName": "tunisiebooking"
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(jsonLd);
        document.head.appendChild(script);

        // Cleanup script on unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []); // This effect runs once when the component mounts

    return (
        <>
            <div className="text-center">
                {/* Show Splash Screen while loading */}
                {loading ? (
                    <SplashScreen />
                ) : (
                    // Main content will be shown after loading
                    <>
                        <Header />
                        {/* <HeroSection /> */}
                        <BackgroundSection />
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
        </>
    );
};

export default TestComponent;

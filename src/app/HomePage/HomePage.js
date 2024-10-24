"use client";

import Head from "next/head";
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

<<<<<<< HEAD
    return (
        <><Head>
            <title>Agence de voyage Tunisie Booking : le N° 1 D'Hôtel Tunisie</title>
            <meta name="keywords" content="agence de voyage, agence de voyage tunisie" />
            <meta
                name="description"
                content="TunisieBooking - Votre agence de voyage pour réservation ☀ : ✓ Hôtels en Tunisie ✓ Hôtels à l’étranger ✓ Voyages organisés ✓ Omra ✓ Billets d’avion - Service client 7j/7 - 27 agences." />
            <meta name="robots" content="index, follow" />
        </Head>
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
            </div></>
    );
=======
return (
    <div className="text-center">
    {/* Show Splash Screen while loading */}
    {loading ? (
        <SplashScreen />
    ) : (
        // Main content will be shown after loading
        <>
        <Header />
        {/*<HeroSection />*/}
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
);
>>>>>>> 23dc25137837f6267408f9b29c278a7d54db48fe
};

export default TestComponent;

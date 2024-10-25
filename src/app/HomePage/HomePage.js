"use client";
import Head from 'next/head';
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
import BackgroundSection from "../components/Moteur/BackgroundSection";


// Splash Screen Component
const SplashScreen = () => {
return (
    
    <Head>
      <title>Your Page Title</title>
      <meta name="description" content="A short description of your page's content"/>
      <meta property="og:title" content="Your Page Title" />
      <meta property="og:description" content="A detailed description of your page's content" />
      <meta property="og:image" content="https://example.com/thumbnail.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

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
};

export default TestComponent;

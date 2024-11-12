"use client" ;
import React, { useEffect, useState } from "react";


const SplashScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

        if (hasSeenSplash) {
            // If the splash screen was already shown, skip the loading state
            setLoading(false);
        } else {
            // Otherwise, show the splash screen for 3.5 seconds
            const timer = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem("isLoaded", "true"); 
            }, 3500);

            return () => clearTimeout(timer);
        }
    }, []);


    return (
        <div className="splash-screen w-full h-screen flex items-center justify-center bg-white-500">
            <img
                src="/logo-TunisieBooking1.svg"
                alt="Tunisie Booking Logo"
                className="floating-logo"
            />
        </div>
    );
};


export default SplashScreen;
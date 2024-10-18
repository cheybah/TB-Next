"use client";

import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import './carousel.css'; 

const Carousel = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
    
        const hiddenElements = document.querySelectorAll('.hidden1');
        const hiddenElements1 = document.querySelectorAll('.hidden2');
        hiddenElements.forEach((element) => observer.observe(element));
        hiddenElements1.forEach((element) => observer.observe(element));
    
        // Cleanup the observer on component unmount
        return () => {
            hiddenElements.forEach((element) => observer.unobserve(element));
            hiddenElements1.forEach((element) => observer.unobserve(element));
        };
    }, []); // Empty dependency array to run only on mount
return (
<>
<div>
    <h1 className="text-center font-bold text-2xl antialiased mo hidden1"> Nos Plus Belles Thématiques
    </h1>
</div>
<Splide
    options={{
        type: 'loop',
        perPage: 3, 
        focus: 'center', // Focus on the center item
        autoplay: true, // Automatically plays the slides
        interval: 2000, // Increased interval (3 seconds)
        speed: 700, // Transition speed for smoothness
        pauseOnHover: true, 
        flickMaxPages: 1, 
        updateOnMove: true,
        pagination: false,
        padding: '10%', 
        breakpoints: {
        1440: {
            perPage: 1, // Show 1 image for smaller screens
            padding: '30%',
        },
        },
    }}
    >
<SplideSlide>
    <div className="relative">
        <img src="/istanbul-min.jpg" alt="Istanbul" className="carousel-image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold mb-4">Istanbul</h2>
            <button className="bg-white0 text px-4 py-2 rounded-lg font-semibold">Explore</button>
        </div>
    </div>
</SplideSlide>

<SplideSlide>
    <div className="relative">
        <img src="/beach-min.jpg" alt="Beach" className=" carousel-image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold mb-4">Beach</h2>
            <button className="bg-white0 text px-4 py-2 rounded-lg font-semibold">Explore</button>
        </div>
    </div>
</SplideSlide>

<SplideSlide>
    <div className="relative">
        <img src="/resort-min.jpg" alt="Resort" className=" carousel-image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold mb-4">Resort</h2>
            <button className="bg-white0 text px-4 py-2 rounded-lg font-semibold">Explore</button>
        </div>
    </div>
</SplideSlide>

<SplideSlide>
    <div className="relative">
        <img src="/omra-min.jpg" alt="Omra" className="carousel-image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold mb-4">Omra</h2>
            <button className="bg-white0 text px-4 py-2 rounded-lg font-semibold">Explore</button>
        </div>
    </div>
</SplideSlide>

    </Splide></>
);
};

export default Carousel;
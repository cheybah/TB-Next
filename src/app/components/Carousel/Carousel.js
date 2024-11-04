"use client";

import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import './carousel.css'; 
import axios from 'axios';
import Image from 'next/image';

const Carousel = () => {
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        if (typeof window !== "undefined") {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        // Observe the hidden elements
        const hiddenElements = document.querySelectorAll('.hidden2');
        hiddenElements.forEach((element) => observer.observe(element));

        // Cleanup the observer on component unmount
        return () => {
            hiddenElements.forEach((element) => observer.unobserve(element));
        };
    }
    }, []); // Run once on mount

    // Fetch slides data
    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const res = await axios.get('http://api.resabookings.com/api/api/api_slides/api_slides.php');
                const slidesData = res.data.Slides; // Accessing the "Slides" array
                setSlides(slidesData);
            } catch (err) {
                console.error("Error fetching slides:", err);
            }
        };

        fetchSlides();
    }, []); // Run once on mount

    if (slides.length === 0) {
        return <div>Loading...</div>; // Loading message while waiting for data
    }

    return (
        <>
            <div>
                <h1 className="text-center font-bold text-2xl antialiased mo hidden2">
                    Nos Plus Belles Thématiques
                </h1>
            </div>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 3,
                    focus: 'center',
                    autoplay: true,
                    interval: 2000, // 3 seconds interval
                    speed: 700,
                    pauseOnHover: true,
                    flickMaxPages: 1,
                    updateOnMove: true,
                    pagination: false,
                    padding: '10%',
                    breakpoints: {
                        1440: {
                            perPage: 2, // 2 images for medium screens
                            padding: '10%',
                        },
                        1024: {
                            perPage: 1, // 1 image for smaller screens
                            padding: '30%',
                        },
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SplideSlide key={index}>
                        <div className="relative mx-2">
                            <Image
                                src={slide.url_image_p}
                                alt={`Slide_${index + 1}`}
                                className="carousel-image"
                                width={500}
                                height={300}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                <a href={slide.url_redirection} className="text-3xl font-bold mb-4">
                                    Slide {index + 1}
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </>
    );
};

export default Carousel;

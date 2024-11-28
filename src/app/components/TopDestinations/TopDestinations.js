"use client";

import React from "react";
import { useRouter } from "next/navigation";
import './topDestinations.css';

const TopDestinations = () => {
    const router = useRouter();

    const destinations = [
        {
            id: 370,
            image: "/img_Aziza_Thalasso.jpg",
            name: "Aziza Thalasso & Golf",
            location: "Hammamet",
            price: "69",
            currency: "DT",
            rating: 4,
            date: "02/11/24",
        },
        {
            id: 60,
            image: "/El_Mouradi_El_Menzah_2.jpg",
            name: "El Mouradi El Menzah",
            location: "Hammamet",
            price: "76",
            currency: "DT",
            rating: 4,
            date: "03/11/24",
        },
        {
            id: 341,
            image: "/Orient_Palace_&_Spa_2.jpg",
            name: "Orient Palace & Spa",
            location: "Sousse",
            price: "64",
            currency: "DT",
            rating: 4,
            date: "11/11/24",
        },
        {
            id: 250,
            image: "/Movenpick_Resort_&_Marine_Spa_2.jpg",
            name: "Movenpick Resort & Marine Spa",
            location: "Sousse",
            price: "156",
            currency: "DT",
            rating: 5,
            date: "02/11/24",
        },
        {
            id: 759,
            image: "/TMK_Marine_Beach_2.jpg",
            name: "TMK Marine Beach",
            location: "Djerba",
            price: "72",
            currency: "DT",
            rating: 4,
            date: "02/11/24",
        },
        {
            id: 427,
            image: "/Kelibia_Beach_2.jpg",
            name: "Kelibia Beach",
            location: "Kelibia",
            price: "155",
            currency: "DT",
            rating: 4,
            date: "02/11/24",
        },
        {
            id: 68,
            image: "/El_Mouradi_Mahdia_2.jpg",
            name: "El Mouradi Mahdia",
            location: "Mahdia",
            price: "88",
            currency: "DT",
            rating: 4,
            date: "02/11/24",
        },
        {
            id: 239,
            image: "/Golden_Yasmine_Mehari_Tabarka_.jpg",
            name: "Golden Yasmine Mehari Tabarka",
            location: "Tabarka",
            price: "71",
            currency: "DT",
            rating: 4,
            date: "02/11/24",
        },
        {
            id: 276,
            image: "/Thalassa_Mahdia_1.jpg",
            name: "Thalassa Mahdia",
            location: "Mahdia",
            price: "67",
            currency: "DT",
            rating: 4,
            date: "02/11/24",
        },
    ];

    const handleNavigate = (destination) => {
        if (typeof window !== "undefined") { // Ensure we're in the browser
            const today = new Date();
            const departureDate = new Date(today);
            departureDate.setDate(today.getDate()); // Set departure date as today
    
            const returnDate = new Date(today);
            returnDate.setDate(today.getDate() + 2); // Set return date as today + 2 days
    
            // Format dates as YYYY-MM-DD
            const formattedDepartureDate = departureDate.toISOString().split('T')[0];
            const formattedReturnDate = returnDate.toISOString().split('T')[0];
    
            const { location } = destination; // Use the location as the 'ville'
    
            // Store data in sessionStorage
            if (window.sessionStorage) {
                sessionStorage.setItem('departureDate', formattedDepartureDate);
                sessionStorage.setItem('returnDate', formattedReturnDate);
                sessionStorage.setItem('location', location);
            }
            
    
            // Push to HotelDetails page with only the id in the URL
           router.push(`/detail_hotel_${destination.id}/`);
        }
    };

    return (
        <section className="container mx-auto py-12 px-6">
            <h1 className="text-center font-bold text-2xl antialiased">
                Les Imbattables du Moment
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {destinations.map((destination) => (
                    <div
                        key={destination.id}
                        className="destination-card transform transition-all duration-1000 ease-out cursor-pointer"
                        onClick={() => handleNavigate(destination)}
                    >
                        <div className="relative image-container">
                            <img
                                className="destination-image"
                                src={`${destination.image}`}
                                alt={`Image of ${destination.name}`}
                            />
                        </div>
                        <div className="content-container">
                            <div>
                                <h5 className="destination-title">{destination.name}</h5>
                                <div className="rating-container">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            aria-hidden="true"
                                            className={`star-icon ${
                                                index < destination.rating
                                                    ? "text-black-300"
                                                    : "text-gray-300"
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        className="h-4"
                                        src='/localisation.svg'
                                        alt='localisation'
                                        style={{ marginRight: '8px' }} // Add space between the image and text
                                    />
                                    {destination.location}
                                </div>
                            </div>

                            <div className="price-container">
                                <div>à partir de * </div>
                                <div className="current-price">{destination.price} {destination.currency}</div>
                                <div>Prix du {destination.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopDestinations;

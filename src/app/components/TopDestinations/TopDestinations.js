"use client";

import React , {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import './topDestinations.css';

const TopDestinations = () => {
    const router = useRouter();
    const [destinations, setDestinations] = useState([]);


        // Fetch destinations from the backend API
        useEffect(() => {
            const fetchDestinations = async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/fetchDestinations');
                    const data = await response.json();
                    setDestinations(data); // Update state with fetched data
                } catch (error) {
                    console.error("Failed to fetch destinations:", error);
                }
            };
            fetchDestinations();
        }, []);
 
    // Function to handle navigation when a destination card is clicked
    const handleNavigate = (destination) => {
        // Ensure services is a stringified array
        if (destination.services && Array.isArray(destination.services)) {
            destination.services = JSON.stringify(destination.services);
        }
        const query = new URLSearchParams(destination).toString();
        router.push(`/HotelDetails?${query}`);
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
                        className={`destination-card transform transition-all duration-1000 ease-out`}
                        onClick={() => handleNavigate(destination)} // onClick event to get destination by id
                    >
                        <div className="relative image-container">
                            <img
                                className="destination-image"
                                src={`http://localhost:8000/storage/${destination.image}`}
                                alt="hotel image"
                            />
                            <span className="discount-badge">
                                {destination.discount}
                            </span>
                        </div>
                        <div className="content-container">
                            <div>
                                <h5 className="destination-title">{destination.name}</h5>
                            </div>
                            <div className="price-container">
                                <p>
                                    <span className="current-price">{destination.price}</span>
                                    <span className="original-price">
                                        {destination.originalPrice}
                                    </span>
                                </p>
                                <div className="rating-container">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            aria-hidden="true"
                                            className={`star-icon ${index < destination.rating
                                                    ? "text-yellow-300"
                                                    : "text-gray-300"
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                    <span className="rating-badge">{destination.rating}</span>
                                </div>
                            </div>
                            <button className="reserve-button">
                                Réserver Maintenant
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopDestinations;

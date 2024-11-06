"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import './topDestinations.css';
import { destinations } from "./Destinations";



const TopDestinations = () => {
const sectionRef = useRef(null);
const router = useRouter();



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

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((element) => observer.observe(element));

// Cleanup the observer on component unmount
return () => {
    hiddenElements.forEach((element) => observer.unobserve(element));
};
    }
}, []); 

const handleNavigate = (destination) => {
    // Ensure services is a stringified array
    if (destination.services && Array.isArray(destination.services)) {
        destination.services = JSON.stringify(destination.services);
    }
    const query = new URLSearchParams(destination).toString();
    router.push(`/HotelDetails?${query}`);
};



return (
<section ref={sectionRef} className="container mx-auto py-12 px-6">
<h1 className="text-center font-bold text-2xl antialiased mo hidden1">
Les Imbattables du Moment
</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
{destinations.map((destination) => (
    <div
    key={destination.id}s
    className={`destination-card transform transition-all duration-1000 ease-out`}
    onClick={() => handleNavigate(destination)} //onClick event to get destination by id 
    >
    <div className="relative image-container">
        <img
        className="destination-image"
        src={destination.image}
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
                className={`star-icon ${
                index < destination.rating
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

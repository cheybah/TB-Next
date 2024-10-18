import React, { useEffect } from 'react';
import './slides.css';


const Slides = () => {
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
    hiddenElements.forEach((element) => observer.observe(element));

    // Cleanup the observer on component unmount
    return () => {
        hiddenElements.forEach((element) => observer.unobserve(element));
    };
}, []); // Empty dependency array to run only on mount
return (
<div className="slider avantage mt-10 mb-4">
<p className="text-center font-bold text-2xl antialiased mo ">
Les Bonnes Raisons de faire appel à nous
</p>
<div className="flex flex-col lg:flex-row justify-around items-center gap-6">
<div className="logo hidden1 flex flex-col items-center w-full max-w-xs">
    <img
    alt="prix-garantis"
    className="w-24 h-20 mb-2"
    src="/prix-garantis.svg"
    />
    <p className="title_avantage text-center">Meilleur Prix Garanti</p>
    <p className="sous_title_avantage mb-1 font-medium text-center">Hôtel, voyage, Billet d'avion...</p>
</div>
<div className="logo hidden1 flex flex-col items-center w-full max-w-xs">
    <img
    src="/assistance_conseillers.svg"
    alt="ass_conseillers"
    className="w-24 h-20 mb-2"
    />
    <p className="title_avantage text-center">Service Clients</p>
    <p className="sous_title_avantage mb-1 font-medium text-center">à votre écoute 7/7</p>
</div>
<div className="logo hidden1 flex flex-col items-center w-full max-w-xs">
    <img
    src="/Combined-Shape.svg"
    alt="Combined-Shape"
    className="w-24 h-20 mb-2"
    />
    <p className="title_avantage text-center">Paiement Sécurisé</p>
    <p className="sous_title_avantage mb-1 font-medium text-center">Réservations Faciles et 100% Sécurisées</p>
</div>
<div className="logo hidden1 flex flex-col items-center w-full max-w-xs">
    <img
    src="/e-agence.svg"
    alt="e-agence"
    className="w-24 h-20 mb-2"
    />
    <p className="title_avantage text-center">34 Agences</p>
    <p className="sous_title_avantage mb-1 font-medium text-center">à travers la Tunisie</p>
</div>
</div>
</div>

);
};

export default Slides;
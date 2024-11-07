"use client";

import React, { useState } from "react";
import './slides.css';

const Slides = () => {
  const [isObserved, setIsObserved] = useState(false);

  // Function to add the IntersectionObserver
  const addObserver = () => {
    if (typeof window !== "undefined" && !isObserved) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      }, { threshold: 0.1 });

      // Query all elements with the 'hidden1' class
      const hiddenElements = document.querySelectorAll('.hidden1');

      // Add observer to each of the elements
      hiddenElements.forEach((element) => observer.observe(element));

      // Set observed state to true to prevent re-adding the observer
      setIsObserved(true);
    }
  };

  // Call addObserver directly during the render phase
  if (!isObserved) {
    addObserver();
  }

  return (
    <div className="slider avantage mt-10 mb-4">
      <p className="text-center font-bold text-2xl antialiased mo ">
        Les Bonnes Raisons de faire appel à nous
      </p>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-6">
        <div className="logo  flex flex-col items-center w-full max-w-xs">
          <img
            alt="prix-garantis"
            className="w-24 h-20 mb-2"
            src="/prix-garantis.svg"
          />
          <p className="title_avantage text-center">Meilleur Prix Garanti</p>
          <p className="sous_title_avantage mb-1 font-medium text-center">Hôtel, voyage, Billet d&apos;avion...</p>
        </div>
        <div className="logo  flex flex-col items-center w-full max-w-xs">
          <img
            src="/assistance_conseillers.svg"
            alt="ass_conseillers"
            className="w-24 h-20 mb-2"
          />
          <p className="title_avantage text-center">Service Clients</p>
          <p className="sous_title_avantage mb-1 font-medium text-center">à votre écoute 7/7</p>
        </div>
        <div className="logo  flex flex-col items-center w-full max-w-xs">
          <img
            src="/Combined-Shape.svg"
            alt="Combined-Shape"
            className="w-24 h-20 mb-2"
          />
          <p className="title_avantage text-center">Paiement Sécurisé</p>
          <p className="sous_title_avantage mb-1 font-medium text-center">Réservations Faciles et 100% Sécurisées</p>
        </div>
        <div className="logo  flex flex-col items-center w-full max-w-xs">
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

"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Header from "../Header/Header";
import CardComponent from "../HotelToboggan/CardComponent";
import Image from "next/image";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Footer from '../Footer/Footer';
import './card.css';
const DestinationDescription =  ({ region}) => {
    const [expandedSections, setExpandedSections] = useState({
        section1: false,
        section2: false,
        section3: false,
      });
      const toggleContent = (section) => {
        setExpandedSections(prev => ({
          ...prev,
          [section]: !prev[section],
        }));
      };
      const [activeTab, setActiveTab] = React.useState("hammamet");

    return (
        <div className="">
       
        <div className="px-4 mx-auto max-w-screen-xl sm:px-[15rem] md:px-[15rem] lg:px-[20rem]">
          
         
          <div className="text-left mt-4 px-4 sm:px-6 md:px-8">
            {/* Title */}
            <div className="text-2xl sm:text-3xl font-bold">
                Hotel {region} pas cher
            </div>
  
            {/* Divider */}
            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
  
            {/* Collapsible Section */}
            <div className={`overflow-hidden transition-all duration-300 ${expandedSections.section1 ? 'max-h-none' : 'max-h-[6rem]'}`}>
              <p className="mt-4 text-sm sm:text-base md:text-lg">
              Notre agence de voyage tunisie vous propose différentes formules d’hébergement selon vos goûts et votre budget.
              Vous pourrez bénéficier d’une formule de séjour tout-compris, en demi-pension ou pension complète, afin de ne pas dépasser votre budget de vacances.
              </p>
              <div className="mt-4">
                <p className="text-sm sm:text-base md:text-lg">
                Early booking Tunisie vous propose différentes formules d’hébergement selon vos goûts nous vous invitons à partir à un hotel {region} all inclusive.
                Pour vous permettre de profiter d’un voyage tunisie à {region} avec le maximum de confort, Tunisie Booking négocie pour vous les meilleurs tarifs.
                Profitez du confort d'une chambre single ou double avec une douche et une terrasse.
                Nagez et détendez-vous dans une piscine d’eau de mer extérieure ou dans une superbe piscine intérieure chauffée en hiver.
                Offrez-vous une séance sauna ou massage dans une agréable atmosphère de relaxation et de bien-être.
                Rien de tel pour vous sentir détendu et plus léger que jamais.
                De nombreuses activités sportives vous seront proposées sur place, de l'animation, ainsi expérimentez le plaisir absolu pour vos enfants au sein de l'hotel avec toboggan.
                Avec Tunisie Booking, tout est prévu pour que divertissements et détente soient au rendez-vous.
                Lequel choisir : Hotel 3 etoiles, 4 etoiles ou 5 etoiles ?
                Faut-il choisir l'un des hotel {region} 5 étoiles pour être sûr d’avoir effectué le bon choix ? Non ce n’est tout à fait vrai. On trouve de nombreux hotel {region} 4 étoiles ou même des hotel {region} 3 étoiles qui sont bien recommandés par nos clients.
                Afin de choisir l'hébergement idéal qui correspond parfaitement à vos attentes, il est préférable de tenir compte des commentaires laissés par nos clients voyageurs.
                Ces avis voyageurs fournissent des informations précieuses sur l'expérience vécue par d'autres personnes ayant séjourné dans les mêmes établissements.
                Ils couvrent des aspects tels que la qualité des services, le confort des chambres, la propreté, la localisation et bien d'autres éléments qui peuvent influencer votre décision.
                En prenant en considération ces retours d'expérience, vous pouvez vous faire une idée plus précise de ce à quoi vous attendez.
                Cela peut grandement contribuer à rendre votre voyage {region} encore plus agréable et mémorable.
                Hotel {region} Nord ou Sud ?
                Vous hésitez encore entre un hotel nord et un autre à {region} Sud ?
                En fait, {region} nord est plus proche du centre ville et de Nabeul, elle constitue l’ancienne zone touristique, reconnue par la qualité de sa station balnéaire.
                Tandis que {region} Sud est située à 10 km de la ville.
                C’est la zone touristique la plus récente, animée par différents types d’attraction : discothèques, restos, parc aquatique, port de plaisance, parc d’attraction ‘carthage land’…
                </p>
              </div>
            </div>
  
            {/* Toggle Button */}
            <button
              onClick={() => toggleContent('section1')}
              className="mt-2 text-blue-500 flex items-center space-x-2"
            >
              <span>{expandedSections.section1 ? "Afficher moins" : "Afficher plus"}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${expandedSections.section1 ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </div>
  
          <div className="text-left mt-4 px-4 sm:px-6 md:px-8">
            {/* Title */}
            <div className="text-2xl sm:text-3xl font-bold">
            Que Faire lors d’un séjour {region} ?
            </div>
  
            {/* Divider */}
            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
  
            {/* Collapsible Section */}
            <div className={`overflow-hidden transition-all duration-300 ${expandedSections.section2 ? 'max-h-none' : 'max-h-[6rem]'}`}>
              <p className="mt-4 text-sm sm:text-base md:text-lg">
              Ville située dans le Nord-est de la Tunisie, {region} est l’une des régions les plus touristiques de ce pays.
              Depuis des années, elle attire le curieux du monde entier.
              Que vous soyez à la recherche de calme et de sérénité, ou encore d’aventure et de sensation forte, c’est la destination du moment.
              </p>
              <div className="mt-4">
                <p className="text-sm sm:text-base md:text-lg">
                Un Voyage vers une Détente Profonde !
                C'est une station balnéaire des plus réputée, bordée par des plages d’une beauté rare.
                Elle vous propose un séjour de qualité et placé sous le signe de la détente.
                Outre son littoral et ses mers d’une beauté unique, elle conserve jalousement quelques centres de bien-être, spa et hammam qui vous proposent de gouter aux savoir-faire des locaux en matière de mise en beauté.
                Vivez le Loisir à {region} :
                Petits et grands peuvent trouver satisfaction lors d’une visite de {region}.
                C’est une destination qui se prête aux voyages en famille comme aux séjours en amoureux.
                Il vous suffit de passer quelques heures dans le parc Aquatique Flipper ou l’Aqua parc de la région, voir chez Aqua Land pour vous constituer des souvenirs uniques.
                Si êtes accompagné d’enfant en bas âge, un passage à Mickey et Mike Park sera aussi un must.
                Découvrez une culture unique :
                Pourquoi ne pas profiter de votre escale pour visiter le Pupput ou les ruines de la région ?
                Ce sont des sites archéologiques de renommées internationales, qui ne manqueront pas de vous étonner par leur beauté.
                La médina, {region} et le kabash sont également à votre disposition.
                Vous n’aurez pas le temps de vous ennuyer pendant votre séjour à travers les sites touristiques, vous en apprendrez davantage sur la culture et l’histoire de la Tunisie.
                Visitez notre petit Guide Touristique {region} pour en savoir plus.
                </p>
              </div>
            </div>
  
            {/* Toggle Button */}
            <button
              onClick={() => toggleContent('section2')}
              className="mt-2 text-blue-500 flex items-center space-x-2"
            >
              <span>{expandedSections.section1 ? "Afficher moins" : "Afficher plus"}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${expandedSections.section1 ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </div>
  
  
        </div>
        
      </div>
    );
  };
  
  export default DestinationDescription;
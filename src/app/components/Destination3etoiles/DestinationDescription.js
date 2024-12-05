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
            Tout ce qu'il Faut Savoir sur les Hôtels 3 étoiles à {region}
            </div>
  
            {/* Divider */}
            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
  
            {/* Collapsible Section */}
            <div className={`overflow-hidden transition-all duration-300 ${expandedSections.section1 ? 'max-h-none' : 'max-h-[6rem]'}`}>
              <p className="mt-4 text-sm sm:text-base md:text-lg">
              Quand on a un budget limité, on ne peut pas vraiment s’offrir le luxe pour les vacances à  {region}.
              Néanmoins, avec les moyens dont vous disposez, vous avez la possibilité de réserver une chambre dans un hôtel 3 étoiles à {region}.
              Il est à noter que certains de ces hôtels 3 étoiles sont idéalement situés à proximité de la plage, vous garantissant ainsi un séjour plaisant, les pieds dans le sable.
              </p>
              <div className="mt-4">
                <p className="text-sm sm:text-base md:text-lg">
                Quelle qualité de prestation attendre d'un hotel {region} 3 étoiles  ? 
                La plupart des hotels tunisie 3 étoiles sont dévoués à garantir votre bien-être et la réussite de votre séjour.
                Bien que les chambres dans certains hôtels 3 étoiles à {region} puissent ne pas être extrêmement spacieuses, elles sont agencées et équipées de manière à ce que vous vous sentiez à l'aise.
                Chaque chambre est équipée d'une climatisation, d'une télévision par satellite, d'une salle de bains privative, et pour certains, d'un balcon offrant une vue panoramique sur les environs.
                Si la connexion Wi-Fi n'est pas disponible dans votre chambre, vous pouvez vous rendre dans les espaces communs de l'établissement.
                Pendant votre séjour, vous n'avez pas à vous préoccuper du ménage, car le personnel s'en charge quotidiennement.
                Quelles sont les informations pour réserver un hotel hammamet 3 étoiles ?
                • Les départs et les arrivées :
                À l'hôtel 3 étoiles de {region}, les départs sont programmés entre 5 heures du matin et midi, tandis que les arrivées sont acceptées de 14 heures à 23 heures 30.
                Si vous prévoyez d'arriver en dehors de ces plages horaires, il est recommandé de contacter la réception pour éviter d'éventuelles désagréments et frais additionnels.
                Il convient de noter que ces horaires d'arrivée et de départ peuvent varier légèrement dans d'autres établissements.
                • Les pénalités de retard, de changement de réservation ou d’annulation :
                En cas de retards, de changements, voire d'annulations de réservation, en particulier lorsque ces modifications sont apportées à quelques jours de votre date d'arrivée, des pénalités seront appliquées.
                Le montant de ces pénalités peut varier d'un établissement à l'autre.
                Il est important de noter que certains hôtels 3 étoiles à {region} peuvent même retenir l'acompte versé en cas d'annulation, sans possibilité de remboursement.
                • Que comprennent les frais de réservation dans un hotel hammamet 3 étoiles ?
                Les frais de réservation qu’on vous facture au moment de la réservation ne concernent que la chambre.
                Si vous prenez un service en plus, comme la navette, la réservation de celle-ci peut vous être facturée à part.
                • Explorez les tarifs des hôtels 3 étoiles à {region} en dinars :
                Les hôtels 3 étoiles à {region}, Tunisie, proposent des tarifs débutant autour de 80DT.
                Mais ces prix peuvent varier en fonction de divers critères, pouvant être tantôt plus élevés, tantôt plus bas.
                • Voyager avec des animaux de compagnie :
                L’Hotel {region} 3* n’autorise pas les chiens, les chats et autres animaux de compagnie.
                Quel budget prévoir pour un Hotel {region} 3* ?
                Cependant, il convient de noter que les tarifs peuvent considérablement fluctuer en fonction de la saison et peuvent également varier d'un hôtel à l'autre.
                Nous vous suggérons de consulter les offres disponibles sur notre site internet afin d'optimiser vos dépenses en matière d'hébergement pendant votre séjour à hammamet.
                Quel genre de chambre pouvez-vous réserver dans un hotel hammamet 3 étoiles ?
                Même si vous voyagez en famille nombreuse pour vos vacances à {region}, vous trouverez des solutions d'hébergement adaptées à vos besoins dans un hotel hammamet 3 étoiles.
                En effet, plusieurs établissements proposent des chambres familiales et des chambres communicantes, vous permettant ainsi de séjourner ensemble dans un même espace.
                Soyez rassuré, même avec une classification trois étoiles, vous bénéficierez d'un logement confortable, comprenant une télévision par satellite, la climatisation, une salle de bains privative et même un espace extérieur privé.
                Dans certains hôtels, des chambres sont même équipées d'un coin salon, d'un coffre-fort et d'un mini-bar.
                Lors de la réservation, il est possible de demander des équipements spéciaux pour les enfants, bien que ces services puissent être soumis à des frais supplémentaires.
                Quelles sont les infrastructures disponibles dans un hotel hammamet 3 étoiles ?
                À l'intérieur de l'enceinte de l'hotel hammamet 3 étoiles, vous trouverez au minimum un restaurant et un bar, éliminant ainsi le besoin de quitter l'établissement pour vos repas.
                De plus, la plupart de ces hôtels sont équipés d'une piscine, vous offrant l'opportunité de nager ou simplement de vous détendre près de l'eau.
                Pour les amateurs d'activités terrestres, l'hôtel propose souvent diverses activités, et il y a fréquemment une aire de jeux destinée aux enfants.
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
  
         
  
  
        </div>
        
      </div>
    );
  };
  
  export default DestinationDescription;
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { decode } from 'he';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './swiper-custom.css';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Destination3Stars from "./Destination3Stars";
import Destination4Stars from "./Destination4Stars";
import Destination5Stars from "./Destination5Stars";
import DestinationAllInclusive from "./DestinationAllInclusive";
import DestinationPlage from "./DestinationPlage";
import Questions from "./Questions";



const listQuestions = [
  {
    region: "Djerba",
    questions: [
      { Question: "Quels sont les meilleurs hôtels à Djerba ? ",reponse:"L'hôtel Radisson Blu Djerba cet établissement de luxe est souvent apprécié pour ses installations haut de gamme.Si vous cherchez la formule tout compris, vous pouvez accéder à Tui Blue Palm Beach" },
      { Question: "Combien coûte une nuitée le week-end dans un hôtel à Djerba ?",reponse:"L’ile de Djerba est une destination touristique phare. Le prix varie selon la saison, pour le week-end,  mais généralement la nuit dans un hôtel 5 étoiles est plus cher que l'hebergement dans un hôtel 4 étoiles ou dans un hôtel Djerba trois étoiles." },
      { Question: "Quels sont les meilleurs hôtels en première position de la plage à Djerba ?",reponse:"L’hôtel Dar Jerba Narjes, avec ses bungalows conçus dans le style local, est pratiquement les pieds dans l’eau.Quels sont les meilleurs complexes touristiques Djerba ?• Le complexe hôtelier Royal Karthago Djerba & Thalasso se trouve le long d´une plage privée de sable blanc.• L'Hôtel TUI Blue Palm Beach Palace Djerba qui fait partie d’un des plus importants complexes hôteliers de l’ile." },
      { Question: "Quels hôtels sont les plus proches des célèbres parcs de Midoun ? ",reponse:"L’hôtel le Caribbean World Djerba est situé tout près de Ferme aux Crocodiles  Djerba Explore Park de Midoun." },
      { Question: "Quels sont les meilleurs hôtels avec un centre de thalasso & spa à Djerba ? ",reponse:"Royal Karthago Djerba & Thalasso possède un centre de Thalassothérapie ultra-moderne composé de 7 cabines.Notamment, le centre de spa Athénée Thalasso & Spa de l'hôtel Radisson Blu Resort. " },
      { Question: "Quels hôtels à Djerba sont adaptés aux couples ?",reponse:"Le Cesar Thalasso et le TUI Blue Palm Beach Palace Djerba constituent les établissements de choix pour les couples en quête d’un séjour parfait en tous points." },
      { Question: "Quels sont les meilleurs hôtels destinés aux familles ?",reponse:"L' hôtel Sidi Mansour Resort & Spa , le Djerba Resort et Djerba Holiday Beach sont des hôtels distinés aux familles." },
      { Question: "Quels sont les meilleurs hôtels 4* à Djerba ?",reponse:"Hôtel Tui Magic Life Pénelope et hôtel Vincci helios beach figurent parmi les meilleurs 4 étoiles de Djerba.Consultez la liste complète : Meilleurs hotels 4 étoiles." },
      { Question: "Quels sont les meilleurs hôtels 3* à Djerba ?",reponse:"Parmi les meilleurs hôtels 3 étoiles de Djerba, on peut citer le Djerba Sun Club, Mennix et Bougainvillier....Consultez la liste complète : Meilleurs hôtels 3 étoiles." },
      { Question: "Quels sont les sites touristiques incontournables à Djerba ? ",reponse:"La Médina de Houmt Souk, des souks animés et une ambiance méditerranéenne unique.Le Musée de Guellala, ce musée aperçu de la culture et de l'artisanat traditionnels de Djerba.La Ghriba Synagogue à Erriadh est un lieu de pèlerinage annuel important.Le Parc Djerba Explore,  un parc à thème offrant des expositions sur la culture, l'histoire et la faune de l'île, ainsi que des activités interactives." },

    ]
    
  },
  {
    region: "Sousse",
    questions: [
      { Question: "Quels sont les meilleurs hôtels Sousse ? ",reponse:"• The Pearl Resort & spa :Ce complexe hôtelier 5 étoiles se dresse avec ses 224 chambres spacieuses et propres tout confort, sur la corniche, Avenue Abdelhamid El Kadhi. L’hôtel est caractérisé par l’existence de certaines chambres, dont la conception a été réalisée de façon à permettre l’accessibilité des personnes à mobilité réduite.• L’hôtel Sindbad center Sousse :Cet établissement hôtelier de trois étoiles est bâti pratiquement les pieds dans l’eau. Il propose ses 120 chambres doubles, triples et familiales aux clients, dont toutes possèdent un balcon qui donne sur la ville ou sur la piscine." },
      { Question: "Combien coûte une nuitée le week-end dans un hôtel Sousse ?",reponse:"Le week-end, le prix moyen d’une nuitée varie selon la saison, par exemple le prix dans un hôtel 5 étoiles à Sousse varie de 90 à 120 Dinars Tunisien (entre 30 et 40 euros). Pour un hôtel quatre étoiles Sousse, le tarif est de l’ordre de 80 à 100 DT (entre 25 et 35 euros) et pour un hotel trois étoiles, il se situe entre une fourchette de 40  à 60 DT ( de 15 à 25euros). " },
      { Question: "Quels sont les meilleurs hôtels en première position de la plage Sousse ?",reponse:"• Le Sindbad Center Sousse est à seulement 300 mètres d’une belle plage privée de sable fin.• Le Sousse Palace qui possède une plage privée." },
      { Question: "Quels sont les meilleurs complexes touristiques Sousse ?",reponse:"De nombreux complexes touristiques sont implantés à Sousse. Parmi les meilleurs il a  le JAZ Tour Khalef Thalasso & Spa." },
      {Question:"Quels hôtels sont les plus proches de la Médina et du Ribat de Sousse ? ",reponse:"L’hôtel Marhaba Beach se trouve à 2,5 km du Ribat et de la Medina de Sousse.",},
      {Question:"Quels hôtels Sousse sont adaptés aux couples ?",reponse:"Par lers cadres et les services offerts, parmi les préférés des couples on cite les hôtels suivants : • Iberostar Kantaoui Bay• Seabel Alhambra Beach Holf & Spa • Concorde Green Park Palace "},
      {Question:"Quels sont les meilleurs hôtels destinés aux familles ?",reponse:"Ce sont généralement les hôtels qui disposent de nombreuses infrastructures dédiées aux enfants. C’est le cas de :• Riadh Palms • Le Miramar Golf & Spa."},
      {Question:"Quels sont les meilleurs hôtels 4* à Sousse ?",reponse:"Parmi les meilleure hotels 4* à Sousse on cite : Cesar Palace et Casino,  Houria Palace, Golf Residence..."},
      {Question:"Quels sont les meilleurs hôtels avec un centre de thalasso & spa Sousse ? ",reponse:"Presque tous les hôtels de haut standing implantés à Sousse possèdent un centre de thalasso et spa. Le nom de l’hôtel indique déjà cette propriété, comme :• Sousse Palace• JAZ Tour Khalef Thalasso & Spa."},
      {Question:"Quels sont les meilleurs hôtels 3*à Sousse ?",reponse:"Sousse City & Beach Hotel figure parmi les 5 premiers hôtels trois étoiles réputés de Sousse. "}
    ]
  },
  {
    region: "Hammamet",
    questions: [
      { Question: "Quels sont les meilleurs hôtels à Yasmine Hammamet ?",reponse:"Parmi les hôtels recommandés à proximité de Golf de Yasmine on cite :• Bel Azur Thalasso & Bungalows• Laico Hammamet• Radisson Blu Resort and Thalasso Hammamet" },
      { Question: "Combien coûte une nuit ce week-end dans un hotel Hammamet ?",reponse:"Le prix d’une nuit varie selon la catégorie et l’emplacement d’hôtel.Selon les tarifs disponibles sur notre site TunisieBooking, les hébergements Hammamet 3 étoiles coûtent entre 50DT et 100Dt (environ entre 15 et 30 euros).Par contre, le prix d’une nuit dans un hôtel Hammamet 4 étoiles coûte en moyen 120DT.Pour les hôtels encore plus raffiné vous payez au minimum à l’entour de 200DT (environ à partir de 40 euros)." },
      { Question: "Quels sont les meilleurs hotel Hammamet en première position de la plage ?",reponse:"Vous cherchez un hôtel pied dans l’eau ? Voilà quelques exemples :• Hotel Sol Azur Beach Congres 4*• Le Royal Hammamet 5*• Sensimar Oceana Palace Hammamet 4*" },
      { Question: "Quels sont les meilleurs Hotel Hammamet ?",reponse:"Pour des vacances dans le luxe et le confort, dans un établissement moderne avec une vue imprenable, on vous conseille notamment :• Radisson Blu Resort & Thalaso• Sentido Le Sultan• L’hôtel Diar Lemdina" },
      { Question: "Quels hôtels sont les plus proches de Medina of Hammamet ?",reponse:"La Medina est l’attraction phare à Hammamet. Autant donc choisir un hébergement proche de ce site comme c’est le cas de Residence Hammamet à 0,8 km de là, l’hôtel Bel Azur qui est à quelques minutes à pieds, ou encore la Résidence Romane qui est à 0,9 km de la Medina." },
      { Question: "Quels sont les meilleurs hôtels avec un centre de thalasso & spa à Hammamet ?",reponse:"Pour un séjour détente avec un centre de thalasso à disposition, il est préférable de se tourner vers : Iberostar Averroes." },
      { Question: "Quels hôtels à Hammamet sont adaptés aux couples ?",reponse:"Pour les voyages en couple, on préconise une ambiance romantique et conviviale dans les hébergements. Chose que vous avez notamment à disposition à :• L'Oceana• The Orangers Garden• Hasdrubal Thalassa & spa à Yasmine." },
      { Question: "Quels sont les meilleurs hôtels destinés aux familles ?",reponse:"Si vous comptez toutefois voyager en famille, un hôtel dont les prestations peuvent être adaptées en conséquence est de mise. Tel est le cas entre autres de :• Yadis Hammamet• Hammamet Serail• Zodiac Family Club " },
      { Question: "Quels sont les meilleurs hotel Hammamet 4* ?",reponse:"Situé à moins de 5 minutes de voiture de la plage, de la statue des Sirènes et du célèbre Fort de Hammamet, l’hôtel Bel Azur Thalasso & Bungalows propose à ses clients un bain à remous et un centre de remise en en forme. C'est un vrai quatre étoiles. Consultez la liste complète : Meilleurs hotel Hammamet 4 étoiles." },
      {Question:"Quels sont les meilleurs hotel Hammamet 3* ?",reponse:"La playa Hôtel Club est située sur la plage, à proximité des agréables Carthage Land, qui est un parc à thème. Consultez la liste complète : Meilleurs hotel Hammamet 3 étoiles."}
    ]
  },
  {
    region: "Tunis",
    questions: [
      { Question: "Quels sont les meilleurs hôtels Tunis ? ",reponse:"• Le Regency Tunis hôtel jouit d’un emplacement idéal entre la mer Méditerranée et le lac Sabkhet Arina. Il dispose d’une magnifique plage privée de sable blanc.• Le Mövenpick Hotel Gammarth Tunis possède une plage privée d’une beauté exceptionnelle. Le bâtiment surplombe les baies de la Méditerranée et les collines de Sidi Bou Saïd, offrant ainsi une superbe vue sur la mer ou sur ce magnifique village de carte postale." },
      { Question: "Combien coûte une nuit ce week-end dans un hôtel Tunis ? ",reponse:"Tunis, la capitale de la Tunisie, est une capitale moderne. Ce qui a un impact notable quant aux prix moyens d’une nuit dans la ville. Ainsi, pour ce week-end, la nuit dans un hôtel 5 étoiles est de 95 euros. Elle est de l’ordre de 40 à 50 euros dans un hôtel 4 étoiles, et de 10 à 20 euros pour un hôtel trois étoiles." },
      { Question: "Quels sont les meilleurs hôtels en première position de la plage Tunis ?",reponse:"À Tunis, presque tous les meilleurs hôtels se trouvent en première position par rapport à la plage, à l’instar de l’hôtel Ezzahra Dar Tunis 4*." },
      { Question: "Quels sont les meilleurs complexes touristiques Tunis ?",reponse:"L’hôtel Africa Tunis est érigé le long de l’avenue Habib Bourguiba : C’est le plus prestigieux hôtel d'affaire de Tunis. Avec ses 22 étages, il domine toute la ville dont il est devenu le symbole." },
      { Question: "Quels hôtels sont les plus proches de la Médina de Tunis ? ",reponse:"L’une des plus belles Medina du monde se trouve dans le centre-ville de Tunis. Donc, tous les hôtels situés en plein cœur de la ville sont à sa proximité. Elle comporte la porte Bab El Bahr, les souks et le palais Ed-Dar, qui est actuellement devenu une boutique d’antiquité. L’hôtel Africa figure parmi ces hôtels." },
      { Question: "Quels sont les meilleurs hôtels avec un centre de thalasso & spa Tunis ?",reponse:"Pour offrir un moment de détente aux touristes qui visitent la ville, de nombreux hôtels de 4 et 5 étoiles, sinon tous, disposent d’un centre de bien être thalasso et spa. Il y a notamment El Mouradi Gammarth." },
      { Question: "Quels hôtels Tunis sont adaptés aux couples ?",reponse:"Le Mövenpick Hôtel Gammarth, grâce à sa situation dans le quartier des divertissements et en bord de mer dans la zone de La Marsa, est le plus adapté aux couples et les jeunes mariés." },
      { Question: "Quels sont les meilleurs hôtels destinés aux familles ?",reponse:"L’hôtel Golden Tulip El Mechtel propose aux voyageurs un large éventail de services dans un cadre familial. Il présente un excellent rapport qualité/prix." },
      { Question: "Quels sont les meilleurs hôtels 4* à Tunis ?",reponse:"Il s’agit de l'hôtel Ezzahra Dar Tunis 4* où il est possible d’apprécier une architecture et une décoration alliant le moderne et le traditionnel." },
      {Question:"Quels sont les meilleurs hôtels 3* à Tunis ?",response:"Le Golf Royal Tunis qui offre un mélange idéal entre rapport qualité/prix et confort."}
    ]
  },
  {
    region: "Sfax",
    questions: [
      { Question: "Quels sont les meilleurs hôtels à Sfax ? ",reponse:"Hôtel Golden Yasmin Les Oliviers Palace, c'est un hôtel 5 étoiles, le plus recommandé.Occidental Sfax Centre, c'est l'un des meilleurs hôtels 4 étoiles à Sfax." },
      { Question: "Combien coûte une nuitée ce week-end à Sfax ? ",reponse:"Le prix pour une nuitée le week-end à Sfax est en moyenne de 60 euros/ nuit." },
      { Question: "Quels sont les meilleurs complexes touristiques Sfax ? ",reponse:"Hôtel Golden Yasmin Les Oliviers Palace : Cet hôtel de luxe est bien connu pour ses installations et son service de qualité.Occidental Sfax Centre : Un autre établissement réputé offrant un bon niveau de confort." },
      { Question: "Quels sont les meilleurs hôtels près du site Medina ?",reponse:"Les Oliviers Palace, Concorde Sfax Centre et Ibis Sfax figurent parmi les hôtels les plus populaires auprès des voyageurs.Vous pouvez consulter les avis piblier sur notre agence de voyage en ligne." },
      { Question: "Quels sont les meilleurs hôtels avec un centre de thalasso & spa ?  ",reponse:"L'hôtel Les Oliviers Palace posséde un centre de spa à ses clients. " },
      { Question: "Quels hôtels à Sfax sont adaptés pour un voyage d'affaires ? ",reponse:"Hôtel Ibis Sfax, Dar El Hana et Business hôtel, sont les plus populaires et sont adaptés pour un voyage d'affaires à Sfax. " },
      { Question: "Quels sont les restaurants locaux populaires proposant une cuisine traditionnelle ?",reponse:"Le Méditerranéen est un restaurant réputé pour sa cuisine méditerranéenne, offrant des plats traditionnels de la région.Restaurant Dar Slah est un établissement qui met en avant la cuisine tunisienne, avec un accent sur les saveurs locales.Notamment restaurant El Mansoura qui propose une expérience culinaire traditionnelle tunisienne, y compris des plats locaux." },
      { Question: "Quels sont les meilleurs hôtels près du site Grande Mosquee ?",reponse:"Parmi les hôtels les plus populaires près de Grande Mosquee, il y a Concorde Sfax Centre, Les Oliviers Palace." },
      { Question: "Quels hôtels à Sfax sont adaptés aux familles ?",reponse:"Ibis Sfax et hôtel Concorde ont tous été hautement appréciés par les familles en voyage à Sfax. " },
      {Question:"Quels sont les meilleurs hôtels près du site La Kasbah ?",reponse:"Concorde Sfax Centre et Les Oliviers Palace figurent parmi les hôtels prisés à proximité de la Kasbah."}

    ]
  }
  // Add more regions here as needed
];
// Component to display the hotel results
const ListQuestions =  ({ region}) => {   

 const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    /**hotel pas cher**/
    const [expandedSections, setExpandedSections] = useState({
        section1: false,
        section2: false,
        section3: false,
      });
    


  const selectedRegion = listQuestions.find((item) => item.region === region);
  if (!selectedRegion) {
    return <div></div>;
  }
 // Pour vérifier les données récupérées
  const questions = selectedRegion ? selectedRegion.questions : [];
  console.log(questions); 

    
      const toggleContent = (section) => {
        setExpandedSections(prev => ({
          ...prev,
          [section]: !prev[section],
        }));
      };


  
 
    return (
        <div >
               <div className="px-4 mx-auto max-w-screen-xl">
      <h1 className="font-bold text-2xl antialiased my-4">
        Les Questions les plus fréquentes sur les hôtels à {region}
      </h1>
      {questions.length > 0 ? (
        questions.map((item, index) => (
          <Accordion key={index} open={open === index}>
            <AccordionHeader onClick={() => handleOpen(index)}>
              {item.Question}
            </AccordionHeader>
            <AccordionBody>{item.reponse}</AccordionBody>
          </Accordion>
        ))
      ) : (
        <p>Aucune question disponible pour cette région.</p>
      )}
    </div>
            
        </div>
    );
};

export default ListQuestions;

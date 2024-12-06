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
import { useRouter } from "next/navigation";
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
import ListQuestions from "./ListQuestions";
import MeilleurDestination from "./MeilleurDestination";
import DestinationDescription from "./DestinationDescription";
const destinationSimilaires = [
  {name: "Djerba", image: "/djerba.jpg"},
  {name: "Sousse", image: "/sousse.jpg"},
  {name: "Sfax", image:""},
  {name: "Tabarka", image:"/tabarka.jpg"},
  {name: "Tozeur", image:"/tozeur.jpg"},
  {name: "Monastir", image:"/monastir.jpg"},
  {name: "Gammarth", image:"/gammarth.jpg"},
  {name: "Hammamet", image:"/hammamett.jpg"},
  {name: "Mahdia", image:"/mahdia.jpg"},
  {name: "Douz", image:"/douz.jpg"},
  {name: "Ain Draham", image:"/ain_drahim.jpg"},
  {name: "Tunis", image:"/tunis.jpg"},
  {name: "Zarzis", image:"/zarzis.jpg"},
  {name: "Nabeul", image:"/nabeul.jpg"},
  {name: "Hammamet yasmine", image:"/hammamet_yasmine.jpg"},
];

// Component to display the hotel results
const Questions =  ({ region ,slides=[]}) => {   
  const sliders = slides?.Slides || []; 
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/hotel_avec_toboggan');
  };
  
  
    /** Questions***/
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    /**hotel pas cher**/
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

       // Filtrer les destinations différentes de la région actuelle
  const filteredDestinations = destinationSimilaires.filter(
    (destination) => destination.name.toLowerCase() !== region.toLowerCase()
  );
 
    return (
        <div >
          <MeilleurDestination region={region}/>
          <Destination5Stars region={region} />
          <Destination4Stars region={region} />
          <Destination3Stars  region={region}/>
          <DestinationAllInclusive  region={region}/>
          <DestinationPlage region={region}/>
          {/*** destinations similaire***/}
          <div className="my-6 px-4 mx-auto max-w-screen-xl">
            <div className="text-xl font-medium text-left">Destinations Similaire</div>
            <p className="my-6 mt-4 text-sm sm:text-base md:text-lg">
              Découvrez les secrets de chaque destination grâce à nos guides et informations de voyage. Alors planifiez votre voyage avec nos offres spécialement conçues pour vous.
              Nous sommes votre compagnon de voyage et nous sommes à vos côtés pour les meilleures vacances de votre vie.
            </p>
            <div className="relative">
              {/* Swiper */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                loop
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
                className="my-4"
              >
                {destinationSimilaires
                  .filter((dest) => dest.name !== region)
                  .map((destination, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative  bg-white rounded-lg ">
                        <img
                          src={destination.image || "/placeholder.jpg"}
                          alt={destination.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="mt-2 text-center text-lg font-semibold">
                          {destination.name}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-black bg-white p-3 rounded-full shadow-lg cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
              </div>
              <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-black bg-white p-3 rounded-full shadow-lg cursor-pointer">
                <FontAwesomeIcon icon={faChevronRight} size="lg" />
              </div>
            </div>
          </div>
          {/***Quand et ou partir en vacances***/}
          <div  className="px-4 mx-auto max-w-screen-xl">
            <div className="text-xl font-medium text-left">Quand et où partir en vacances</div>
            <div className="relative">
              {sliders.map((slide, index) => (
                <button  aria-label="slide"
                key={index}
                className="mx-2 bg-transparent hover:bg-gray-300 text-black font-normal 
                hover:text-white py-2 px-4 border border-gray-700 
                hover:border-transparent rounded-md mr-2 mt-[4%] cursor-pointer relative">
                  <div className="flex items-center mx-8 ">
                    {decode(slide.titre)}     
                  </div>
                </button>
              )
              )}         
              <button  aria-label="early"
                
                className="mx-2 bg-transparent hover:bg-gray-300 text-black font-normal 
                hover:text-white py-2 px-4 border border-gray-700 
                hover:border-transparent rounded-md mr-2 mt-[4%] cursor-pointer relative">
                  <div className="flex items-center mx-8 ">
                    Early booking     
                  </div>
                </button> 
                <button  aria-label="toboggan"
                 onClick={handleRedirect}
                className="mx-2 bg-transparent hover:bg-gray-300 text-black font-normal 
                hover:text-white py-2 px-4 border border-gray-700 
                hover:border-transparent rounded-md mr-2 mt-[4%] cursor-pointer relative">
                  <div className="flex items-center mx-8 ">
                    Toboggan    
                  </div>
                </button>                           
            </div>
          </div>
          <DestinationDescription region={region}/>
           <ListQuestions region={region}/>
        </div>
    );
};

export default Questions;

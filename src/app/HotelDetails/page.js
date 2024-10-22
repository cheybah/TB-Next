"use client";

import Header from "../components/Header/Header";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Copyright from "../components/Copyright/Copyright";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faLocationDot, faQuoteLeft, faQuoteRight, faWifi } from "@fortawesome/free-solid-svg-icons";
import {
Tabs,
TabsHeader,
Tab,
} from "@material-tailwind/react";


const HotelDetails = () => {
    
    const searchParams = useSearchParams();
    const [hotel, setHotel] = useState(null);

    const [isExpanded, setIsExpanded] = useState(false); 
    
    const toggleContent = () => {
        setIsExpanded(!isExpanded); 
    };


    const getRatingDescription = (tripAdvisor) => {
        switch (tripAdvisor) {
            case 5:
                return "Excellent";
            case 4:
                return "Très Bien";
            case 3:
                return "Bien";
            case 2:
                return "Passable";
            case 1:
                return "Médiocre";
            default:
                return "N/R";
        }
    };
    
    const data = [
        { label: "Photos", value: "photos"  },
        { label: "Présentation", value: "presentation", id: "presentation" },
        { label: "Equipements", value: "equipement", id: "equipement" },
        { label: "Avis", value: "avis" , id: "avis"},
    ];

const scrollToSection = (id) => {
    console.log("Scrolling to section:", id);
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    };


    

    useEffect(() => {
        const hotelData = {
            id: searchParams.get("id"),
            image: searchParams.get("image"),
            discount: searchParams.get("discount"),
            name: searchParams.get("name"),
            location: searchParams.get("location"),
            price: searchParams.get("price"),
            originalPrice: searchParams.get("originalPrice"),
            rating: searchParams.get("rating"),
            date: searchParams.get("date"),
            tripAdvisor: parseInt(searchParams.get("tripAdvisor"), 10) ,// Convert to number
            address: searchParams.get("address"),
            services: JSON.parse(searchParams.get("services")) // Correctly parse the JSON string
        };
        console.log(
            "TripAdvisor rating description:",
            getRatingDescription(hotelData.tripAdvisor)
        );
        setHotel(hotelData);
    }, [searchParams]);

if (!hotel) {
    return (
<div>Loading...</div>
    );
}



    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
            <section className="py-12 sm:py-16" style={{paddingTop: "10px"}} >
                <div className="container mx-auto px-4">
                    <nav className="flex">
                        <ol className="flex items-center">
                            <li className="text-left">
                                <a href="/" className="p-1 text-sm font-medium text-gray-600">
                                    Home
                                </a>
                            </li>
                            <li className="text-left mx-2 text-gray-400">/</li>
                            <li className="text-left">
                                <span className="text-sm font-medium text-gray-800">
                                    Hotel Details
                                </span>
                            </li>
                            <li className="text-left mx-2 text-gray-400">/</li>
                            <li className="text-left">
                                <span className="text-sm font-medium text-gray-800">
                                    {hotel.name}
                                </span>
                            </li>
                        </ol>
                    </nav>
                    {/*this is the start of the detail card*/}
                    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg"> 
                    <div className="mt-8 relative overflow-hidden rounded-lg">
                    <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold  " style={{marginRight: "10px"}}>{hotel.name}</div>
                            <div className="rating-container mt-4 flex items-center" style={{marginBottom:"1.5rem", marginRight: "auto"}}>
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        aria-hidden="true"
                                        className={`star-icon w-6 h-6 ${
                                            index < hotel.rating
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
                                <span className="bg-yellow-200 px-2 py-1 rounded text-xs ml-2">
                                    {hotel.rating}  
                                </span>
                            </div>
                            <span className="text-lg flex">
                            <img src="/icon_tripadvisor.svg" style={{marginRight: "5px"}}></img> {hotel.tripAdvisor} / 5{" "}
                            <span className="font-bold" style={{marginLeft: "5px"}}>{getRatingDescription(hotel.tripAdvisor)}</span>
                        </span>
                        </div>
                        <div className="flex items center">
                        <FontAwesomeIcon icon={faLocationDot} style={{marginTop:"7px", color: "#7E8389"}} />
                        <p className="mt-2 text-sm text-zinc-600" style={{marginLeft:"7px" , color: "#7E8389"}}>{hotel.address}</p> {/* Add a subtitle */}
                        </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                    </div>
                    <div className="w-2/3 h-auto">
                    <Tabs value="photos">
                    <TabsHeader>
                        {data.map(({ label, value, id }) => (
                        <Tab key={value} value={value} onClick={() => scrollToSection(id)}>
                            {label}
                        </Tab>
                        ))}
                    </TabsHeader>
                    </Tabs>
            </div> 
            <div className="flex w-full">
        <img
            className="w-2/3 h-auto rounded-lg" style={{marginTop: "20px"}} // Set width to two-thirds and auto height
            src={hotel.image}
            alt={`Hotel Image ${hotel.id}`}
        />
        <div className="w-1/3 px-4 text-center" style={{marginTop: "3%"}}>
        <div className="flex space-x-4">
        <img src="/avis.svg"></img>
            <div className="text-xl font-medium">Avis Voyageurs</div>
            </div>
            <div className="relative my-6 flex-1 rounded-md p-4" style={{backgroundColor: "#F4F5F7"}}>
    <div className="absolute left-0 top-0 h-4 w-4 -translate-y-1/2 translate-x-5 rotate-45 transform rounded-sm" style={{backgroundColor: "#F4F5F7" , fontSize: "16px"}}></div>
    <FontAwesomeIcon icon={faQuoteLeft} style={{marginRight: "2%"}}/>
	Un bon service, un bon personnel mais a revoir quelques points...
    <FontAwesomeIcon icon={faQuoteRight} style={{marginLeft: "2%"}} />
    <div><a href="#">Lire tous les avis</a></div>
            </div>
            <div className="text-xl font-medium text-left">Principales Services</div>
            <div className="relative">
            {hotel.services.map((service, index) => (
                <button
                    key={index}
                    className="bg-transparent hover:bg-gray-300 text-black font-normal 
                            hover:text-white py-2 px-4 border border-gray-700 
                            hover:border-transparent rounded-full mr-2 mt-[4%] 
                            cursor-pointer relative"
                >
                    <div className="flex items-center">
                        <img src={service.icon} alt={service.name} className="mr-2 w-[20px]" />
                        {service.name}
                    </div>
                </button>
            ))}

            <div className="text-left mt-4 cursor-pointer relative">
                <a href="#" className="underline hover:no-underline text-blue-500">
                    Voir tous les services
                </a>
            </div>
        </div>

        </div>
        </div>
    </div>
    <div className="lg:grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3">
                            <p className="mt-4 text-gray-600">
                                {hotel.description}
                            </p>
                            <p className="mt-4 text-gray-600">
                                Price: {hotel.price}
                            </p>
                            <p className="mt-4 text-gray-600">
                                Location: {hotel.location}
                            </p>
                        </div>
                    </div>
                    </div>

                    {/*this is the start of the presentation card*/}
                    <section id="presentation">
                    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="flex items-center justify-between">
                        <div className="text-left mt-4">
                            <h2 className="text-2xl font-bold"> Présentation</h2>
                            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                            <h3 className="text-left text-lg font-semibold mt-4">Infos Pratiques :</h3>
                            <p>
                            Pour découvrir et profiter à bon escient de tous les vestiges de Tunis, Vous devez choisir une ville où vous allez axer votre voyage de luxe.
                            <br /> Dans ce cas, pourquoi ne pas opter pour Hammamet ? C'est l'une des plus belles villes de la Tunisie.
                            </p>
                            {isExpanded && (
                            <div className="mt-4">
                                <p>
                                Elle est accessible et peut vous offrir toute une panoplie d'activités et loisir, de plus, vous pouvez profiter ici de El Mouradi</p>
                                <h3 className="text-left text-lg font-semibold mt-4">Situation de l'hôtel :</h3>
                                <p>Au cœur de la station balnéaire de Yasmine Hammamet, sur une superbe plage de sables fins dorée.<br /> 
                                A quelques kilomètres au sud de la Ville d'Hammamet, vous découvrirez un grand hôtel 4 étoiles : El Mouradi El Menzeh.<br />
                                C'est une grande bâtisse blanche rénovée, aux airs un peu palais que vous ne pourrez pas rater.<br />
                                Il se trouve qu'à quelques kilomètres à peine des parcs d'attractions de la ville.</p>
                                <h3 className="text-left text-lg font-semibold mt-4">Les types d'hébergements que puis-je réserver à l'établissement :</h3>
                                <p>L'hotel possède 395 chambres, parmi ces derniers, vous avez le choix entre plusieurs types des chambres. <br />
                                El Mouradi El Menzah est aussi l'une des rares à proposer des suites à ses clients. <br />
                                Chaque chambre de cet établissement 4 étoiles a été créée dans un esprit de confort et de modernité. <br />
                                Elles sont dotées d'un matelas confort, qui pour le cas d'une chambre standard avec enfant, peut-être accompagné d'un lit pour petit. <br />
                                Chacune d'entre elles dispose de tous les matériels nécessaires au confort des clients. <br />
                                Une terrasse privative d'où vous pourrez jouir d'une superbe vue sur la mer ou sur le jardin verdoyant.<br/>
                                En outre, dans tout l'établissement, vous pouvez profiter d'un Wi-Fi gratuit pendant tout le séjour.</p>
                                <h3 className="text-left text-lg font-semibold mt-4">Restaurants et Bars sur place :</h3>
                                <p>Deux restaurants assurent votre confort pendant toute la durée du votre séjour. <br />
                                Les plats typiques de la région, comme des menus internationaux sont servis tous les jours sous forme de buffet. <br />
                                Dans un décor original, traditionnel et moderne, vous aurez l'occasion de gouter aux spécialités culinaires de la Tunisie. <br />
                                Dans chacune des restaurants, des chefs étoilés et une équipe professionnelle assurent le service.<br />
                                Vous pouvez ainsi profiter de la belle vue au bord de la mer et commencer la journée du bon pied. <br />
                                Il est à noter que les petits-déjeuners sont compris dans le prix de la chambre.<br />
                                Outre les restaurants, vous pouvez aussi gouter aux quelques cocktails locaux avec les deux bars qui sont présents. <br />
                                L'un des bars vous assure un séjour agréable en vous servant de petites collations en tout genre au bord de la piscine. <br />
                                Boissons alcoolisées ou non, quelques représentations et une ambiance chaleureuse discothèque y est disponibles tous les soirs. <br />
                                </p>
                                <h3 className="text-left text-lg font-semibold mt-4">Activités et loisirs disponibles :</h3>
                                <p>Quand on parle El Mouradi El Menzah 4 étoiles en Tunisie, il est obligatoire de trouver au moins une piscine extérieure. <br />
                                Outre cette dernière, vous avez aussi à disposition une piscine couverte ouverte de 09 h à 18 h. <br />
                                Pour les baignades à la plage, profitez de la plage privée de l'hôtel Hammamet . <br />
                                Sachez aussi que l'établissement possède une salle de Fitness. <br />
                                Une salle de sport dont un court de tennis pour ceux qui souhaitent se lancer dans une petite compétition amicale. <br />
                                Pour ceux et celles qui prônent la détente avant tout, profitez du Thalassothérapie et Spa de l'établissement.</p>
                                <h3 className="text-left text-lg font-semibold mt-4">Les plus de l'hotel El Mouradi El Menzah  4*, TunisieBooking :</h3>
                                <p>L'hotel est bien situé, au cœur de la station touristique de Yasmine Hammamet. <br />
                                Avec un rapport qualité luxueux, face à une très belle plage d'eau douce et à proximité du parc “Carthage Land”.<br />
                                Pour plus d'informations, rendez-vous dans l'une de nos agences de voyage les plus proches de chez-vous.</p>
                            </div>
                            )}
                            <button
                            onClick={toggleContent}
                            className="mt-4 text-blue-500 hover:underline"
                            >
                            {isExpanded ? "Afficher moins" : "Afficher plus"}
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                    {/*this is the start of the equipements card*/}
                    <section id="equipement">
                    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6"> 
                    <div className="relative overflow-hidden rounded-lg">
                    <div className="flex items-center justify-between">
                    <div className="text-left mt-4">
                    <h2 className="text-2xl font-bold"> Equipements</h2>
                    <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                    <h3 className="text-left text-lg font-semibold mt-4">Infos Pratiques :</h3>
                    <p>Pour découvrir et profiter à bon escient de tous les vestiges de Tunis, Vous devez choisir une ville où vous allez axer votre voyage de luxe.
                        <br /> Dans ce cas, pourquoi ne pas opter pour Hammamet ? C'est l'une des plus belles villes de la Tunisie.
                    </p>
                    </div>
                    </div>
                    </div>
                </div>
                </section>
                </div>
            </section>
            </main>
            <Copyright />
        </div>

        
    );
};


export default HotelDetails;

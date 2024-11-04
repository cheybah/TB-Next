"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import React  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faChevronDown, faLocationDot, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import {Tabs,TabsHeader,Tab,} from "@material-tailwind/react";
import { Avatar, Typography } from "@material-tailwind/react";
import {Accordion,AccordionHeader,AccordionBody,} from "@material-tailwind/react";
import Image from 'next/image';
const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};


const HotelDetailsContent  = () => {
    const [open, setOpen] = React.useState(0);
    const searchParams = useSearchParams();
    const [hotel, setHotel] = useState(null);

    const [isExpanded, setIsExpanded] = useState(false);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


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
        { label: "Photos", value: "photos" },
        { label: "Présentation", value: "presentation", id: "presentation" },
        { label: "Equipements", value: "equipement", id: "equipement" },
        { label: "Avis", value: "avis", id: "avis" },
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
            tripAdvisor: parseInt(searchParams.get("tripAdvisor"), 10),// Convert to number
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
        <div >
            
            <main className="flex-grow">
                <section className="py-12 sm:py-16" style={{ paddingTop: "10px" }} >
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
                                    <div className="text-4xl font-bold  " style={{ marginRight: "10px" }}>{hotel.name}</div>
                                    <div className="rating-container mt-4 flex items-center" style={{ marginBottom: "1.5rem", marginRight: "auto" }}>
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                aria-hidden="true"
                                                className={`star-icon w-6 h-6 ${index < hotel.rating
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
                                        <Image
                                            className="h-8 w-8"
                                            src="/icon_tripadvisor.svg" 
                                            alt="icon_tripadvisor"
                                            style={{ marginRight: "5px" }}
                                            width={500}
                                            height={300}
                                            loading="lazy"
                                        />
                                        {hotel.tripAdvisor} / 5{" "}
                                        <span className="font-bold" style={{ marginLeft: "5px" }}>{getRatingDescription(hotel.tripAdvisor)}</span>
                                    </span>
                                </div>
                                <div className="flex items center">
                                    <FontAwesomeIcon icon={faLocationDot} style={{ marginTop: "7px", color: "#7E8389" }} />
                                    <p className="mt-2 text-sm text-zinc-600" style={{ marginLeft: "7px", color: "#7E8389" }}>{hotel.address}</p> {/* Add a subtitle */}
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
                                   
                                    <Image
                                        className="w-2/3 h-auto rounded-lg"
                                        src={hotel.image}
                                        alt={`Hotel Image ${hotel.id}`}
                                        style={{ marginTop: "20px" }}
                                        width={500}
                                        height={300}
                                        loading="lazy"
                                    />
                                    <div className="w-1/3 px-4 text-center" style={{ marginTop: "3%" }}>
                                        <div className="flex space-x-4">
                                            <Image
                                                className="h-8 w-8"
                                                src="/avis.svg"
                                                alt="image_avis"
                                                width={500}
                                                height={300}
                                                loading="lazy"
                                            />
                                            <div className="text-xl font-medium">Avis Voyageurs</div>
                                        </div>
                                        <div className="relative my-6 flex-1 rounded-md p-4" style={{ backgroundColor: "#F4F5F7" }}>
                                            <div className="absolute left-0 top-0 h-4 w-4 -translate-y-1/2 translate-x-5 rotate-45 transform rounded-sm" style={{ backgroundColor: "#F4F5F7", fontSize: "16px" }}></div>
                                            <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "2%" }} />
                                            Un bon service, un bon personnel mais a revoir quelques points...
                                            <FontAwesomeIcon icon={faQuoteRight} style={{ marginLeft: "2%" }} />
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
                                                        <Image
                                                            className="mr-2 w-[20px]"
                                                            src={service.icon}
                                                            alt={service.name}
                                                            width={500}
                                                            height={300}
                                                            loading="lazy"
                                                        />
                                                        {service.name}
                                                    </div>
                                                </button>
                                            ))}

                                            <div className="text-left mt-4 cursor-pointer relative">
                                                <a
                                                    href=""
                                                    className="text-blue-500 flex items-center group space-x-2">
                                                    <span>Voir tous les services</span>
                                                    <FontAwesomeIcon
                                                        icon={faArrowRight}
                                                        className="opacity-100 translate-x-[-2px] group-hover:translate-x-2 transition duration-300 ease-out"
                                                    />
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
                                            <div className="text-2xl font-bold"> Présentation</div>
                                            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                                            <h3 className="text-left text-lg font-semibold mt-4">Infos Pratiques :</h3>
                                            <p>
                                                Pour découvrir et profiter à bon escient de tous les vestiges de Tunis, Vous devez choisir une ville où vous allez axer votre voyage de luxe.
                                                <br /> Dans ce cas, pourquoi ne pas opter pour Hammamet ? C&apos;est l&apos;une des plus belles villes de la Tunisie.
                                            </p>
                                            {isExpanded && (
                                                <div className="mt-4">
                                                    <p>
                                                        Elle est accessible et peut vous offrir toute une panoplie d&apos;activités et loisir, de plus, vous pouvez profiter ici de El Mouradi</p>
                                                    <h3 className="text-left text-lg font-semibold mt-4">Situation de l&apos;hôtel :</h3>
                                                    <p>Au cœur de la station balnéaire de Yasmine Hammamet, sur une superbe plage de sables fins dorée.<br />
                                                        A quelques kilomètres au sud de la Ville d&apos;Hammamet, vous découvrirez un grand hôtel 4 étoiles : El Mouradi El Menzeh.<br />
                                                        C&apos;est une grande bâtisse blanche rénovée, aux airs un peu palais que vous ne pourrez pas rater.<br />
                                                        Il se trouve qu&apos;à quelques kilomètres à peine des parcs d&apos;attractions de la ville.</p>
                                                    <h3 className="text-left text-lg font-semibold mt-4">Les types d&apos;hébergements que puis-je réserver à l&apos;établissement :</h3>
                                                    <p>L&apos;hotel possède 395 chambres, parmi ces derniers, vous avez le choix entre plusieurs types des chambres. <br />
                                                        El Mouradi El Menzah est aussi l&apos;une des rares à proposer des suites à ses clients. <br />
                                                        Chaque chambre de cet établissement 4 étoiles a été créée dans un esprit de confort et de modernité. <br />
                                                        Elles sont dotées d&apos;un matelas confort, qui pour le cas d&apos;une chambre standard avec enfant, peut-être accompagné d&apos;un lit pour petit. <br />
                                                        Chacune d&apos;entre elles dispose de tous les matériels nécessaires au confort des clients. <br />
                                                        Une terrasse privative d&apos;où vous pourrez jouir d&apos;une superbe vue sur la mer ou sur le jardin verdoyant.<br />
                                                        En outre, dans tout l&apos;établissement, vous pouvez profiter d&apos;un Wi-Fi gratuit pendant tout le séjour.</p>
                                                    <h3 className="text-left text-lg font-semibold mt-4">Restaurants et Bars sur place :</h3>
                                                    <p>Deux restaurants assurent votre confort pendant toute la durée du votre séjour. <br />
                                                        Les plats typiques de la région, comme des menus internationaux sont servis tous les jours sous forme de buffet. <br />
                                                        Dans un décor original, traditionnel et moderne, vous aurez l&apos;occasion de gouter aux spécialités culinaires de la Tunisie. <br />
                                                        Dans chacune des restaurants, des chefs étoilés et une équipe professionnelle assurent le service.<br />
                                                        Vous pouvez ainsi profiter de la belle vue au bord de la mer et commencer la journée du bon pied. <br />
                                                        Il est à noter que les petits-déjeuners sont compris dans le prix de la chambre.<br />
                                                        Outre les restaurants, vous pouvez aussi gouter aux quelques cocktails locaux avec les deux bars qui sont présents. <br />
                                                        L&apos;un des bars vous assure un séjour agréable en vous servant de petites collations en tout genre au bord de la piscine. <br />
                                                        Boissons alcoolisées ou non, quelques représentations et une ambiance chaleureuse discothèque y est disponibles tous les soirs. <br />
                                                    </p>
                                                    <h3 className="text-left text-lg font-semibold mt-4">Activités et loisirs disponibles :</h3>
                                                    <p>Quand on parle El Mouradi El Menzah 4 étoiles en Tunisie, il est obligatoire de trouver au moins une piscine extérieure. <br />
                                                        Outre cette dernière, vous avez aussi à disposition une piscine couverte ouverte de 09 h à 18 h. <br />
                                                        Pour les baignades à la plage, profitez de la plage privée de l&apos;hôtel Hammamet . <br />
                                                        Sachez aussi que l&apos;établissement possède une salle de Fitness. <br />
                                                        Une salle de sport dont un court de tennis pour ceux qui souhaitent se lancer dans une petite compétition amicale. <br />
                                                        Pour ceux et celles qui prônent la détente avant tout, profitez du Thalassothérapie et Spa de l&apos;établissement.</p>
                                                    <h3 className="text-left text-lg font-semibold mt-4">Les plus de l&apos;hotel El Mouradi El Menzah  4*, TunisieBooking :</h3>
                                                    <p>L&apos;hotel est bien situé, au cœur de la station touristique de Yasmine Hammamet. <br />
                                                        Avec un rapport qualité luxueux, face à une très belle plage d&apos;eau douce et à proximité du parc “Carthage Land”.<br />
                                                        Pour plus d&apos;informations, rendez-vous dans l&apos;une de nos agences de voyage les plus proches de chez-vous.</p>
                                                </div>
                                            )}
                                            <button
                                                onClick={toggleContent}
                                                className="mt-4 text-blue-500 hover:no-underline flex items-center space-x-2"
                                            >
                                                <span>{isExpanded ? "Afficher moins" : "Afficher plus"}</span>
                                                <FontAwesomeIcon
                                                    icon={faChevronDown}
                                                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Equipements Section */}
                        <section id="equipement">
                            <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                                <div className="relative overflow-hidden rounded-lg">
                                    <div className="text-left mt-4">
                                        <div className="text-2xl font-bold">Equipements</div>
                                        <div className="w-[5rem] h-[4px] bg-black mt-2"></div>

                                        <div className="space-y-8 mt-4">
                                            {/* Section: Chambres */}
                                            <div className="grid grid-cols-12 items-start gap-4">
                                                {/* Icon and Vertical Separator */}
                                                <div className="col-span-1 flex justify-center">
                                                    <Image
                                                        className="h-8 w-8"
                                                        src="/chambre.svg"
                                                        alt="Icon_chambre"
                                                        width={500}
                                                        height={300}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="w-[2px] bg-gray-500 h-full self-stretch"></div>

                                                {/* Title and Items */}
                                                <div className="col-span-10">
                                                    <div className="text-xl font-semibold mb-3">Chambres</div>
                                                    <ul className="grid grid-cols-3 gap-x-8 gap-y-2">
                                                        <li className="flex items-center">
                                                            <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
                                                            Chauffage
                                                        </li>
                                                        <li className="flex items-center">
                                                            <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
                                                            Climatisation
                                                        </li>
                                                        <li className="flex items-center">
                                                            <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
                                                            Mini bar
                                                        </li>
                                                        <li className="flex items-center">
                                                            <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
                                                            Chambre Bloc Central
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="w-full h-[2px] bg-gray-500 mt-4"></div>

                                            {/* Section: Internet */}
                                            <div className="grid grid-cols-12 items-start gap-4">
                                                <div className="col-span-1 flex justify-center">
                                                    <Image
                                                        className="h-8 w-8"
                                                        src="/wifi.svg"
                                                        alt="Icon_wifi"
                                                        width={500}
                                                        height={300}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="w-[2px] bg-gray-500 h-full"></div>

                                                <div className="col-span-10">
                                                    <div className="text-xl font-semibold mb-2">Internet</div>
                                                    <ul className="grid grid-cols-3 gap-x-8 gap-y-2">
                                                        <li className="flex items-center">
                                                            <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
                                                            Wi-Fi gratuit
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/*this is the start of the mesures securités card*/}
                        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                            <div className="relative overflow-hidden rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div className="text-left mt-4">
                                        <div className="text-2xl font-bold">Mesures de sécurité et de santé</div>
                                        <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                                        <p className="mt-4">Cet établissement a renforcé les mesures de santé et d&apos;hygiène pour garantir votre sécurité tout au long de votre séjour.</p>
                                        {/* Two Column Grid Layout */}
                                        <div className="grid grid-cols-2 gap-8 mt-6">
                                            <div>
                                                <div className="flex">
                                                    <Image
                                                        className="mr-2 h-8 w-8"
                                                        src="/mesures1.svg"
                                                        alt="Icon_mesure"
                                                        width={500}
                                                        height={300}
                                                        loading="lazy"
                                                    />
                                                    <h3 className="text-lg font-semibold">Mesures de sécurité en vigueur</h3>
                                                </div>
                                                <ul className="mt-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" />
                                                        Le personnel respecte les protocoles de sécurité établis par les autorités locales.
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" />
                                                        Les accessoires partagés tels que: les magazines, les menus, le papier et les stylos ont été retirés.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <div className="flex">
                                                    <Image
                                                        className="mr-2 h-8 w-8"
                                                        src="/mesures2.svg"
                                                        alt="Icon_mesure2"
                                                        width={500}
                                                        height={300}
                                                        loading="lazy"
                                                    />
                                                    <h3 className="text-lg font-semibold">Autres mesures</h3>
                                                </div>
                                                <ul className="mt-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" />
                                                        Nettoyage renforcé et désinfection des surfaces de contact.
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" />
                                                        Mise à disposition de gel hydroalcoolique aux endroits clés.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*this is the start of the avis card*/}
                        <section id="avis">
                            <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                                <div className="relative overflow-hidden rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="text-left mt-4">
                                            <div className="text-2xl font-bold"> {hotel.name} Avis</div>
                                            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                                            <div className="flex gap-4 mt-4 items-start"> {/* Ensure items align at the start */}
                                                <Avatar src="/no-avatar.png" alt="avatar" />
                                                <div className="flex flex-col justify-start"> {/* Make this a column to stack text vertically */}
                                                    <Typography variant="h6">Foulen Fouleni</Typography>
                                                    <Typography variant="small" color="gray" className="font-normal">
                                                        Client TunisieBooking
                                                    </Typography>
                                                </div>
                                                <div className="flex items-center justify-start w-2/3"> {/* Include this in the main flex container */}
                                                    <div className="relative w-5 overflow-hidden -translate-y-6" >
                                                        <div className="h-4 bg-green-400 rotate-45 transform origin-bottom-right rounded-sm" style={{ backgroundColor: "#F4F5F7" }}></div>
                                                    </div>
                                                    <div className="bg-[#F4F5F7] p-4 rounded-lg flex flex-col">
                                                        <div className="flex items-center mb-2"> {/* Container for title and rating */}
                                                            <h4 className="text-lg font-semibold">Good</h4> {/* Feedback title */}
                                                            <div className="flex ml-4">
                                                                {/* Rating Circles */}
                                                                {Array.from({ length: 5 }).map((_, index) => (
                                                                    <svg
                                                                        key={index}
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-4 w-4 mx-0.3"
                                                                        fill={index < 3 ? "currentColor" : "none"} // Change this to manage filled and empty states
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <circle cx="12" cy="12" r="10" className={`border-2 ${index < 3 ? 'bg-blue-500' : 'border-gray-400'}`} />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/*this is the start of the questions card*/}
                        <section id="">
                            <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                                <div className="relative overflow-hidden rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="text-left mt-4">
                                            <div className="text-2xl font-bold">Les Questions les plus fréquentes sur {hotel.name}</div>
                                            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                                            <Accordion style={{ marginLeft: '15px', marginRight: '15px' }} open={open === 1} animate={CUSTOM_ANIMATION}>
                                                <AccordionHeader
                                                    onClick={() => handleOpen(1)}
                                                    className="text-md font-regular text-gray-700 flex items-center relative"
                                                >
                                                    <span className="flex-grow">Quels sont les équipements de l&apos;établissement {hotel.name} ?</span>
                                                    <FontAwesomeIcon
                                                        icon={faChevronDown}
                                                        className={`transition-transform duration-300 ${open === 1 ? 'rotate-180' : 'rotate-0'
                                                            }`}
                                                    /></AccordionHeader>
                                                <AccordionBody>
                                                    Avec la révolution internet, il est devenu très facile de faire la réservation de son voyage devant son écran d’ordinateur ou de son Smartphone. <br />                    Ainsi, on peut tout simplement voir les multiples offres en ligne sur la destination voulue et réserver un hôtel, ou Voyages à l&apos;étranger ou quelques activités à faire une fois sur place.
                                                </AccordionBody>
                                            </Accordion >
                                            <Accordion style={{ marginLeft: '15px', marginRight: '15px' }} open={open === 2} animate={CUSTOM_ANIMATION}>
                                                <AccordionHeader onClick={() => handleOpen(2)} className="text-md font-regular text-gray-700 flex items-center relative">
                                                    <span className="flex-grow">Quelles sont les activités proposées par {hotel.name} ?</span>
                                                    <FontAwesomeIcon
                                                        icon={faChevronDown}
                                                        className={`transition-transform duration-300 ${open === 2 ? 'rotate-180' : 'rotate-0'
                                                            }`}
                                                    /></AccordionHeader>
                                                <AccordionBody>
                                                    Un des principaux avantages non négligeables de choisir une agence de voyage pour réserver ses vacances c&apos;est le professionnalisme et l&apos;expérience de celle-ci.
                                                    <br />  Les professionnels du tourisme sauront vous guider et vous informer sur le pays de destination. Ils vous trouveront aussi des réductions auprès des compagnies aériennes et des hôtels qui ont déjà fait leurs preuves.
                                                    <br />  Enfin, une agence de voyage peut vous mettre à l&apos;abri des aléas et vous accompagner à votre arrivée si jamais vous rencontrez des problèmes .
                                                </AccordionBody>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/*this is the start of the prix card*/}
                        <section id="">
                            <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                                <div className="relative overflow-hidden rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="text-left mt-4">
                                            <div className="text-2xl font-bold">Avantages Prix {hotel.name}</div>
                                            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                                            <div className="mt-4 flex">
                                                <div className="flex items-center w-1/3 mr-[20%]"> {/* First item takes 1/3 width */}
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" />
                                                    hi im a ticked word
                                                </div>
                                                <div className="w-2/3"> {/* Second item takes remaining 2/3 width */}
                                                    <ul style={{ listStyleType: 'disc' }}>
                                                        <li>Coffee</li>
                                                        <li>Tea</li>
                                                        <li>Milk</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
           
        </div>

    );
};

const HotelDetails = () => (    //to escape suspense queryparams problem
    <Suspense fallback={<div>Loading...</div>}>
        <HotelDetailsContent />
    </Suspense>
);

export default HotelDetails;

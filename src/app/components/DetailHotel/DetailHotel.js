"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faChevronDown, faLocationDot, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import {
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";
import { Avatar, Typography } from "@material-tailwind/react";
import AccordionClient from '../Accordion/AccordionClient'; // Isolated Accordion component
import PresentationCard from "../Presentation/PresentationCard"; //Isolated Presentation component
import MoteurResult from "../MoteurResult/MoteurResult";

const DetailHotel = ({ listsHotels = [], regionsData = [], hotelsTripadData = [] }) => {
    const listHotels = listsHotels?.Hotels_hors_promo || [];  // Ensure this property exists in your data
    const listregionsData = regionsData;  // Fetch the data using ville
    console.log(hotelsTripadData); // Check the actual structure of hotelsTripadData
    //const listhotelTripadData = hotelsTripadData?.Hotels || [];
    const listhotelTripadData = [hotelsTripadData];
    console.log(listhotelTripadData);

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
    return (
        <div >
            {listHotels.length > 0 ? (
                listHotels.map((hotel, index) => (
                    <main className="flex-grow" key={index}>
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
                                                {hotel.libelle_hotel}
                                            </span>
                                        </li>
                                    </ol>
                                </nav>
                                {/*this is the start of the detail card*/}
                                <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                                    <div className="mt-8 relative overflow-hidden rounded-lg">
                                        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
                                            <h1 className="text-4xl font-bold  " style={{ marginRight: "10px" }}>{hotel.libelle_hotel}</h1>
                                            <div className="rating-container mt-4 flex items-center" style={{ marginBottom: "1.5rem", marginRight: "auto" }}>
                                                {[...Array(5)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        aria-hidden="true"
                                                        className={`star-icon w-6 h-6 ${index < hotel.categorie
                                                            ? "text-black-300"
                                                            : "text-gray-300"
                                                            }`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                ))}

                                            </div>
                                            <div className='flex items-center space-x-2 text-md md:text-xl'>
                                                {listhotelTripadData.map((notehotel, index) => (


                                                    <span className="text-lg flex" key={index}>

                                                        <img src="/icon_tripadvisor.svg" style={{ marginRight: "5px" }}></img> {notehotel.note_tripad} / 5{" "}
                                                        <span className="font-bold" style={{ marginLeft: "5px" }}>{notehotel.text_tripad}</span>
                                                    </span>
                                                ))}
                                            </div>


                                        </div>
                                        <div className="flex items center">
                                            <FontAwesomeIcon icon={faLocationDot} fixedWidth style={{ marginTop: "7px", color: "#7E8389" }} />
                                            <p className="mt-2 text-sm text-zinc-600" style={{ marginLeft: "7px", color: "#7E8389" }}>{hotel.zone},{hotel.region}</p> {/* Add a subtitle */}
                                        </div>
                                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                                        </div>
                                        <div className="w-full md:w-2/3 h-auto">
                                            <Tabs value="photos" className="overflow-x-auto">
                                                <TabsHeader className="flex space-x-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
                                                    {data.map(({ label, value, id }) => (
                                                        <Tab
                                                            key={value}
                                                            value={value}
                                                            onClick={() => scrollToSection(id)}
                                                            className="py-2 px-4 text-sm md:text-base rounded-md hover:bg-gray-200 cursor-pointer"
                                                        >
                                                            {label}
                                                        </Tab>
                                                    ))}
                                                </TabsHeader>
                                            </Tabs>
                                        </div>

                                        <div className="flex flex-col md:flex-row w-full">
                                            <img
                                                src={hotel.images?.image_principal}
                                                alt={`Image principale de ${hotel.libelle_hotel}`}
                                                className="w-full md:w-2/3 h-auto rounded-lg mt-4 md:mt-5"
                                            />
                                            <div className="w-full md:w-1/3 md:px-4 text-center mt-4 md:mt-0">
                                                <div className="flex space-x-4 justify-center md:justify-start">
                                                    <img src="/avis.svg" alt="Avis" />
                                                    <div className="text-xl font-medium">Avis Voyageurs</div>
                                                </div>
                                                <div className="relative my-6 flex-1 rounded-md p-4" style={{ backgroundColor: "#F4F5F7" }}>
                                                    <div className="absolute left-0 top-0 h-4 w-4 -translate-y-1/2 translate-x-5 rotate-45 transform rounded-sm" style={{ backgroundColor: "#F4F5F7" }}></div>
                                                    <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
                                                    Un bon service, un bon personnel mais a revoir quelques points...
                                                    <FontAwesomeIcon icon={faQuoteRight} className="ml-2" />
                                                    <div><a href="#">Lire tous les avis</a></div>
                                                </div>
                                                <div className="text-xl font-medium mb-2">Principales Services</div>
                                                <div className="relative">
                                                    {hotel.services && Object.keys(hotel.services).length > 0 ? (
                                                        Object.entries(hotel.services)
                                                            .slice(0, 5)
                                                            .map(([category, details], categoryIndex) => (
                                                                <button
                                                                    aria-label="services"
                                                                    key={categoryIndex}
                                                                    className="bg-transparent hover:bg-gray-300 text-black font-normal hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded-full mr-2 mt-2 cursor-pointer"
                                                                >
                                                                    <div className="flex items-center">
                                                                        {details.icon_categorie && (
                                                                            <img
                                                                                src={`https://www.resabooking.com/${details.icon_categorie}`}
                                                                                alt={category}
                                                                                className="w-[20px] h-[20px] mr-2"
                                                                            />
                                                                        )}
                                                                        {category}
                                                                    </div>
                                                                </button>
                                                            ))
                                                    ) : (
                                                        <p className="text-gray-500">Aucun service disponible</p>
                                                    )}
                                                    <div className="text-left mt-4 cursor-pointer">
                                                        <a
                                                            href="#"
                                                            className="text-blue-500 flex items-center group space-x-2"
                                                        >
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
                                    <MoteurResult listRegions={regionsData} />
                                </div>
                                {/*this is the presentation card*/}
                                <PresentationCard />

                                {/* Equipements Section */}
                                <section id="equipement">
                                    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <div className="text-left mt-4">
                                                <div className="text-xl sm:text-2xl font-bold">Equipements</div>
                                                <div className="w-20 sm:w-[5rem] h-[4px] bg-black mt-2"></div>

                                                <div className="space-y-6 sm:space-y-8 mt-4">
                                                    {/* Section: Chambres */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-12 items-start gap-4">
                                                        {/* Icon and Vertical Separator */}
                                                        <div className="sm:col-span-1 flex justify-center">
                                                            <img src="/chambre.svg" className="h-6 w-6 sm:h-8 sm:w-8" alt="Chambres Icon" />
                                                        </div>
                                                        <div className="hidden sm:block w-[2px] bg-gray-500 h-full"></div>

                                                        {/* Title and Items */}
                                                        <div className="sm:col-span-10">
                                                            <div className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Chambres</div>
                                                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
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

                                                    <div className="w-full h-[1px] bg-gray-300 sm:h-[2px] mt-4"></div>

                                                    {/* Section: Internet */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-12 items-start gap-4">
                                                        <div className="sm:col-span-1 flex justify-center">
                                                            <img src="/wifi.svg" className="h-6 w-6 sm:h-8 sm:w-8" alt="Internet Icon" />
                                                        </div>
                                                        <div className="hidden sm:block w-[2px] bg-gray-500 h-full"></div>

                                                        <div className="sm:col-span-10">
                                                            <div className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Internet</div>
                                                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
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
                                <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <div className="text-left mt-4">
                                                <div className="text-xl sm:text-2xl font-bold">Mesures de sécurité et de santé</div>
                                                <div className="w-20 sm:w-[5rem] h-[4px] bg-black mt-2"></div>
                                                <p className="mt-4 text-sm sm:text-base">
                                                    Cet établissement a renforcé les mesures de santé et d&apos;hygiène pour garantir votre sécurité tout au long de votre séjour.
                                                </p>
                                                {/* Responsive Grid Layout */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-6">
                                                    <div>
                                                        <div className="flex items-start">
                                                            <img src="/mesures1.svg" className="mr-2 h-6 w-6 sm:h-8 sm:w-8" alt="Mesures Icon 1" />
                                                            <h3 className="text-base sm:text-lg font-semibold">Mesures de sécurité en vigueur</h3>
                                                        </div>
                                                        <ul className="mt-4 space-y-3">
                                                            <li className="flex items-start">
                                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4 mt-1" />
                                                                <span className="text-sm sm:text-base">
                                                                    Le personnel respecte les protocoles de sécurité établis par les autorités locales.
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4 mt-1" />
                                                                <span className="text-sm sm:text-base">
                                                                    Les accessoires partagés tels que: les magazines, les menus, le papier et les stylos ont été retirés.
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <div className="flex items-start">
                                                            <img src="/mesures2.svg" className="mr-2 h-6 w-6 sm:h-8 sm:w-8" alt="Mesures Icon 2" />
                                                            <h3 className="text-base sm:text-lg font-semibold">Autres mesures</h3>
                                                        </div>
                                                        <ul className="mt-4 space-y-3">
                                                            <li className="flex items-start">
                                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4 mt-1" />
                                                                <span className="text-sm sm:text-base">
                                                                    Nettoyage renforcé et désinfection des surfaces de contact.
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4 mt-1" />
                                                                <span className="text-sm sm:text-base">
                                                                    Mise à disposition de gel hydroalcoolique aux endroits clés.
                                                                </span>
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
                                    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <div className="text-left mt-4">
                                                <div className="text-xl sm:text-2xl font-bold">{hotel.name} Avis</div>
                                                <div className="w-20 sm:w-[5rem] h-[4px] bg-black mt-2"></div>

                                                {/* Container for User Info and Feedback */}
                                                <div className="flex flex-col sm:flex-row sm:items-start gap-2 mt-4 text-center sm:text-left">
                                                    {/* User Info Section */}
                                                    <div className="flex flex-col gap-4 items-center sm:flex-row sm:items-start">
                                                        {/* Avatar */}
                                                        <Avatar src="/no-avatar.png" alt="avatar" className="w-12 h-12 sm:w-16 sm:h-16" />
                                                        {/* User Info */}
                                                        <div className="flex flex-col items-center sm:items-start">
                                                            <Typography variant="h6" className="text-sm sm:text-base">
                                                                Foulen Fouleni
                                                            </Typography>
                                                            <Typography variant="small" color="gray" className="font-normal text-xs sm:text-sm">
                                                                Client TunisieBooking
                                                            </Typography>
                                                        </div>
                                                    </div>

                                                    {/* Feedback Card */}
                                                    <div className="bg-[#F4F5F7] p-4 rounded-lg w-full sm:w-2/3 sm:ml-[5%]">
                                                        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                                                            {/* Feedback Title */}
                                                            <h4 className="text-base sm:text-lg font-semibold">Good</h4>
                                                            {/* Rating Circles */}
                                                            <div className="flex mt-2 sm:mt-0 sm:ml-4">
                                                                {Array.from({ length: 5 }).map((_, index) => (
                                                                    <svg
                                                                        key={index}
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-4 w-4 mx-1"
                                                                        fill={index < 3 ? "currentColor" : "none"}
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <circle
                                                                            cx="12"
                                                                            cy="12"
                                                                            r="10"
                                                                            className={`border-2 ${index < 3 ? "bg-blue-500" : "border-gray-400"}`}
                                                                        />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        {/* Feedback Text */}
                                                        <p className="text-sm sm:text-base leading-relaxed">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
                                                            repudiandae consequuntur voluptatum laborum.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/*this is the start of the questions card*/}
                                <section>
                                    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <div className="flex items-center justify-between">
                                                <div className="text-left mt-4">
                                                    <div className="text-xl sm:text-2xl font-bold">Les Questions les plus fréquentes sur {hotel.libelle_hotel}</div>
                                                    <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                                                    <AccordionClient
                                                        title={`Quels sont les équipements de l'établissement ${hotel.libelle_hotel} ?`}
                                                        content="Avec la révolution internet, il est devenu très facile de faire la réservation de son voyage devant son écran d’ordinateur ou de son Smartphone. Ainsi, on peut tout simplement voir les multiples offres en ligne sur la destination voulue et réserver un hôtel."
                                                        index={1}
                                                    />
                                                    <AccordionClient
                                                        title={`Quelles sont les activités proposées par ${hotel.libelle_hotel} ?`}
                                                        content="Un des principaux avantages non négligeables de choisir une agence de voyage pour réserver ses vacances c'est le professionnalisme et l'expérience de celle-ci. Les professionnels du tourisme sauront vous guider et vous informer sur le pays de destination."
                                                        index={2}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/*this is the start of the prix card*/}
                                <section>
                                    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <div className="text-left mt-4">
                                                <div className="text-xl sm:text-2xl font-bold">Avantages Prix {hotel.libelle_hotel}</div>
                                                <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                                                <div className="mt-4 space-y-4"> {/* Space between list items */}

                                                    {/* Advantage 1 */}
                                                    <div className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="text-green-600 text-lg mt-1 mr-2" />
                                                        <div>
                                                            <div className="font-semibold">Réservez au meilleur prix :</div>
                                                            <p className="text-gray-700">Tunisiebooking négocie pour vous les meilleurs tarifs</p>
                                                        </div>
                                                    </div>

                                                    {/* Advantage 2 */}
                                                    <div className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="text-green-600 text-lg mt-1 mr-2" />
                                                        <div>
                                                            <div className="font-semibold">Facilité de paiement :</div>
                                                            <p className="text-gray-700">
                                                                Réservez vos chambres maintenant et ne payez qu'une avance.
                                                                <br />
                                                                Vous payerez le reste à votre arrivée à l'hôtel.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Advantage 3 */}
                                                    <div className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="text-green-600 text-lg mt-1 mr-2" />
                                                        <div>
                                                            <div className="font-semibold">Modes de paiement :</div>
                                                            <ul className="text-gray-700 list-inside list-disc">
                                                                <li>Paiement sécurisé par carte bancaire</li>
                                                                <li>Paiement en espèce ou par chèque dans nos agences TunisieBooking</li>
                                                                <li>Versement bancaire</li>
                                                                <li>Versement postal</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/**les hotesl similaires**/}
                                <div className="md:relative md:grid md:grid-rows-auto hidden ">
                                    <span className="text-blacktnb text-2xl font-extrabold my-6 justify-self-center">
                                        Les hôtels similaires
                                    </span>
                                    <div className="mx-auto justify-self-center md:grid md:grid-cols-3 ">
                                        <div className="w-full max-w-sm bg-white m-2 md:m-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <a href="#">
                                                <img loading="lazy" className="rounded-t-lg"
                                                    src="https://image.resabooking.com/images/image_panoramique/Aziza_Thalasso_&_Golf_2.jpg"
                                                    alt="hotel aziza thalasso et golf" />
                                            </a>
                                            <div className="px-5 pb-5">
                                                <a  >
                                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        Aziza Thalasso & Golf </h5>
                                                </a>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex items-center mt-2.5 mb-5">
                                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                                <img loading="lazy" src="https://tn.tunisiebooking.com/theme/images/star4.svg"
                                                                    alt="les hotles 4 étoiles" />
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center mt-2.5 mb-5">
                                                            <img loading="lazy" src="https://tn.tunisiebooking.com/images/localisation.svg"
                                                                className="h-4" alt="destination ville hammamet  " />
                                                            <span className="text-gerytnb mx-2 text-sm">
                                                                Hammamet
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flex-col space-y-0.5">
                                                        <span className="text-xs text-gerytnb"> à partir de *</span>
                                                        <div className="static text-3xl font-bold text-gray-900 dark:text-white">
                                                            <span className="font-sans">
                                                                69
                                                            </span>
                                                            <span className=" font-sans text-sm absolute">
                                                                DT
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-gerytnb">prix du 02/11/24</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full max-w-sm md:m-4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <a href="#">
                                                <img loading="lazy" className="rounded-t-lg"
                                                    src="https://image.resabooking.com/images/image_panoramique/El_Mouradi_El_Menzah_2.jpg"
                                                    alt="hotel el mouradi el menzah hammamet" />
                                            </a>
                                            <div className="px-5 pb-5">
                                                <a >
                                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        El Mouradi El Menzah
                                                    </h5>
                                                </a>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex items-center mt-2.5 mb-5">
                                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                                <img loading="lazy" src="https://tn.tunisiebooking.com/theme/images/star4.svg"
                                                                    alt="les hotels 4 étoiles a hammamet" />
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center mt-2.5 mb-5">
                                                            <img loading="lazy" src="https://tn.tunisiebooking.com/images/localisation.svg"
                                                                className="h-4" alt="ville hammamet" />
                                                            <span className="text-gerytnb mx-2 text-sm">
                                                                Hammamet
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flex-col space-y-0.5">
                                                        <span className="text-xs text-gerytnb"> à partir de *</span>
                                                        <div className="static text-3xl font-bold text-gray-900 dark:text-white">
                                                            <span className="font-sans">
                                                                76
                                                            </span>
                                                            <span className=" font-sans text-sm absolute">
                                                                DT
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-gerytnb">prix du 03/11/24</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full max-w-sm bg-white md:m-4 m-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <a href="#">
                                                <img loading="lazy" className="rounded-t-lg"
                                                    src="https://image.resabooking.com/images/image_panoramique/Orient_Palace_&_Spa_2.jpg"
                                                    alt="hotel orient palace et spa" />
                                            </a>
                                            <div className="px-5 pb-5">
                                                <a>
                                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        Orient Palace & Spa
                                                    </h5>
                                                </a>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex items-center mt-2.5 mb-5">
                                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                                <img loading="lazy" src="https://tn.tunisiebooking.com/theme/images/star4.svg"
                                                                    alt="les hotles 4 etoiles a sousse" />
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center mt-2.5 mb-5">
                                                            <img loading="lazy" src="https://tn.tunisiebooking.com/images/localisation.svg"
                                                                className="h-4" alt="ville sousse" />
                                                            <span className="text-gerytnb mx-2 text-sm">
                                                                Sousse
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className=" flex flex-col space-y-0.5">
                                                        <span className="text-xs text-gerytnb"> à partir de *</span>
                                                        <div className="static text-3xl font-bold text-gray-900 dark:text-white">
                                                            <span className="font-sans">
                                                                64
                                                            </span>
                                                            <span className=" font-sans text-sm absolute">
                                                                DT
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-gerytnb">prix du 11/11/24</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </main>

                ))
            ) : (
                <p>Aucun hôtel disponible.</p>
            )}

        </div>
    );
};
export default DetailHotel;

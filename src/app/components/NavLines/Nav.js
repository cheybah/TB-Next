"use client";

import { fetchRegionsData } from '../../redux/slices/dataSlice';
import { store } from '../../redux/store';
import Header from "../Header/Header";
import Copyright from "../Copyright/Copyright";
import React from 'react';
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
// Fetch data from the API
export async function fetchData() {
    const dispatch = store.dispatch;
    try {
        const regionsData = await dispatch(fetchRegionsData());


        return {
            regionsData: regionsData.payload || [],
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { regionsData: [] };
    }
}

const HotelDetailsContent = async ({ hotel }) => {
    const { regionsData } = await fetchData();  // Fetch the data using ville
    console.log("regions" + regionsData);
    if (!hotel) return <div>Hotel not found.</div>;
    const services = Array.isArray(hotel.services)
        ? hotel.services
        : hotel.services ? JSON.parse(hotel.services) : [];



    const getRatingDescription = (trip_advisor) => {
        switch (trip_advisor) {
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





    return (
        <div className="min-h-screen flex flex-col">
            <Header />
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
                            {/* Title, Ratings, and TripAdvisor */}
                            <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
                                <div className="text-2xl md:text-4xl font-bold">{hotel.name}</div>
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            aria-hidden="true"
                                            className={`w-5 h-5 md:w-6 md:h-6 ${index < hotel.rating ? "text-yellow-300" : "text-gray-300"}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                    <span className="bg-yellow-200 px-2 py-1 rounded text-xs">{hotel.rating}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-md md:text-xl">
                                    <img src="/icon_tripadvisor.svg" alt="TripAdvisor" className="w-7 h-7" />
                                    <span>{hotel.trip_advisor} / 5</span>
                                    <span className="font-bold">{getRatingDescription(hotel.trip_advisor)}</span>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-center mt-4 text-sm text-zinc-600">
                                <FontAwesomeIcon icon={faLocationDot} fixedWidth className="mr-0 text-gray-500" />
                                <p className="mt-2 text-sm text-zinc-600" style={{ marginLeft: "7px", color: "#7E8389" }}>{hotel.address}</p>
                            </div>

                            {/* Tabs */}
                            <div className="w-full mt-6">
                                <Tabs value="photos">
                                    <TabsHeader className="flex overflow-x-auto">
                                        {data.map(({ label, value, id }) => (
                                            <Tab
                                                key={value}
                                                value={value}
                                                onClick={() => scrollToSection(id)}
                                                className="flex-1 text-center px-4 py-2 border-b-2 hover:border-gray-300"
                                            >
                                                {label}
                                            </Tab>
                                        ))}
                                    </TabsHeader>
                                </Tabs>
                            </div>

                            {/* Image & Avis/Services */}
                            <div className="flex flex-col md:flex-row mt-6 gap-6">
                                <img
                                    className="w-full md:w-2/3 h-auto rounded-lg"
                                    src={`http://react.tunisiebooking.com/storage/app/public/${hotel.image}`}
                                    alt={`Hotel Image of ${hotel.name}`}
                                />
                                <div className="w-full md:w-1/3 space-y-4">
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <img src="/avis.svg" alt="Avis" className="w-6 h-6" />
                                            <span className="text-xl font-medium">Avis Voyageurs</span>
                                        </div>
                                        <div className="relative my-4 p-4 bg-gray-100 rounded-md">
                                            <FontAwesomeIcon icon={faQuoteLeft} className="text-black mr-2" />
                                            Un bon service, un bon personnel mais a revoir quelques points...
                                            <FontAwesomeIcon icon={faQuoteRight} className="text-black ml-2" />
                                            <a href="" className="block mt-2 text-blue-500">Lire tous les avis</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium">Principales Services</h3>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {services.length > 0 ? (
                                                services.map((service, index) => (
                                                    <button
                                                        key={index}
                                                        className="bg-gray-200 hover:bg-gray-300 text-black font-normal py-2 px-4 rounded-full flex items-center space-x-2"
                                                    >
                                                        <img
                                                            src={`http://react.tunisiebooking.com/storage/app/public/${service.icon}`}
                                                            alt={service.name}
                                                            className="w-5 h-5"
                                                        />
                                                        <span>{service.name}</span>
                                                    </button>
                                                ))
                                            ) : (
                                                <p className="text-gray-500">No services available</p>
                                            )}
                                        </div>
                                        <a href="" className="text-blue-500 flex items-center mt-4 group">
                                            Voir tous les services
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="ml-1 transform transition-transform duration-300 group-hover:translate-x-2"
                                            />
                                        </a>
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
                            <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                                <div className="relative overflow-hidden rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="text-left mt-4">
                                            <div className="text-2xl font-bold">Les Questions les plus fréquentes sur {hotel.name}</div>
                                            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                                            <AccordionClient
                                                title={`Quels sont les équipements de l'établissement ${hotel.name} ?`}
                                                content="Avec la révolution internet, il est devenu très facile de faire la réservation de son voyage devant son écran d’ordinateur ou de son Smartphone. Ainsi, on peut tout simplement voir les multiples offres en ligne sur la destination voulue et réserver un hôtel."
                                                index={1}
                                            />
                                            <AccordionClient
                                                title={`Quelles sont les activités proposées par ${hotel.name} ?`}
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
                            <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                                <div className="relative overflow-hidden rounded-lg">
                                    <div className="text-left mt-4">
                                        <div className="text-2xl font-bold">Avantages Prix {hotel.name}</div>
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



                    </div>
                </section>
            </main>
            <Copyright />
        </div>

    );
};

const Nav = ({ hotelData }) => {
    if (!hotelData) {
        return <div>Loading...</div>; // Optional: show a loading or fallback UI
    }

    return (
        <nav>
            <HotelDetailsContent hotel={hotelData} />
        </nav>
    );
};

export default Nav;



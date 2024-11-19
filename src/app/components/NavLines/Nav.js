"use client";

import {fetchRegionsData } from '../../redux/slices/dataSlice';
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
        // Log the data here
        console.log('regions Data:', regionsData);

        return {
            regionsData: regionsData.payload || [],
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { regionsData: []};
    }
}

const HotelDetailsContent = async ({ hotel }) => {
    const { regionsData } = await fetchData();  // Fetch the data using ville
    console.log("regions"+regionsData);
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
                                        <img src="/icon_tripadvisor.svg" style={{ marginRight: "5px" }}></img> {hotel.trip_advisor} / 5{" "}
                                        <span className="font-bold" style={{ marginLeft: "5px" }}>{getRatingDescription(hotel.trip_advisor)}</span>
                                    </span>
                                </div>
                                <div className="flex items center">
                                    <FontAwesomeIcon icon={faLocationDot} fixedWidth  style={{ marginTop: "7px", color: "#7E8389" }} />
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
                                    <img
                                        className="w-2/3 h-auto rounded-lg" style={{ marginTop: "20px" }} // Set width to two-thirds and auto height
                                        src={`http://react.tunisiebooking.com/storage/app/public/${hotel.image}`}
                                        alt={`Hotel Image of ${hotel.name}`}
                                    />
                                    <div className="w-1/3 px-4 text-center" style={{ marginTop: "3%" }}>
                                        <div className="flex space-x-4">
                                            <img src="/avis.svg"></img>
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
                                            {services.length > 0 ? (
                                                services.map((service, index) => (
                                                    <button
                                                        aria-label="services"
                                                        key={index}
                                                        className="bg-transparent hover:bg-gray-300 text-black font-normal 
                                                        hover:text-white py-2 px-4 border border-gray-700 
                                                        hover:border-transparent rounded-full mr-2 mt-[4%] 
                                                        cursor-pointer relative"
                                                    >
                                                        <div className="flex items-center">
                                                            <img src={`http://react.tunisiebooking.com/storage/app/public/${service.icon}`} alt={service.name} className="mr-2 w-[20px]" />
                                                            {service.name}
                                                        </div>
                                                    </button>
                                                ))
                                            ) : (
                                                <p className="text-gray-500">No services available</p>
                                            )}

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
                            <MoteurResult listRegions={regionsData} />
                        </div>

                        {/*this is the presentation card*/}
                        <PresentationCard />


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
                                                    <img src="/chambre.svg" className="h-8 w-8" alt="Icon" />
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
                                                    <img src="/wifi.svg" className="h-8 w-8" alt="Icon" />
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
                                                    <img src="/mesures1.svg" className="mr-2"></img>
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
                                                    <img src="/mesures2.svg" className="mr-2"></img>
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



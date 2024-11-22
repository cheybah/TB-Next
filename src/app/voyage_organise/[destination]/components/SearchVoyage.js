"use client";
import React, { useState } from 'react';
import '../../../components/Moteur/SearchBar.css';
import Link from 'next/link';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const SearchVoyage = () => {
    const params = useParams();
    const currentDestination = params.destination || 'Tcheque';
    const destinations = [
        { name: 'Tcheque', path: '/voyage_organise/tcheque' },
        { name: 'Omra', path: '/voyage_organise/omra' },
        { name: 'Egypte', path: '/voyage_organise/egypte' },
        { name: 'Espagne', path: '/voyage_organise/espagne' },
        { name: 'Tunisie', path: '/voyage_organise/tunisie' },
        { name: 'Dubai', path: '/voyage_organise/dubai' },
    ];
    const [selectedDestination, setSelectedDestination] = useState(
        currentDestination.charAt(0).toUpperCase() + currentDestination.slice(1)
    );
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [selectedDate, setSelectedDate] = useState("Choisir la date");

    const handleDestinationChange = (destination) => {
        setSelectedDestination(destination.name);
        window.location.href = destination.path;
    };

    return (
        <div className="relative z-10 flex items-center justify-center h-full md:px-4 px-2">
            <form className="w-full max-w-5xl p-6 bg-white bg-opacity-90 rounded-xl shadow-lg -mt-10" style={{ paddingBottom: "3rem", paddingTop: "0.5rem", backgroundColor: "white" }}>
                {/* Tabs */}
                <div className="flex flex-wrap justify-between items-center mb-6 border-b border-gray-300 sm:gap-6">
                    {[
                        { icon: 'hotel.svg', label: 'Hotels Tunisie', href: '/' },
                        { icon: 'umrah.svg', label: 'Omra' },
                        { icon: 'voyage-organisé.svg', label: 'Voyage Organisé' },
                        { icon: 'vols.svg', label: 'Vols' },
                        { icon: 'circuit.svg', label: 'Circuits' },
                    ].map((tab, index) => (
                        <Link
                            key={index}
                            href={tab.href || '#'}
                            className={`flex items-center space-x-2 p-2 cursor-pointer ${tab.label === 'Voyage Organisé'
                                    ? 'text-pink-500 border-b-2 border-pink-500'
                                    : 'text-gray-700 hover:text-pink-400 hover:border-b-2 hover:border-pink-400'
                                }`}
                        >
                            <img
                                src={`/${tab.icon}`}
                                alt={`${tab.label} Icon`}
                                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-8"
                            />
                            <span className="hidden sm:flex text-sm sm:text-base font-medium">
                                {tab.label}
                            </span>
                        </Link>
                    ))}
                </div>


                {/* Grid Layout for Inputs */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Destination Dropdown */}
                    <div>
                        <div className="relative w-full">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='HeaderIcon Icon' />
                            <Listbox as="div" value={selectedDestination} onChange={handleDestinationChange}>
                                <ListboxButton className="HeaderSearchInput text-left pl-10" style={{ color: selectedDestination === currentDestination ? 'black' : 'grey' }}>
                                    {selectedDestination}
                                </ListboxButton>
                                <ListboxOptions className="absolute w-full bg-white border border-gray-300 mt-1 z-20 max-h-80 overflow-y-auto">
                                    {/* Placeholder Option */}
                                    <div className="flex items-center px-3 py-2 text-black font-semibold cursor-default">
                                        {currentDestination}
                                    </div>
                                    <hr className="border-t border-gray-300" style={{ marginTop: "5px", marginBottom: "5px" }} />
                                    {destinations.map((destination, index) => (
                                        <React.Fragment key={destination.name}>
                                            <ListboxOption value={destination}>
                                                {({ selected }) => (
                                                    <div className={`flex items-center px-3 py-1 ${selected ? 'bg-gray-400 text-white' : 'text-black'}`}>
                                                        {destination.name}
                                                    </div>
                                                )}
                                            </ListboxOption>
                                            {index < destinations.length - 1 && <hr className="border-t border-gray-300" style={{ marginTop: "5px", marginBottom: "5px" }} />}
                                        </React.Fragment>
                                    ))}
                                </ListboxOptions>
                            </Listbox>
                        </div>
                    </div>

                    {/* Date Field */}
                    <div>
                        <div className="relative w-full">
                            <FontAwesomeIcon icon={faCalendar} className='HeaderIcon' />
                            <div
                                className="HeaderSearchInput"
                                onClick={() => setShowDateDropdown(!showDateDropdown)}
                                style={{ color: selectedDate === "Choisir la date" ? 'black' : 'grey', cursor: 'pointer' }}
                            >
                                {selectedDate}
                            </div>
                            {showDateDropdown && (
                                <div className="absolute w-full bg-white border border-gray-300 mt-1 z-20">
                                    <div className="flex items-center px-3 py-2 text-black font-semibold cursor-default">Choisir la date</div>
                                    <hr className="border-t border-gray-300" style={{ marginTop: "5px", marginBottom: "5px" }} />
                                    <div className="px-3 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => {
                                        setSelectedDate("Décembre 2024");
                                        setShowDateDropdown(false);
                                    }}>
                                        Décembre 2024
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchVoyage;

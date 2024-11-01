"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { Listbox } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { enUS } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './MoteurResult.css';

const MoteurResult = () => {
    const searchParams = useSearchParams();
    const ville = searchParams.get('ville');

    const [selectedDestination, setSelectedDestination] = useState(null);
    const [destinations, setDestinations] = useState([]);
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    // Fetch destinations on component mount
    useEffect(() => {
        axios.get('http://api.resabookings.com/api/api/api_hotel/api_destination_test.php').then(res => {
            const regions = res.data.regions;
            const destinationsList = regions.map(dest => dest.libelle_region);
            setDestinations(destinationsList);
        });
    }, []);

    // Set the selected destination based on the 'ville' query parameter when the component mounts
    useEffect(() => {
        if (ville && destinations.includes(ville)) {
            setSelectedDestination(ville);
        }
    }, [ville, destinations]);

    const handleOption = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }));
    };

    return (
        <Suspense>

            <div className='flex justify-center mt-8 mb-8 md:mt-0 md:mb-0 lg:mt-16 lg:mb-0 mx-2'>
                <form>
                    <div className="div_form1 slider flex flex-wrap items-center justify-between max-w-screen-xl -mt-10 lg:-mt-0 md:-mt-72">
                        <div className="px-6 w-full">
                            <div className="w-full grid lg:-mt-20 md:-mt-14 md:grid-cols-4 ml-0 lg:ml-0 md:-ml-2 lg:pb-px md:pb-px">
                                {/* Destination */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Destination</label>
                                    <div className="relative w-full">
                                        <FontAwesomeIcon icon={faBed} className='HeaderIcon Icon' />
                                        <Listbox value={selectedDestination} onChange={setSelectedDestination}>
                                            <Listbox.Button className="HeaderSearchInput" style={{ color: 'grey' }}>
                                                {selectedDestination || 'Select a destination'}
                                            </Listbox.Button>
                                            <Listbox.Options className="absolute w-full bg-white border border-gray-300 mt-1 max-h-80 overflow-y-auto">
                                                {destinations.map(destination => (
                                                    <Listbox.Option key={destination} value={destination}>
                                                        {({ selected }) => (
                                                            <div className={`flex items-center p-2 ${selected ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                                                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                                                {destination}
                                                            </div>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Listbox>
                                    </div>
                                </div>

                                {/* Date Range Picker */}
                                <div className="relative flex flex-col md:space-x-4 mx-2 z-50">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Check-In</label>
                                        <div className="relative w-full">
                                            <FontAwesomeIcon icon={faCalendar} className="HeaderIcon" />
                                            <span onClick={() => setOpenDate(!openDate)} className="HeaderSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                            {openDate && (
                                                <DateRange
                                                    editableDateInputs={true}
                                                    onChange={item => setDate([item.selection])}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={date}
                                                    locale={enUS}
                                                    rangeColors={["#85B919"]}
                                                    className="absolute top-12 z-50 date bg-white shadow-lg"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Occupancy Dropdown */}
                                <div className="HeaderSearchItem">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Occupancy</label>
                                        <div className="relative mt-1">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500"
                                            />
                                            <span
                                                onClick={() => setOpenOptions(!openOptions)}
                                                className="HeaderSearchText block w-full pl-10 py-2 rounded-md border border-gray-300 text-gray-700 cursor-pointer focus:ring-blue-400 focus:border-blue-400"
                                            >
                                                {`${options.adult} adultes - ${options.children} enfants - ${options.room} chambres`}
                                            </span>
                                            {openOptions && (
                                                <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-20">
                                                    {/* Adult Counter */}
                                                    <div className="optionItem flex items-center justify-between">
                                                        <span className="optionText">Adultes</span>
                                                        <div className="optionCounter flex items-center space-x-2">
                                                            <button
                                                                type="button"
                                                                disabled={options.adult <= 1}
                                                                className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                                onClick={() => handleOption('adult', 'd')}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="optionCounterNumber">{options.adult}</span>
                                                            <button
                                                                type="button"
                                                                className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                                onClick={() => handleOption('adult', 'i')}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Children Counter */}
                                                    <div className="optionItem flex items-center justify-between mt-2">
                                                        <span className="optionText">Enfants</span>
                                                        <div className="optionCounter flex items-center space-x-2">
                                                            <button
                                                                type="button"
                                                                disabled={options.children <= 0}
                                                                className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                                onClick={() => handleOption('children', 'd')}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="optionCounterNumber">{options.children}</span>
                                                            <button
                                                                type="button"
                                                                className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                                onClick={() => handleOption('children', 'i')}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Room Counter */}
                                                    <div className="optionItem flex items-center justify-between mt-2">
                                                        <span className="optionText">Chambres</span>
                                                        <div className="optionCounter flex items-center space-x-2">
                                                            <button
                                                                type="button"
                                                                disabled={options.room <= 1}
                                                                className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                                onClick={() => handleOption('room', 'd')}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="optionCounterNumber">{options.room}</span>
                                                            <button
                                                                type="button"
                                                                className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                                onClick={() => handleOption('room', 'i')}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="relative w-full">
                                    <Link href={`/HotelsResult?ville=${selectedDestination}`}>
                                        <button
                                            className="btn_rechercher w-72 lg:w-72 md:w-36 py-2 bg-gradient-to-r from-[#FF5555] to-[#F40091] text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
                                            disabled={!selectedDestination} // Disable the button if no destination is selected
                                        >
                                            Rechercher
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Suspense>
    );

};

export default MoteurResult;

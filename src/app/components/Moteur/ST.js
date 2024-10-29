import React, { useState } from "react";
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome/index";
import { faBed } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "../../../../node_modules/@headlessui/react/dist/index";
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from "react-date-range";
import { enUS } from 'date-fns/locale';
import { format } from 'date-fns';

const ST = () => {

    const [selectedDestination, setSelectedDestination] = useState('');
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const destinations = ['New York', 'London', 'Paris', 'Tokyo']; // Example destinations

    const handleOption = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1,
        }));
    };

    return (
        <div className="relative z-10 flex items-center justify-center h-full px-4">
            <form className="w-full max-w-5xl p-6 bg-white bg-opacity-90 rounded-xl shadow-lg -mt-10" style={{paddingBottom: "2.7rem" , paddingTop: "0.5rem"}}>
                <div className="flex flex-wrap justify-between items-center mb-6 border-b border-gray-300 sm:gap-6">
                    {[
                        { icon: 'hotel.svg', label: 'Hotels Tunisie' },
                        { icon: 'umrah.svg', label: 'Omra' },
                        { icon: 'voyage-organisé.svg', label: 'Voyage Organisé' },
                        { icon: 'vols.svg', label: 'Vols' },
                        { icon: 'circuit.svg', label: 'Circuits' }
                    ].map((tab, index) => (
                        <div
                            key={index}
                            className={`flex items-center space-x-2 p-2 cursor-pointer ${index === 0
                                ? 'text-pink-500 border-b-2 border-pink-500'
                                : 'text-gray-700 hover:text-pink-400 hover:border-b-2 hover:border-pink-400'
                                }`}
                        >
                            <img src={`/${tab.icon}`} alt={`${tab.label} Icon`} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-8" />
                            <span className="text-sm sm:text-base font-medium">{tab.label}</span>
                        </div>
                    ))}
                </div>
                {/* Grid Layout for Inputs */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Destination Selector */}
                    <div className="relative mt-1">
                        <FontAwesomeIcon
                            icon={faBed}
                            className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500"
                        />
                        <Listbox value={selectedDestination} onChange={setSelectedDestination}>
                            <Listbox.Button className="HeaderSearchInput w-full pl-10 py-2 rounded-md border border-gray-300 text-gray-700 focus:ring-blue-400 focus:border-blue-400">
                                {selectedDestination || 'Select a destination'}
                            </Listbox.Button>
                            <Listbox.Options className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-20">
                                {destinations.map((destination) => (
                                    <Listbox.Option key={destination} value={destination}>
                                        {({ selected }) => (
                                            <div className={`p-2 ${selected ? 'bg-blue-500 text-white' : 'text-black'}`}>
                                                {destination}
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Listbox>
                    </div>

                    {/* Date Range Picker */}
                    <div className="relative mt-1">
                        <FontAwesomeIcon
                            icon={faCalendar}
                            className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500"
                        />
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className="HeaderSearchText block w-full pl-10 py-2 rounded-md border border-gray-300 text-gray-700 cursor-pointer focus:ring-blue-400 focus:border-blue-400"
                        >
                            {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                        </span>

                        {openDate && (
                            <DateRange
                                editableDateInputs
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                locale={enUS}
                                className="absolute mt-1 z-20"
                            />
                        )}
                    </div>

                    {/* Options Selector */}
                    <div className="relative mt-1">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500"
                        />
                        <span
                            onClick={() => setOpenOptions(!openOptions)}
                            className="HeaderSearchText block w-full pl-10 py-2 rounded-md border border-gray-300 text-gray-700 cursor-pointer focus:ring-blue-400 focus:border-blue-400"
                        >
                            {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                        </span>
                        {openOptions && (
                            <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-20">
                                {/* Adult Counter */}
                                <div className="optionItem flex items-center justify-between">
                                    <span className="optionText">Adult</span>
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
                                    <span className="optionText">Children</span>
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
                                    <span className="optionText">Room</span>
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
            </form>
            {/* Search Button - Moved Outside the Form */}
            <div className="absolute z-10 flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <button
                    type="submit"
                    style={{marginBottom:"-7%"}}
                    className="w-36 sm:w-72 py-2 bg-gradient-to-r from-[#FF5555] to-[#F40091] text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
                >
                    Search
                </button>
            </div>
        </div>
    );
};


export default ST; 
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
        <div class="relative z-10 flex items-center justify-center h-full px-4">
            <form class="w-full max-w-5xl p-6 bg-white bg-opacity-90 rounded-xl shadow-lg">
            <div className="flex flex-row">
                    <div class="grid gap-6 md:grid-cols-3">
                        <div>
                            <div>hi </div>
                            <div>hi </div>
                            <div>hi </div>
                            <div>hi </div>
                        </div>
                        <div>
                            <div class="relative mt-1">
                                <FontAwesomeIcon icon={faBed} className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500" />
                                <Listbox value={selectedDestination} onChange={setSelectedDestination}>
                                    <ListboxButton className="HeaderSearchInput w-full pl-10 py-2 rounded-md border border-gray-300 text-gray-700 focus:ring-blue-400 focus:border-blue-400">
                                        {selectedDestination || 'Select a destination'}
                                    </ListboxButton>
                                    <ListboxOptions className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-20">
                                        {destinations.map((destination) => (
                                            <ListboxOption key={destination} value={destination}>
                                                {({ selected }) => (
                                                    <div className={`p-2 ${selected ? 'bg-blue-500 text-white' : 'text-black'}`}>
                                                        {destination}
                                                    </div>
                                                )}
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </Listbox>
                            </div>
                        </div>

                        <div>
                            <div class="relative mt-1">
                                <FontAwesomeIcon icon={faCalendar} className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500" />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="HeaderSearchText block w-full pl-10 py-2 rounded-md border border-gray-300 text-gray-700 cursor-pointer focus:ring-blue-400 focus:border-blue-400"
                                >
                                    {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                </span>

                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        locale={enUS}
                                        className="absolute mt-1 z-20"
                                    />
                                )}
                            </div>
                        </div>

                        <div>
                            <div class="relative mt-1">
                                <FontAwesomeIcon icon={faUser} className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500" />
                                <span
                                    onClick={() => setOpenOptions(!openOptions)}
                                    className="HeaderSearchText block w-full pl-10 py-2 rounded-md border border-gray-300 text-gray-700 cursor-pointer focus:ring-blue-400 focus:border-blue-400"
                                >
                                    {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                                </span>

                                {openOptions && (
                                    <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-20">
                                        <div className="optionItem flex items-center justify-between">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter flex items-center space-x-2">
                                                <button
                                                    type="button"
                                                    disabled={options.adult <= 1}
                                                    className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                    onClick={() => handleOption("adult", "d")}
                                                >-</button>
                                                <span className="optionCounterNumber">{options.adult}</span>
                                                <button
                                                    type="button"
                                                    className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                    onClick={() => handleOption("adult", "i")}
                                                >+</button>
                                            </div>
                                        </div>

                                        <div className="optionItem flex items-center justify-between mt-2">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter flex items-center space-x-2">
                                                <button
                                                    type="button"
                                                    disabled={options.children <= 0}
                                                    className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                    onClick={() => handleOption("children", "d")}
                                                >-</button>
                                                <span className="optionCounterNumber">{options.children}</span>
                                                <button
                                                    type="button"
                                                    className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                    onClick={() => handleOption("children", "i")}
                                                >+</button>
                                            </div>
                                        </div>

                                        <div className="optionItem flex items-center justify-between mt-2">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter flex items-center space-x-2">
                                                <button
                                                    type="button"
                                                    disabled={options.room <= 1}
                                                    className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                    onClick={() => handleOption("room", "d")}
                                                >-</button>
                                                <span className="optionCounterNumber">{options.room}</span>
                                                <button
                                                    type="button"
                                                    className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                    onClick={() => handleOption("room", "i")}
                                                >+</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative z-10 top-40 lg:top-6 md:-top-6 md:col-span-1 md:col-start-2 flex justify-center">
                    <button
                        type="submit"
                        className=" w-72 py-2 bg-gradient-to-r from-[#FF5555] to-[#F40091] text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};


export default ST; 
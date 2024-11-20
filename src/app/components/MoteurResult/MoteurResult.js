"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { Listbox } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { addDays } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './MoteurResult.css';

const MoteurResult = ({ listRegions = [] }) => {
    const searchParams = useSearchParams();
    const ville = searchParams.get('ville');
    const datedep=searchParams.get('datedep');
    const dateret=searchParams.get('dateret');
    const destinations = listRegions.regions || []; // Ensure it's an array

    const [selectedDestination, setSelectedDestination] = useState(null);
    const[startDate, setStartDate] = useState(format(new Date(), "yyyy-MM-dd"));
    const [endDate, setEndDate] = useState(format(addDays(new Date(), 2), "yyyy-MM-dd"));
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 2),
        key: 'selection'
    }]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    // Get the current date (to disable past dates)
    const currentDate = new Date();
      // Ref for DateRange
  const dateRangeRef = useRef(null);

  // Close DateRange when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
        setOpenDate(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    // Update selectedDestination if `ville` is found in the query parameters
    useEffect(() => {
        if (ville && destinations.find(destination => destination.libelle_region === ville)) {
            setSelectedDestination(ville);
        }
    }, [ville, destinations]);

    const handleOption = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }));
    };

    // Function to handle the DateRange change
    const handleDateChange = (item) => {
        setDate([item.selection]);
        // Check if startDate is not equal to endDate and both dates are selected
        if (item.selection.startDate !== item.selection.endDate) {
            setOpenDate(false); // Close the date picker when dates are valid
        }
        setStartDate(format(item.selection.startDate, "yyyy-MM-dd"));
        setEndDate(format(item.selection.endDate, "yyyy-MM-dd"));
    };

    return (
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
                                            {destinations.map((destination) => (
                                                <Listbox.Option key={destination.id_region} value={destination.libelle_region}>
                                                    {({ selected }) => (
                                                        <div className={`flex items-center p-2 ${selected ? 'bg-gray-500 text-white' : 'text-black'}`}>
                                                            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                                            {destination.libelle_region}
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
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500"
                                />
                                <span onClick={() => setOpenDate(!openDate)} className="HeaderSearchText">
                                    {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                </span>

                                {openDate && (
                                    <div className="absolute z-20 mt-1 bg-white border border-gray-300 shadow-lg" ref={dateRangeRef}>
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={handleDateChange}  // Use the handleDateChange function here
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        locale={enUS}
                                        rangeColors={["#FF0097"]}
                                        months={2}  // Display two months in the calendar view
                                        direction="horizontal" // Arrange the two months horizontally
                                        className="absolute  z-50  bg-white shadow-lg"
                                        minDate={currentDate}  // Disable dates before the current date
                                    />
                                    </div>
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
                                                            aria-label="decrement"
                                                            type="button"
                                                            disabled={options.adult <= 1}
                                                            className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                            onClick={() => handleOption('adult', 'd')}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="optionCounterNumber">{options.adult}</span>
                                                        <button
                                                            aria-label="increment"
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
                                                            aria-label="decrement"
                                                            type="button"
                                                            disabled={options.children <= 0}
                                                            className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                            onClick={() => handleOption('children', 'd')}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="optionCounterNumber">{options.children}</span>
                                                        <button
                                                            aria-label="increment"
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
                                                            aria-label="decrement"
                                                            type="button"
                                                            disabled={options.room <= 1}
                                                            className="optionCounterButton px-2 py-1 bg-gray-200 rounded"
                                                            onClick={() => handleOption('room', 'd')}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="optionCounterNumber">{options.room}</span>
                                                        <button
                                                            aria-label="increment"
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
                                <Link href={`/HotelsResult?ville=${selectedDestination || ''}&datedep=${startDate}&dateret=${endDate}`}>
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
    );
};

export default MoteurResult;

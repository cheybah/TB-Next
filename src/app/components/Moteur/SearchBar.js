"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { addDays } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './SearchBar.css';

const SearchBar = ({ listRegions = [] }) => {
  const destinations = listRegions.regions;
  const [selectedDestination, setSelectedDestination] = useState(false);
  const[startDate, setStartDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState(format(addDays(new Date(), 2), "yyyy-MM-dd"));
  const [openDate, setOpenDate] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track screen size

  const [date, setDate] = useState([// dateRange useState
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2), // Default to 7 days apart
      key: 'selection',
    },
  ]);
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

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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

    // Check if the screen is small
    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 768); // Adjust the size threshold as needed
      };
  
      // Initial check
      checkScreenSize();
  
      // Update on window resize
      window.addEventListener("resize", checkScreenSize);
  
      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }, []);

  return (
    <div className="relative z-10 flex items-center justify-center h-full md:px-4 px-2">
      <form className="w-full max-w-7xl p-6 bg-white bg-opacity-90 rounded-xl shadow-lg -mt-10" style={{ paddingBottom: "3rem", paddingTop: "0.5rem" }}>
        <div className="flex flex-wrap justify-between items-center mb-6 border-b border-gray-300 sm:gap-6">
          {[ 
            { icon: 'hotel.svg', label: 'Hotels Tunisie' , href: '/' }, 
            { icon: 'umrah.svg', label: 'Omra' }, 
            { icon: 'voyage-organisé.svg', label: 'Voyage Organisé', href: '/voyage_organise/tcheque' }, 
            { icon: 'vols.svg', label: 'Vols', href: '/vol/pas-cher' }, 
            { icon: 'circuit.svg', label: 'Circuits' } 
          ].map((tab, index) => (
            <Link 
              key={index} 
              href={tab.href || '#'} 
              className={`flex items-center space-x-2 p-2 cursor-pointer ${
                index === 0 
                  ? 'text-pink-500 border-b-2 border-pink-500' 
                  : 'text-gray-700 hover:text-pink-400 hover:border-b-2 hover:border-pink-400'
              }`}
            >
              <img src={`/${tab.icon}`} alt={`${tab.label} Icon`} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-8" />
              <span className="hidden sm:flex text-sm sm:text-base font-medium">{tab.label}</span>
              </Link>
          ))}
        </div>

        {/* Grid Layout for Inputs */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Destination */}
          <div>
            <div className="relative w-full">
              <FontAwesomeIcon icon={faBed} className='HeaderIcon Icon' />
              <Listbox value={selectedDestination} onChange={setSelectedDestination}>
                <ListboxButton className="HeaderSearchInput" style={{ color: 'grey' }}>
                  {selectedDestination ? selectedDestination : 'Choisir une destination'}
                </ListboxButton>
                <ListboxOptions className="absolute w-full bg-white border border-gray-300 mt-1 z-20 max-h-80 overflow-y-auto">
                  {destinations.map((destination) => (
                    <ListboxOption key={destination.id_region} value={destination.libelle_region}>
                      {({ selected }) => (
                        <div className={`flex items-center p-2 ${selected ? 'bg-gray-400 text-white' : 'text-black'}`}>
                          {destination.libelle_region}
                        </div>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
          </div>

          {/* Date Range Picker */}
           {/* Date Range Picker */}
        <div>
          <div className="relative mt-1">
            <span onClick={() => setOpenDate(!openDate)} className="HeaderSearchText">
              {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
            </span>

            {openDate && (
              <div className="absolute z-20 mt-1 bg-white border border-gray-300 shadow-lg" style={{ width: 'auto' }}> {/* Added margin-left and adjusted width */}
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  locale={enUS}
                  rangeColors={["#FF0097"]}
                  months={2}
                  direction={isSmallScreen ? 'vertical' : 'horizontal'} // Change direction based on screen size
                  className="absolute z-50 bg-white shadow-lg"
                  minDate={new Date()}  // Disable past dates
                  style={{ width: '280px' }} // Minimized width for DateRange
                />
              </div>
            )}
          </div>
        </div>

          {/* Occupancy Dropdown */}
          <div className="HeaderSearchItem">
            <div>
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
        </div>
      </form>

      <div className="absolute z-10 flex justify-center absolute bottom-[-2px] left-1/2 transform -translate-x-1/2">
        <Link href={`/HotelsResult?ville=${selectedDestination}&datedep=${startDate}&dateret=${endDate}`}>
          <button
            type="submit"
            style={{ marginBottom: "-5%", cursor: "pointer" }}
            className="w-36 sm:w-72 py-2 bg-gradient-to-r from-[#FF5555] to-[#F40091] text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
            disabled={!selectedDestination} // Disable the button if no destination is selected
          >
            Rechercher
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;

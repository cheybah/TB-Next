import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { Listbox } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faUser ,faLocationDot } from '@fortawesome/free-solid-svg-icons';
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
    const [isOpen, setIsOpen] = useState(false);
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
      // Contrôler overflow-hidden sur <html> en fonction de l'état ouvert/fermé du menu
      useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = 'auto'; // Activer le défilement
        } else {
            document.documentElement.style.overflow = ''; // Réinitialiser
        }

        // Nettoyer l'effet lors du démontage
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className='flex justify-center -mt-52 lg:mt-16 md:mt-96 mx-2'>
            <form>
                <div className="div_form1 slider top-2/3 flex flex-wrap items-center justify-between max-w-screen-xl -mt-10 lg:-mt-0 md:-mt-72 ">
                    <div className="px-6 w-full ">
                        <div className="w-full grid lg:-mt-20 md:-mt-14 md:grid-cols-4 ml-0 lg:ml-0 md:-ml-2 pb-20 lg:pb-px md:pb-px">
                            {/* Destination */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Destination</label>
                                <div className="relative w-full">
                                    <FontAwesomeIcon icon={faBed} className="HeaderIcon Icon" />
                                    <Listbox as="div" value={selectedDestination} onChange={setSelectedDestination}>
                                        {({ open }) => {
                                            setIsOpen(open); // mettre à jour l'état en fonction de l'ouverture
                                            return (
                                                <>
                                                    <Listbox.Button className="HeaderSearchInput" style={{ color: 'grey' }}>
                                                        {selectedDestination || 'Select a destination'}
                                                    </Listbox.Button>
                                                    <Listbox.Options className="absolute w-full bg-white border border-gray-300 mt-1">
                                                        {destinations.map(destination => (
                                                            <Listbox.Option key={destination} value={destination}>
                                                                {({ selected }) => (
                                                                    <div className={`flex items-center p-2 ${selected ? 'bg-blue-500 text-white' : 'text-black'}`}>
                                                                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                                                        {destination}
                                                                    </div>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </>
                                            );
                                        }}
                                    </Listbox>
                                </div>
                            </div>

                            {/* Date Range Picker */}
                            <div className="flex flex-col md:space-x-4 mx-2">
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
                                                className='date'
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Occupancy Dropdown */}
                            <div className="HeaderSearchItem">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Occupancy</label>
                                    <div className="relative w-full">
                                        <FontAwesomeIcon icon={faUser} className="HeaderIcon" />
                                        <span onClick={() => setOpenOptions(!openOptions)} className="HeaderSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                                        {openOptions && (
                                            <div className='options'>
                                                <div className='optionItem'>
                                                    <span className='optionText'>Adult</span>
                                                    <div className='optionCounter'>
                                                        <button disabled={options.adult <= 1} type="button" className='optionCounterButton' onClick={() => handleOption("adult", "d")}>-</button>
                                                        <span className='optionCounterNumber'>{options.adult}</span>
                                                        <button type="button" className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                                                    </div>
                                                </div>
                                                <div className='optionItem'> 
                                                    <span className='optionText'>Children</span>
                                                    <div className='optionCounter'>
                                                        <button disabled={options.children <= 0} type="button"className='optionCounterButton' onClick={() => handleOption("children", "d")}>-</button>
                                                        <span className='optionCounterNumber'>{options.children}</span>
                                                        <button className='optionCounterButton' type="button" onClick={() => handleOption("children", "i")}>+</button>
                                                    </div>
                                                </div>
                                                <div className='optionItem'>
                                                    <span className='optionText'>Room</span>
                                                    <div className='optionCounter'>
                                                        <button disabled={options.room <= 1} type="button" className='optionCounterButton' onClick={() => handleOption("room", "d")}>-</button>
                                                        <span className='optionCounterNumber'>{options.room}</span>
                                                        <button type="button" className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
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
    );
};

export default MoteurResult;

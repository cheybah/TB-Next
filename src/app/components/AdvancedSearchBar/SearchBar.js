import React, { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faUser, faMapPin } from '@fortawesome/free-solid-svg-icons';
import './searchBar.css'
import { DateRange } from 'react-date-range';
import { format, compareAsc } from "date-fns";
import { enUS } from 'date-fns/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const SearchBar = () => {
const [destination, setDestination] = useState(''); //destination useState
const [selectedDestination, setSelectedDestination] = useState(null);
const [openDate, setOpenDate] = useState(false); 
const [date, setDate] = useState([          //dateRange useState
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ]);
const [openOptions, setOpenOptions] = useState(false);
const [options, setOptions] =useState({
    adult:1,
    children: 0,
    room : 1
}) ;

const handleOption = (name, operation) => {
    setOptions((prev) => {
        return{
        ...prev, 
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1 ,
        };
    });
};

const destinations = [
    { name: 'Djerba', icon: faMapPin },
    { name: 'Hammamet', icon: faMapPin },
    { name: 'Tunis', icon: faMapPin },
    { name: 'Sousse', icon: faMapPin },
    { name: 'Monastir', icon: faMapPin },
];

/*
const handleAddChild = () => {
    if (children < 10) {
        setChildren(children + 1);
        setChildrenAges([...childrenAges, '']); // Add a new empty string for age input
    }
};

const handleRemoveChild = () => {
    if (children > 0) {
        setChildren(children - 1);
        setChildrenAges(childrenAges.slice(0, -1)); // Remove last age input
    }
};

const handleAgeChange = (index, age) => {
    const updatedAges = [...childrenAges];
    updatedAges[index] = age; // Update the specific child's age
    setChildrenAges(updatedAges);
}; */

const handleSearch = () => {
/*Handle the search logic here
const params = {
    destination,
    startDate,
    endDate,
    adult,
    children,
    room,
};*/
console.log('Search Parameters:');
// Here you can implement your API call or any other search logic
}; 


return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg1-white rounded-lg shadow-lg adv">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Destination */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Destination</label>
            <div className="relative w-full">
        <FontAwesomeIcon 
            icon={faBed}
            className='HeaderIcon Icon'
            />
    <Listbox value={selectedDestination} onChange={setSelectedDestination}>
    <ListboxButton className="HeaderSearchInput" style={{ color: 'grey' }}>
    {selectedDestination ? selectedDestination.name : 'Select a destination'}
        </ListboxButton>
        <ListboxOptions className="absolute w-full bg-white border border-gray-300 mt-1">
        {destinations.map((destination) => (
            <ListboxOption key={destination.name} value={destination}>
            {({ selected }) => (
                <div className={`flex items-center p-2 ${selected ? 'bg-blue-500 text-white' : 'text-black'}`}>
                <FontAwesomeIcon icon={destination.icon} className="mr-2" />
                {destination.name}
                </div>
            )}
            </ListboxOption>
        ))}
        </ListboxOptions>
    </Listbox>
    </div>
</div>

{/* Date Range Picker */}
<div className="flex flex-col md:flex-row md:space-x-4">
    <div>
        <label className="block text-sm font-medium text-gray-700">Check-In</label>
        <div className="relative w-full">
            <FontAwesomeIcon
                icon={faCalendar}
                className="HeaderIcon"
            />
            <span onClick={()=> setOpenDate(!openDate)} className="HeaderSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span> {/* Format the date using fns*/}
                    
                    {openDate && < DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    locale={enUS}
                    className='date'
                    />}
        </div>
    </div>
</div>


            {/* Occupancy Dropdown */}
        <div className="HeaderSearchItem">
            <div>
        <label className="block text-sm font-medium text-gray-700">Occupancy</label>
        <div className="relative w-full">
            <FontAwesomeIcon
                icon={faUser}
                className="HeaderIcon"
            />
        <span onClick={()=>setOpenOptions(!openOptions)} className="HeaderSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
        {openOptions &&  <div className='options'>
        <div className='optionItem'>
        <span className='optionText'>Adult</span>
        <div className='optionCounter'>
        <button disabled= {options.adult <= 1} className='optionCounterButton' onClick={()=>handleOption("adult","d")}>-</button>
        <span className='optionCounterNumber'>{options.adult}</span>
        <button className='optionCounterButton'onClick={()=>handleOption("adult","i")}>+</button>
        </div>
        </div> 
        <div className='optionItem'>
        <span className='optionText'>Children</span>
        <div className='optionCounter'>
        <button disabled= {options.children <= 0} className='optionCounterButton' onClick={()=>handleOption("children","d")}>-</button>
        <span className='optionCounterNumber'>{options.children}</span>
        <button className='optionCounterButton'onClick={()=>handleOption("children","i")}>+</button>
        </div>
        </div>
        <div className='optionItem'>
        <span className='optionText'>Room</span>
        <div className='optionCounter'>
        <button disabled= {options.room <= 1} className='optionCounterButton' onClick={()=>handleOption("room","d")}>-</button>
        <span className='optionCounterNumber'>{options.room}</span>
        <button className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
        </div>
        </div> 
        </div>}
        </div> 
        </div>
        </div>
        <div className="md:col-span-1 md:col-start-2 flex justify-center">
            <button
                onClick={handleSearch}
                className="w-36 py-2 bg-pink-700 text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
            >
                Search
            </button>
        </div>
    </div>
    </div>
);

};

export default SearchBar;
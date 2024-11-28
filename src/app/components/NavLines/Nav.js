"use client";

import Header from "../Header/Header";
import React from 'react';

import DetailHotel from '../DetailHotel/DetailHotel';
// Fetch data from the API
const HotelDetailsContent =  ({ listsHotels = [], regionsData = [], hotelsTripadData=[]}) => {
    const listHotels=listsHotels;
    const listregionsData = regionsData; 
    const hotelTripadData=hotelsTripadData;
    // Log to check the final value of listHotels

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <DetailHotel listsHotels={listHotels} regionsData={listregionsData} hotelsTripadData={hotelTripadData}/>
        </div>

    );
};

const Nav = ({ listsHotels = [], regionsData = [], hotelsTripadData=[] }) => {
  
    const listHotels=listsHotels;
    const listregionsData = regionsData;  // Fetch the data using ville
    

    return (
        <nav>
            <HotelDetailsContent listsHotels={listHotels} regionsData={listregionsData} hotelsTripadData={hotelsTripadData} />
        </nav>
    );
};

export default Nav;



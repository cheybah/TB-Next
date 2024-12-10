"use client";
import { useEffect, useState } from "react";
import Nav from "../../components/NavLines/Nav";
import { fetchHotelData, fetchTripadHotelData, fetchRegionsData } from "../../redux/slices/dataSlice";
import { store } from "../../redux/store";
import Cookies from 'js-cookie'; // Import js-cookie


function HotelsDetailsClient({ listsHotels = [], regionsData = [], hotelTripadData = [] }) {
    return (
        <div >
                <Nav
                    listsHotels={listsHotels}
                    regionsData={regionsData}
                    hotelsTripadData={hotelTripadData}
                />
            
        </div>
    );
}

export default HotelsDetailsClient;

"use client";
import { useEffect, useState } from "react";
import Nav from "../../components/NavLines/Nav";
import { fetchHotelData, fetchTripadHotelData, fetchRegionsData } from "../../redux/slices/dataSlice";
import { store } from "../../redux/store";
import Cookies from 'js-cookie'; // Import js-cookie


function HotelsDetailsClient({ listsHotels = [], regionsData = [], hotelsTripadData = [] }) {
    return (
        <div class="test">
                <Nav
                    listsHotels={listsHotels}
                    regionsData={regionsData}
                    hotelTripadData={hotelsTripadData}
                />
            
        </div>
    );
}

export default HotelsDetailsClient;

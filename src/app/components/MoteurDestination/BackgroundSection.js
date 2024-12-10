"use client";
import { fetchRegionsData } from '../../redux/slices/dataSlice';
import { store } from '../../redux/store';
import React from 'react';
import SearchBar from './SearchBar';
// Fetch data from the API
export async function fetchData() {
    const dispatch = store.dispatch;
    try {
        const regionsData = await dispatch(fetchRegionsData());
        return {
            regionsData: regionsData.payload || [],
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { regionsData: [] };
    }
}
const BackgroundSection = async({ region,customSpanContent }) => {
    const { regionsData } = await fetchData(); 
    return (
    <section className="w-full bg-no-repeat bg-cover bg-[url('/image-destination-min.jpg')] bg-blend-multiply lg:h-[328px] sm:h-[500px]" alt="Tunisiebooking background" >
        <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56 ">
            <h1 className="absolute  hidden sm:block titre  flex top-20 sm:top-28 lg:top-24 md:top-20 text-white   md:text-left text-[24px] sm:text-[38px] lg:text-[48px] font-semibold leading-[32px] sm:leading-[59px] opacity-100 w-[80%] sm:w-3/4 sm:px-0 md:top-20 md:w-4/5"
                style={{ top:"8rem" ,textShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)', fontFamily: '-apple-system, Roboto, Segoe UI, Helvetica, Arial, sans-serif'}}>
                {customSpanContent || `Hôtels ${region}`}

            </h1>

            </span>

            <SearchBar region={region} listRegions={regionsData} />
        </div>
    </section>
    );
};  
export default BackgroundSection
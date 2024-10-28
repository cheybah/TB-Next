
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from "next/navigation";

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faUser, faMapPin, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { DateRange } from 'react-date-range';
import { format, compareAsc } from "date-fns";
import { enUS } from 'date-fns/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './SearchBar.css'
const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [destinations, setDestinations] = useState([]);
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
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };



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


    useEffect(() => {
        axios.get('http://api.resabookings.com/api/api/api_hotel/api_destination_test.php')
            .then(res => {
                console.log('API response:', res); // Log the entire response for debugging
                if (res.data && res.data.regions) {
                    const regions = res.data.regions;
                    // Check if regions are being fetched
                    console.log('Regions:', regions);

                    // Get the names of top destinations from the array
                    const destinations = regions.map(dest => dest.libelle_region);
                    setDestinations(destinations);
                    console.log('Destinations:', destinations); // Log the destinations array
                } else {
                    console.error('Unexpected API response format:', res.data);
                }
            })
            .catch(err => {
                console.error('Error fetching destinations:', err);
            });
    }, []);


    const router = useRouter(); //initialisation
    const handleNavigate = (destination) => {
        const query = new URLSearchParams(destination).toString();
        router.push(`/HotelsResult?${query}`);
    };


    const resNavigate = (destination) => {
        const query = new URLSearchParams(destination).toString();
        router.push(`/HotelsResult?${query}`);
    };

    return (

        <div className='flex justify-center -mt-52 lg:mt-16 md:mt-96 mx-2'>
            <form>
                <div className="div_form slider top-2/3    flex flex-wrap items-center justify-between max-w-screen-xl -mt-10 lg:-mt-44 md:-mt-72 ">
                    <div className=" flex  w-full grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 -mt-8 lg:-mt-10 md:-mt-10 v148_1172">
                        <div style={{ marginLeft: "15%" }} className=" w-15 lg:w-44 md:w-44  custom-border-hotel justify-self-center relative flex flex-col items-center md:flex-row md:items-center md:space-x-2  ">
                            <div className="flex justify-center md:justify-start">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.125 9.9375C5.125 10.3172 4.8172 10.625 4.4375 10.625V10.625C4.0578 10.625 3.75 10.3172 3.75 9.9375V9.9375C3.75 9.5578 4.0578 9.25 4.4375 9.25V9.25C4.8172 9.25 5.125 9.5578 5.125 9.9375V9.9375ZM5.125 18.1875C5.125 17.8078 4.8172 17.5 4.4375 17.5V17.5C4.0578 17.5 3.75 17.8078 3.75 18.1875V18.1875C3.75 18.5672 4.0578 18.875 4.4375 18.875V18.875C4.8172 18.875 5.125 18.5672 5.125 18.1875V18.1875ZM5.125 14.0625C5.125 13.6828 4.8172 13.375 4.4375 13.375V13.375C4.0578 13.375 3.75 13.6828 3.75 14.0625V14.0625C3.75 14.4422 4.0578 14.75 4.4375 14.75V14.75C4.8172 14.75 5.125 14.4422 5.125 14.0625V14.0625ZM14.75 5.8125C14.75 5.4328 14.4422 5.125 14.0625 5.125H9.9375C9.5578 5.125 9.25 5.4328 9.25 5.8125V5.8125C9.25 6.1922 9.5578 6.5 9.9375 6.5H14.0625C14.4422 6.5 14.75 6.1922 14.75 5.8125V5.8125ZM20.25 18.1875C20.25 17.8078 19.9422 17.5 19.5625 17.5V17.5C19.1828 17.5 18.875 17.8078 18.875 18.1875V18.1875C18.875 18.5672 19.1828 18.875 19.5625 18.875V18.875C19.9422 18.875 20.25 18.5672 20.25 18.1875V18.1875ZM22 5.125C22.5523 5.125 23 5.57272 23 6.125V22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22V6.125C1 5.57272 1.44772 5.125 2 5.125H5.5C6.05228 5.125 6.5 4.67728 6.5 4.125V2C6.5 1.44772 6.94772 1 7.5 1H16.5C17.0523 1 17.5 1.44772 17.5 2V4.125C17.5 4.67728 17.9477 5.125 18.5 5.125H22ZM6.5 7.5C6.5 6.94771 6.05228 6.5 5.5 6.5H3.375C2.82272 6.5 2.375 6.94772 2.375 7.5V20.625C2.375 21.1773 2.82272 21.625 3.375 21.625H5.5C6.05228 21.625 6.5 21.1773 6.5 20.625V7.5ZM13.375 19.875C13.375 19.3227 12.9273 18.875 12.375 18.875H11.625C11.0727 18.875 10.625 19.3227 10.625 19.875V20.625C10.625 21.1773 11.0727 21.625 11.625 21.625H12.375C12.9273 21.625 13.375 21.1773 13.375 20.625V19.875ZM16.125 3.375C16.125 2.82272 15.6773 2.375 15.125 2.375H8.875C8.32272 2.375 7.875 2.82272 7.875 3.375V20.9375C7.875 21.3172 8.1828 21.625 8.5625 21.625V21.625C8.9422 21.625 9.25 21.3172 9.25 20.9375V18.5C9.25 17.9477 9.69772 17.5 10.25 17.5H13.75C14.3023 17.5 14.75 17.9477 14.75 18.5V20.9375C14.75 21.3172 15.0578 21.625 15.4375 21.625V21.625C15.8172 21.625 16.125 21.3172 16.125 20.9375V3.375ZM21.625 7.5C21.625 6.94771 21.1773 6.5 20.625 6.5H18.5C17.9477 6.5 17.5 6.94772 17.5 7.5V20.625C17.5 21.1773 17.9477 21.625 18.5 21.625H20.625C21.1773 21.625 21.625 21.1773 21.625 20.625V7.5ZM20.25 14.0625C20.25 13.6828 19.9422 13.375 19.5625 13.375V13.375C19.1828 13.375 18.875 13.6828 18.875 14.0625V14.0625C18.875 14.4422 19.1828 14.75 19.5625 14.75V14.75C19.9422 14.75 20.25 14.4422 20.25 14.0625V14.0625ZM20.25 9.9375C20.25 9.5578 19.9422 9.25 19.5625 9.25V9.25C19.1828 9.25 18.875 9.5578 18.875 9.9375V9.9375C18.875 10.3172 19.1828 10.625 19.5625 10.625V10.625C19.9422 10.625 20.25 10.3172 20.25 9.9375V9.9375ZM14.75 14.0625C14.75 13.6828 14.4422 13.375 14.0625 13.375H9.9375C9.5578 13.375 9.25 13.6828 9.25 14.0625V14.0625C9.25 14.4422 9.5578 14.75 9.9375 14.75H14.0625C14.4422 14.75 14.75 14.4422 14.75 14.0625V14.0625ZM14.75 9.9375C14.75 9.5578 14.4422 9.25 14.0625 9.25H9.9375C9.5578 9.25 9.25 9.5578 9.25 9.9375V9.9375C9.25 10.3172 9.5578 10.625 9.9375 10.625H14.0625C14.4422 10.625 14.75 10.3172 14.75 9.9375V9.9375Z" fill="#FF0097" stroke="#FF0097" strokeWidth="0.3" />
                                </svg>
                            </div>
                            <span className="text-xl font-semibold text-custom-pink font-normal lg:font-bold md:font-bold text-center md:text-left hidden sm:block text-[17px]">Hôtels Tunisie</span>
                            <span className="text-xl font-normal lg:font-semibold md:font-semibold text-custom-pink text-center md:text-left lg:hidden md:hidden text-[15px]">Hôtels</span>
                        </div>
                        <div className=" md:ml-4 lg:w-20 md:w-20  custom-border justify-self-center  relative flex flex-col items-center md:flex-row md:items-center md:space-x-2">
                            <div className="flex justify-center md:justify-start">
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.39583 4.84995L11.5 7.72939L20.6042 4.84995L11.5 1.97051L2.39583 4.84995ZM11.1207 0.0576292C11.3682 -0.0192097 11.6358 -0.0192097 11.8833 0.0576292L22.1056 3.29295C22.6366 3.45876 23 3.96024 23 4.52642V5.17348V6.03084L11.6917 9.60992C11.5679 9.65036 11.4361 9.65036 11.3123 9.60992L0 6.03084V5.17348V4.52642C0 3.96024 0.363368 3.45876 0.898437 3.29295L11.1207 0.0576292ZM12.075 10.8474L23 7.38968V9.27021L20.8917 9.9375C20.5563 10.0426 20.3686 10.4066 20.4724 10.7463C20.5762 11.086 20.9356 11.2761 21.271 11.171L23 10.625V17.1145C23 17.6807 22.6366 18.1821 22.1016 18.348L11.8793 21.5833C11.6318 21.6601 11.3642 21.6601 11.1167 21.5833L0.894444 18.348C0.363368 18.1821 0 17.6807 0 17.1145V10.625L1.725 11.171C2.06042 11.2761 2.41979 11.086 2.52361 10.7463C2.62743 10.4066 2.43976 10.0426 2.10434 9.9375L0 9.26617V7.38968L10.929 10.8474C11.3003 10.9647 11.6997 10.9647 12.071 10.8474H12.075ZM4.66788 10.7423C4.33247 10.6371 3.97309 10.8272 3.86927 11.1669C3.76545 11.5066 3.95313 11.8706 4.28854 11.9757L6.8441 12.7846C7.17951 12.8897 7.53889 12.6997 7.64271 12.3599C7.74653 12.0202 7.55885 11.6563 7.22344 11.5511L4.66788 10.7423ZM18.7234 11.9757C19.0589 11.8706 19.2465 11.5066 19.1427 11.1669C19.0389 10.8272 18.6795 10.6371 18.3441 10.7423L15.7885 11.5511C15.4531 11.6563 15.2655 12.0202 15.3693 12.3599C15.4731 12.6997 15.8325 12.8897 16.1679 12.7846L18.7234 11.9757ZM9.77899 12.3599C9.44358 12.2548 9.0842 12.4449 8.98038 12.7846C8.87656 13.1243 9.06424 13.4883 9.39965 13.5934L10.937 14.0787C11.3083 14.196 11.7076 14.196 12.079 14.0787L13.6163 13.5934C13.9517 13.4883 14.1394 13.1243 14.0356 12.7846C13.9318 12.4449 13.5724 12.2548 13.237 12.3599L11.6997 12.8452C11.5759 12.8857 11.4441 12.8857 11.3203 12.8452L9.78299 12.3599H9.77899Z" fill="#262626" />
                                </svg>
                            </div>
                            <span className="text-xl  text-custom-gray font-normal lg:font-bold md:font-bold text-center md:text-left text-[15px] lg:text-[17px] md:text-[17px]">Omra</span>
                        </div>
                        <div className="ml-16  md:ml-14 lg:ml-24 w-28 lg:w-60 md:w-52 custom-border justify-self-center  relative flex flex-col items-center md:flex-row md:items-center md:space-x-2">
                            <div className="hidden sm:block flex justify-center md:justify-start">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1489 1024">
                                    <title></title>
                                    <g id="icomoon-ignore">
                                    </g>
                                    <path fill="#000" d="M477.975 605.37l-30.069-6.982 23.832 79.825-20.48 12.753c6.656 40.774 39.704 47.337 39.704 47.337l129.024 29.929-65.071 70.982 56.087 13.033 98.63-63.162 102.726 23.831c0 0 45.335 11.171 51.712-16.431 7.913-33.885-49.105-57.716-49.105-57.716l-88.902-20.62-60.695-100.073-56.087-13.079 27.136 92.346-112.035-25.972-46.406-66.001z"></path>
                                    <path fill="#000" d="M1077.993 123.345c192.512 165.050 232.308 441.95 105.798 652.195 134.144-5.446 222.673-35.607 236.172-81.175 9.495-32.163-18.572-77.777-85.085-128.372-3.356-2.374-6.158-5.441-8.22-8.997-2.062-3.551-3.333-7.508-3.733-11.594-0.396-4.091 0.093-8.215 1.429-12.102 1.341-3.882 3.5-7.433 6.335-10.408 6.144-6.274 14.355-10.11 23.11-10.794s17.459 1.825 24.506 7.070c84.48 64.233 124.975 130.048 106.915 191.023-25.181 85.132-156.719 127.767-345.553 127.628l-6.284 7.447c-184.041 214.668-507.252 239.476-721.921 55.436-88.004-75.208-147.789-178.134-169.519-291.84-166.819-83.177-262.098-180.736-238.359-265.915 16.57-59.439 85.225-95.744 189.44-109.94 7.502-1.146 15.153 0.7 21.308 5.14s10.32 11.118 11.6 18.599c0.487 3.706 0.232 7.472-0.75 11.078s-2.674 6.981-4.974 9.927c-2.301 2.946-5.165 5.405-8.425 7.232s-6.852 2.988-10.566 3.414c-83.549 11.404-132.561 37.329-141.405 69.027-12.94 46.499 52.969 116.643 173.708 183.11-7.53-131.904 36.404-261.585 122.554-361.752 15.686-18.385 32.675-35.561 50.735-51.479l13.777-11.683c92.766-76.055 206.105-114.688 319.862-115.619h0.419c123.592-0.991 243.358 42.828 337.129 123.346zM1098.938 775.773c48.282-64.605 77.847-141.261 85.457-221.556h0.047c-25.507 0.326-53.201-6.842-68.608-20.154-15.825-13.498-27.276-40.262-30.72-65.815l-0.791-6.982-5.492-71.866c-1.178-9.651-4.552-18.903-9.868-27.043l-0.512-0.605 2.793 36.492c1.317 17.464-3.998 34.783-14.885 48.501s-26.55 22.825-43.855 25.506l-5.167 0.559-47.802 3.724c-23.971 1.815-56.041-5.213-78.615-16.896l-6.47-3.584-10.892-6.656c-0.633-0.379-1.285-0.721-1.955-1.024-1.396-0.652-2.327-1.071-1.769-2.234l0.791-1.164-3.817 4.049c-11.106 10.725-25.805 16.929-41.235 17.404-15.43 0.47-30.483-4.82-42.221-14.844-18.153-15.593-30.72-45.242-32.442-72.285l-0.233-6.703 0.652-180.876c0.047-7.82-5.585-21.132-11.543-28.253l-2.56-2.607-9.495-8.145c-19.875-16.989-36.212-47.523-40.308-74.38l-0.326-2.793c-45.996 7.047-90.582 21.343-132.096 42.356l-4.236 71.401c-1.443 24.436-13.312 55.622-28.719 76.335l-4.282 5.399-5.353 6.191c-1.024 1.21-1.303 4.282-0.791 6.423l0.745 1.722 47.151 56.46c18.432 22.063 29.417 57.204 25.041 83.689-5.399 32.070-35.375 55.39-68.422 57.717l-5.585 0.186-67.027-0.186c-27.183-0.093-59.671-14.336-79.267-34.258l-4.282-4.655-33.699-39.843c-14.149 56.653-16.965 115.545-8.285 173.289 14.988 6.842 30.534 13.545 46.639 20.154 14.801 6.051 21.69 22.481 15.36 36.678-3.221 6.917-8.993 12.321-16.107 15.076-7.114 2.76-15.018 2.662-22.061-0.275-2.657-1.094-5.31-2.197-7.959-3.305 24.821 78.192 71.030 147.875 133.399 201.169 59.719 51.395 132.158 85.797 209.735 99.607l29.882-48.128c2.984-4.836 7.107-8.862 12.009-11.729l3.77-1.862 42.496-18.292 25.088-24.157c5.362-5.176 12.251-8.49 19.642-9.449l4.468-0.279h91.741c3.165 0 6.33 0.465 9.356 1.257l4.468 1.629 87.924 38.167c17.115-11.985 33.354-25.176 48.593-39.471-28.733-1.936-57.414-4.575-86.016-7.913-18.525-2.095-31.604-17.408-29.231-34.164 2.327-16.756 19.27-28.625 37.795-26.484 45.801 5.306 89.367 8.518 130.001 9.775h-0.047z"></path>
                                </svg>
                            </div>
                            <div className=" lg:hidden md:hidden flex justify-center md:justify-start">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 1489 1024">
                                    <title></title>
                                    <g id="icomoon-ignore">
                                    </g>
                                    <path fill="#000" d="M477.975 605.37l-30.069-6.982 23.832 79.825-20.48 12.753c6.656 40.774 39.704 47.337 39.704 47.337l129.024 29.929-65.071 70.982 56.087 13.033 98.63-63.162 102.726 23.831c0 0 45.335 11.171 51.712-16.431 7.913-33.885-49.105-57.716-49.105-57.716l-88.902-20.62-60.695-100.073-56.087-13.079 27.136 92.346-112.035-25.972-46.406-66.001z"></path>
                                    <path fill="#000" d="M1077.993 123.345c192.512 165.050 232.308 441.95 105.798 652.195 134.144-5.446 222.673-35.607 236.172-81.175 9.495-32.163-18.572-77.777-85.085-128.372-3.356-2.374-6.158-5.441-8.22-8.997-2.062-3.551-3.333-7.508-3.733-11.594-0.396-4.091 0.093-8.215 1.429-12.102 1.341-3.882 3.5-7.433 6.335-10.408 6.144-6.274 14.355-10.11 23.11-10.794s17.459 1.825 24.506 7.070c84.48 64.233 124.975 130.048 106.915 191.023-25.181 85.132-156.719 127.767-345.553 127.628l-6.284 7.447c-184.041 214.668-507.252 239.476-721.921 55.436-88.004-75.208-147.789-178.134-169.519-291.84-166.819-83.177-262.098-180.736-238.359-265.915 16.57-59.439 85.225-95.744 189.44-109.94 7.502-1.146 15.153 0.7 21.308 5.14s10.32 11.118 11.6 18.599c0.487 3.706 0.232 7.472-0.75 11.078s-2.674 6.981-4.974 9.927c-2.301 2.946-5.165 5.405-8.425 7.232s-6.852 2.988-10.566 3.414c-83.549 11.404-132.561 37.329-141.405 69.027-12.94 46.499 52.969 116.643 173.708 183.11-7.53-131.904 36.404-261.585 122.554-361.752 15.686-18.385 32.675-35.561 50.735-51.479l13.777-11.683c92.766-76.055 206.105-114.688 319.862-115.619h0.419c123.592-0.991 243.358 42.828 337.129 123.346zM1098.938 775.773c48.282-64.605 77.847-141.261 85.457-221.556h0.047c-25.507 0.326-53.201-6.842-68.608-20.154-15.825-13.498-27.276-40.262-30.72-65.815l-0.791-6.982-5.492-71.866c-1.178-9.651-4.552-18.903-9.868-27.043l-0.512-0.605 2.793 36.492c1.317 17.464-3.998 34.783-14.885 48.501s-26.55 22.825-43.855 25.506l-5.167 0.559-47.802 3.724c-23.971 1.815-56.041-5.213-78.615-16.896l-6.47-3.584-10.892-6.656c-0.633-0.379-1.285-0.721-1.955-1.024-1.396-0.652-2.327-1.071-1.769-2.234l0.791-1.164-3.817 4.049c-11.106 10.725-25.805 16.929-41.235 17.404-15.43 0.47-30.483-4.82-42.221-14.844-18.153-15.593-30.72-45.242-32.442-72.285l-0.233-6.703 0.652-180.876c0.047-7.82-5.585-21.132-11.543-28.253l-2.56-2.607-9.495-8.145c-19.875-16.989-36.212-47.523-40.308-74.38l-0.326-2.793c-45.996 7.047-90.582 21.343-132.096 42.356l-4.236 71.401c-1.443 24.436-13.312 55.622-28.719 76.335l-4.282 5.399-5.353 6.191c-1.024 1.21-1.303 4.282-0.791 6.423l0.745 1.722 47.151 56.46c18.432 22.063 29.417 57.204 25.041 83.689-5.399 32.070-35.375 55.39-68.422 57.717l-5.585 0.186-67.027-0.186c-27.183-0.093-59.671-14.336-79.267-34.258l-4.282-4.655-33.699-39.843c-14.149 56.653-16.965 115.545-8.285 173.289 14.988 6.842 30.534 13.545 46.639 20.154 14.801 6.051 21.69 22.481 15.36 36.678-3.221 6.917-8.993 12.321-16.107 15.076-7.114 2.76-15.018 2.662-22.061-0.275-2.657-1.094-5.31-2.197-7.959-3.305 24.821 78.192 71.030 147.875 133.399 201.169 59.719 51.395 132.158 85.797 209.735 99.607l29.882-48.128c2.984-4.836 7.107-8.862 12.009-11.729l3.77-1.862 42.496-18.292 25.088-24.157c5.362-5.176 12.251-8.49 19.642-9.449l4.468-0.279h91.741c3.165 0 6.33 0.465 9.356 1.257l4.468 1.629 87.924 38.167c17.115-11.985 33.354-25.176 48.593-39.471-28.733-1.936-57.414-4.575-86.016-7.913-18.525-2.095-31.604-17.408-29.231-34.164 2.327-16.756 19.27-28.625 37.795-26.484 45.801 5.306 89.367 8.518 130.001 9.775h-0.047z"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-normal lg:font-bold md:font-bold text-custom-gray  text-center md:text-left text-[15px] lg:text-[17px] md:text-[17px]">Voyage organisé</span>
                        </div>
                        <div className=" ml-32 md:ml-16   lg:w-30 lg:w-24  custom-border justify-self-center  relative flex flex-col items-center md:flex-row md:items-center md:space-x-2">
                            <div className="flex justify-center md:justify-start">
                                <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1 33.6667C17.1 33.3115 17.1767 32.995 17.2958 32.7708C17.4172 32.5423 17.5678 32.4334 17.7083 32.4334H33.2917C33.4322 32.4334 33.5828 32.5423 33.7042 32.7708C33.8233 32.995 33.9 33.3115 33.9 33.6667C33.9 34.0219 33.8233 34.3385 33.7042 34.5626C33.5828 34.7912 33.4322 34.9 33.2917 34.9H17.7083C17.5678 34.9 17.4172 34.7912 17.2958 34.5626C17.1767 34.3385 17.1 34.0219 17.1 33.6667Z" fill="#262626" stroke="white" strokeWidth="0.2" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.1544 20.1459C14.0123 23.953 14.7732 24.2398 14.8976 24.2588C15.415 24.2803 19.983 23.3689 38.6966 18.8976C38.8645 18.7151 39.2644 18.0125 39.2522 17.5335C39.25 17.4724 39.2387 17.3631 39.1844 17.3185C38.6585 16.9016 37.5188 16.6365 37.26 16.6392L37.2573 16.6399L37.2509 16.6401L37.2417 16.6422L37.2558 16.6409L29.5576 18.2946C29.3748 18.3239 29.1495 18.3574 28.9153 18.2398L21.7039 15.4563L20.4765 15.8082L24.6039 18.3623C24.9238 18.5433 25.1139 18.9078 25.0604 19.2587C25.0083 19.6005 24.7812 19.871 24.4366 20.0021L16.9769 22.2697C16.5343 22.3999 16.0464 22.3606 15.6379 22.1592L11.2328 19.9485C11.1483 19.9602 11.1157 19.9903 11.0952 20.041L11.1544 20.1459ZM36.4899 14.1748C37.7182 13.8511 39.9081 14.5674 40.9593 15.4048C41.8358 16.1021 42.1774 17.2347 41.8989 18.5101C41.5959 19.8964 40.6449 21.0564 39.588 21.3338C21.2383 25.7225 15.6165 26.941 14.5142 26.7729C12.8794 26.5236 11.417 24.9184 8.95017 21.6351C8.35034 20.952 8.16345 19.9903 8.48179 19.1466C8.75942 18.4113 9.36157 17.8353 10.1362 17.5641C10.8116 17.3092 11.5708 17.3315 12.3171 17.63L12.4921 17.7094L16.487 19.7136L20.1096 18.6149L18.58 17.6671C18.0754 17.3785 17.6873 16.9264 17.5026 16.4013C17.3338 15.9218 17.3712 15.5346 17.4099 15.3476C17.5263 14.576 18.0272 13.9542 18.816 13.615L19.0775 13.5203L20.815 13.0205C21.4659 12.776 22.2304 12.8306 22.882 13.1744L29.4094 15.6923L36.4899 14.1748Z" fill="#262626" />
                                </svg>
                            </div>

                            <span className="text-xl font-normal lg:font-bold md:font-bold text-custom-gray  text-center md:text-left text-[15px] lg:text-[17px] md:text-[17px]">Vols</span>
                        </div>
                        <div className=" md:w-30 lg:w-30  custom-border justify-self-center  relative flex flex-col items-center md:flex-row md:items-center md:space-x-2  ">
                            <div className="flex justify-center md:justify-start">
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5402 16.8049C19.9959 17.3707 19.1002 17.3707 18.5559 16.8049C18.0115 16.2392 18.012 15.3083 18.5559 14.7425C19.1002 14.1768 19.9959 14.1768 20.5402 14.7425C21.0846 15.3083 21.0846 16.2392 20.5402 16.8049ZM3.30016 5.52254C2.75581 4.95678 2.75581 4.02542 3.30016 3.46016C3.84452 2.89441 4.74017 2.89441 5.28405 3.46016C5.8284 4.02542 5.8284 4.95678 5.28405 5.52254C4.74065 6.0878 3.84452 6.0878 3.30016 5.52254ZM22.589 12.6138C20.9244 10.8843 18.2041 10.8843 16.5076 12.6138C14.8436 14.3432 14.8436 17.1705 16.5076 18.9337L18.1769 20.6686H7.91144C6.61204 20.6686 5.59484 19.6114 5.59484 18.2609C5.59484 16.9109 6.61204 15.8532 7.91144 15.8532H10.6237C12.3373 15.8532 13.7315 14.4042 13.7315 12.6237C13.7315 10.8422 12.3373 9.39364 10.6237 9.39364H5.65585L7.33276 7.6508C8.99681 5.92134 8.99681 3.09406 7.33276 1.3314C5.66824 -0.398554 2.94791 -0.398554 1.25145 1.3314C-0.412593 3.06087 -0.412593 5.88815 1.25145 7.6508L4.06807 10.5787C4.15292 10.6663 4.26494 10.6906 4.36933 10.6619C4.4189 10.6753 4.46943 10.6852 4.52138 10.6852H10.6237C11.6695 10.6852 12.4884 11.5363 12.4884 12.6237C12.4884 13.7101 11.6695 14.5612 10.6237 14.5612H7.91144C5.94852 14.5612 4.35169 16.2203 4.35169 18.2609C4.35169 20.3015 5.94852 21.9606 7.91144 21.9606H19.4382C19.4596 21.9606 19.4801 21.9537 19.5016 21.9512C19.5969 21.9665 19.6956 21.9403 19.7723 21.861L19.8 21.8318C19.8524 21.7927 19.8967 21.7451 19.9354 21.6911L22.589 18.9337C24.253 17.2042 24.253 14.3769 22.589 12.6138Z" fill="#262626" />
                                </svg>
                            </div>
                            <span className="text-xl font-normal lg:font-bold md:font-bold text-custom-gray  text-center md:text-left text-[15px] lg:text-[17px] md:text-[17px]">Circuits</span>
                        </div>
                    </div>

                    {/*input fields*/}
                    <div className="px-6 w-full  ">

                        <div className="w-full grid  lg:-mt-20 md:-mt-14 md:grid-cols-3 ml-0 lg:ml-0 md:-ml-2 pb-20 lg:pb-px md:pb-px">
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
                                            {selectedDestination ? selectedDestination : 'Select a destination'}
                                        </ListboxButton>
                                        <ListboxOptions className="absolute w-full bg-white border border-gray-300 mt-1">
                                            {destinations.map((destination) => (
                                                <ListboxOption key={destination} value={destination}>
                                                    {({ selected }) => (
                                                        <div className={`flex items-center p-2 ${selected ? 'bg-blue-500 text-white' : 'text-black'}`}>
                                                            {destination}
                                                        </div>
                                                    )}
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </Listbox>
                                </div>
                            </div>
                            {/* Date Range Picker */}
                            <div className="flex flex-col  md:space-x-4 mx-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Check-In</label>
                                    <div className="relative w-full">
                                        <FontAwesomeIcon
                                            icon={faCalendar}
                                            className="HeaderIcon"
                                        />
                                        <span onClick={() => setOpenDate(!openDate)} className="HeaderSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span> {/* Format the date using fns*/}

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
                                        <span onClick={() => setOpenOptions(!openOptions)} className="HeaderSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                                        {openOptions && <div className='options'>
                                            <div className='optionItem'>
                                                <span className='optionText'>Adult</span>
                                                <div className='optionCounter'>
                                                    <button type="button" disabled={options.adult <= 1} className='optionCounterButton' onClick={() => handleOption("adult", "d")}>-</button>
                                                    <span className='optionCounterNumber'>{options.adult}</span>
                                                    <button type="button" className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                                                </div>
                                            </div>
                                            <div className='optionItem'>
                                                <span className='optionText'>Children</span>
                                                <div className='optionCounter'>
                                                    <button type="button" disabled={options.children <= 0} className='optionCounterButton' onClick={() => handleOption("children", "d")}>-</button>
                                                    <span className='optionCounterNumber'>{options.children}</span>
                                                    <button type="button" className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
                                                </div>
                                            </div>
                                            <div className='optionItem'>
                                                <span className='optionText'>Room</span>
                                                <div className='optionCounter'>
                                                    <button type="button" disabled={options.room <= 1} className='optionCounterButton' onClick={() => handleOption("room", "d")}>-</button>
                                                    <span className='optionCounterNumber'>{options.room}</span>
                                                    <button type="button" className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="relative z-10 top-40 lg:top-6 md:-top-6 md:col-span-1 md:col-start-2 flex justify-center">
                    <Link href={`/HotelsResult?ville=${selectedDestination}`}>
                        <button
                            className="w-72 lg:w-72 md:w-36 py-2 bg-gradient-to-r from-[#FF5555] to-[#F40091] text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
                            disabled={!selectedDestination} // Disable the button if no destination is selected
                        >
                            Rechercher
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default SearchBar
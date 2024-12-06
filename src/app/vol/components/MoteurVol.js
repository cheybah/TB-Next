"use client";

import React, { useState } from "react";
import { Radio } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";



export default function MoteurVol() {

    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();


    const [passengers, setPassengers] = useState({
        adult: 1,
        child: 0,
        baby: 0,
    });

    const handleIncrement = (type) => {
        setPassengers((prev) => ({
            ...prev,
            [type]: prev[type] + 1,
        }));
    };

    const handleDecrement = (type) => {
        setPassengers((prev) => ({
            ...prev,
            [type]: Math.max(type === "adult" ? 1 : 0, prev[type] - 1),
        }));
    };

    const totalPassengers =
        passengers.adult + passengers.child + passengers.baby;


    const [isRoundTrip, setIsRoundTrip] = useState(true);

    const handleRadioChange = (e) => {
        setIsRoundTrip(e.target.value === "round-trip");
    };

    return (
        <>
            <main className=" p-6 lg:px-[30rem] flex flex-col items-center ">
                {/*tabs header*/}
                <div className="dark:border-gray-700 w-full mb-0">
                    <ul className="flex -mb-px w-full" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li className="flex-1 border border-white bg-white mr-1" role="presentation">
                            <button
                                className="w-full flex items-center justify-center gap-2 text-[#003581] hover:text-[#112f5c] hover:border-gray-300 py-4 text-lg font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                    />
                                </svg>
                                Hôtels Tunisie
                            </button>
                        </li>

                        <li className="flex-1 border border-white bg-white mr-1" role="presentation">
                            <button
                                className="w-full flex items-center justify-center gap-2 text-[#003581] hover:text-[#112f5c] hover:border-gray-300 py-4 text-lg font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                <img src="/globe.png" alt="Hotel Icon" className="w-7 h-7" />
                                Voyage Organisé
                            </button>
                        </li>
                        <li className="flex-1 border border-white bg-white mr-1" role="presentation">
                            <button
                                className="w-full flex items-center justify-center gap-2 text-[#003581] hover:text-[#112f5c] hover:border-gray-300 py-4 text-lg font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                                </svg>
                                Thématique
                            </button>
                        </li>
                        <li className="flex-1 border border-[#003581] bg-[#003581]" role="presentation">
                            <button
                                className="w-full flex items-center justify-center gap-2 text-white hover:text-white hover:border-gray-300 py-4 text-lg font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"

                            >
                                <img src="/Orion_plane-departure.svg" alt="Hotel Icon" className="w-7 h-7" />
                                Billet d'Avion
                            </button>
                        </li>
                    </ul>
                </div>
                {/*tabs body (just the moteur ;) )*/}
                <div className="max-w-sm w-full lg:max-w-full lg:flex border-2 border-[#003581] rounded-b-md bg-[#003581] text-white p-6">
                    {/*Left Section*/}
                    <div className="w-[45%] flex flex-col gap-4 ">
                        <div className="flex gap-6">
                            <Radio
                                name="type"
                                value="round-trip"
                                label="Aller/Retour"
                                defaultChecked
                                className="text-white checked:bg-black"
                                labelProps={{ className: "text-white font-bold" }}
                                color="yellow"
                                onChange={handleRadioChange}

                            />
                            <Radio
                                name="type"
                                value="one-way"
                                label="Aller/Simple"
                                className="text-white checked:bg-black"
                                labelProps={{ className: "text-white font-bold" }}
                                color="yellow"
                                onChange={handleRadioChange}
                            />
                        </div>
                        <div className="w-full relative ">
                            <Input
                                label="Départ de"
                                color="white"
                                className="pr-12"
                                containerProps={{
                                    className: "relative",
                                }}
                            />
                            <div className="absolute top-0 right-0 h-full w-12 bg-yellow-500 flex items-center justify-center rounded-tr-md rounded-br-md">
                                <img
                                    src="/Orion_aircraft-climb.svg"
                                    alt="Icon"
                                    className="w-7 h-7"
                                />
                            </div>
                        </div>
                        {/* Smaller inputs */}
                        <div className="flex gap-4 w-full">
                            {/* First small input */}
                            <div className="relative" style={{ width: "calc(50% - 0.5rem)" }}>
                                <Popover placement="bottom">
                                    <PopoverHandler>
                                        <div className="relative">
                                            <Input
                                                label="Aller"
                                                color="white"
                                                className="pr-12"
                                                containerProps={{
                                                    className: "relative min-w-[auto]",
                                                }}
                                                onChange={() => null}
                                                value={startDate ? format(startDate, "PPP") : ""}
                                            />
                                            <div className="absolute top-0 right-0 h-full w-12 bg-yellow-500 flex items-center justify-center rounded-tr-md rounded-br-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003581" className="bi bi-calendar-week" viewBox="0 0 16 16">
                                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </PopoverHandler>
                                    <PopoverContent>
                                        <DayPicker
                                            mode="single"
                                            selected={startDate}
                                            onSelect={setStartDate}
                                            showOutsideDays
                                            className="border-0"
                                            classNames={{
                                                caption: "flex justify-center py-2 mb-4 relative items-center",
                                                caption_label: "text-sm font-medium text-gray-900",
                                                nav: "flex items-center",
                                                nav_button:
                                                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                                nav_button_previous: "absolute left-1.5",
                                                nav_button_next: "absolute right-1.5",
                                                table: "w-full border-collapse",
                                                head_row: "flex font-medium text-gray-900",
                                                head_cell: "m-0.5 w-9 font-normal text-sm",
                                                row: "flex w-full mt-2",
                                                cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                                day: "h-9 w-9 p-0 font-normal",
                                                day_range_end: "day-range-end",
                                                day_selected:
                                                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                                day_today: "rounded-md bg-gray-200 text-gray-900",
                                                day_outside:
                                                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                                day_disabled: "text-gray-500 opacity-50",
                                                day_hidden: "invisible",
                                            }}
                                            components={{
                                                IconLeft: ({ ...props }) => (
                                                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                                                ),
                                                IconRight: ({ ...props }) => (
                                                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                                                ),
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Second small input */}
                            {isRoundTrip && (
                            <div className="relative" style={{ width: "calc(50% - 0.5rem)" }}>
                            <Popover placement="bottom">
                                <PopoverHandler>
                                    <div className="relative">
                                        <Input
                                            label="Retour"
                                            color="white"
                                            className="pr-12"
                                            containerProps={{
                                                className: "relative min-w-[auto]",
                                            }}
                                            onChange={() => null}
                                            value={endDate ? format(endDate, "PPP") : ""}
                                        />
                                        <div className="absolute top-0 right-0 h-full w-12 bg-yellow-500 flex items-center justify-center rounded-tr-md rounded-br-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003581" className="bi bi-calendar-week" viewBox="0 0 16 16">
                                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </PopoverHandler>
                                <PopoverContent>
                                    <DayPicker
                                        mode="single"
                                        selected={endDate}
                                        onSelect={setEndDate}
                                        showOutsideDays
                                        className="border-0"
                                        classNames={{
                                            caption: "flex justify-center py-2 mb-4 relative items-center",
                                            caption_label: "text-sm font-medium text-gray-900",
                                            nav: "flex items-center",
                                            nav_button:
                                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                            nav_button_previous: "absolute left-1.5",
                                            nav_button_next: "absolute right-1.5",
                                            table: "w-full border-collapse",
                                            head_row: "flex font-medium text-gray-900",
                                            head_cell: "m-0.5 w-9 font-normal text-sm",
                                            row: "flex w-full mt-2",
                                            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                            day: "h-9 w-9 p-0 font-normal",
                                            day_range_end: "day-range-end",
                                            day_selected:
                                                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                            day_today: "rounded-md bg-gray-200 text-gray-900",
                                            day_outside:
                                                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                            day_disabled: "text-gray-500 opacity-50",
                                            day_hidden: "invisible",
                                        }}
                                        components={{
                                            IconLeft: ({ ...props }) => (
                                                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                                            ),
                                            IconRight: ({ ...props }) => (
                                                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                                            ),
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                            )}
                        </div>

                        <div className="flex mt-4">
                            <div className="w-1/3 text-white font-normal text-md mt-3">
                                Classe :
                            </div>
                            <div className="w-2/3">
                                <Select variant="standard" label="Choisir votre classe" color="yellow" className="text-white"
                                >
                                    <Option>Economique</Option>
                                    <Option>Premium</Option>
                                    <Option>Première</Option>
                                    <Option>Classe Affaire</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    {/* Middle Section with Arrows */}
                    <div className="w-[10%] flex items-center justify-center">
                        <div className="flex sm:flex-row flex-col items-center">
                            {/* Arrow for Mobile */}
                            {isRoundTrip ? (
                                <i
                                    className="bi bi-arrow-down-up text-2xl sm:hidden"
                                    style={{ color: "yellow" }}
                                ></i>
                            ) : (
                                <i
                                    className="bi bi-arrow-down text-2xl sm:hidden"
                                    style={{ color: "yellow" }}
                                ></i>
                            )}
                            {/* Arrow for Larger Screens */}
                            {isRoundTrip ? (
                                <i
                                    className="bi bi-arrow-left-right text-2xl hidden sm:block"
                                    style={{ color: "yellow" }}
                                ></i>
                            ) : (
                                <i
                                    className="bi bi-arrow-right text-2xl hidden sm:block"
                                    style={{ color: "yellow" }}
                                ></i>
                            )}
                        </div>
                    </div>

                    {/*Right Section*/}
                    <div className="w-[45%] flex flex-col mt-[59px]">
                        <div className="w-[90%] relative">
                            <Input
                                label="Arrivé à"
                                color="white"

                                className="pr-12"
                                containerProps={{
                                    className: "relative",
                                }}
                            />
                            <div className="absolute top-0 right-0 h-full w-12 bg-yellow-500 flex items-center justify-center rounded-tr-md rounded-br-md">
                                <img
                                    src="/Orion_aircraft-landing.svg"
                                    alt="Icon"
                                    className="w-7 h-7"
                                />
                            </div>
                        </div>
                        <div className="relative w-[90%] mt-4">
                            <Menu>
                                <Menu.Button className="flex items-center justify-between w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg shadow-sm text-yellow-400">
                                    {`${totalPassengers} ${totalPassengers === 1 ? "Passager" : "Passagers"}`}
                                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                </Menu.Button>

                                <Menu.Items className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full">
                                    {["adult", "child", "baby"].map((type) => (
                                        <div key={type} className="flex justify-between items-center px-4 py-2 text-black">
                                            <span className="text-black">
                                                {type === "adult" ? "Adulte(s)" : type === "child" ? "Enfant(s)" : "Bébé(s)"}
                                            </span>
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    className="w-[25px] h-[30px] border border-black rounded-[20px] cursor-pointer active:bg-[yellow] disabled:cursor-not-allowed text-black"
                                                    disabled={(type === "adult" && passengers[type] <= 1) || (type === "child" && passengers[type] <= 0) || (type === "baby" && passengers[type] <= 0)}
                                                    onClick={() => handleDecrement(type)}
                                                >
                                                    -
                                                </button>
                                                <span>{passengers[type]}</span>
                                                <button
                                                    className="w-[25px] h-[30px] border border-black rounded-[20px] cursor-pointer active:bg-[yellow] disabled:cursor-not-allowed text-black"
                                                    onClick={() => handleIncrement(type)}
                                                    disabled={passengers[type] >= 10} // Disable if count exceeds 10 (example)
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </Menu.Items>
                            </Menu>
                        </div>
                        <Button
                            variant="gradient"
                            color="yellow"
                            className="flex items-center justify-center gap-3 w-[90%] h-[5rem] mt-10 text-[#003581] text-xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            RECHERCHER
                        </Button>

                    </div>
                </div>
            </main></>
    );
}

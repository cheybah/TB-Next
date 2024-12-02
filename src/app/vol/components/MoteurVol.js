"use client";

import React, { useState } from "react";
import { Radio } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";




export default function MoteurVol() {

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

    return (
        <>
            <main className=" p-6 lg:px-[30rem] flex flex-col items-center ">
                <div className="max-w-sm w-full lg:max-w-full lg:flex border-2 border-[#003581] rounded-md bg-[#003581] text-white p-6">
                    {/*Left Section*/}
                    <div className="w-[45%] flex flex-col gap-4 ">
                        <div className="flex gap-6">
                            <Radio
                                name="type"
                                label="Aller/Retour"
                                defaultChecked
                                className="text-white checked:bg-black"
                                labelProps={{ className: "text-white font-bold" }}
                                color="yellow"

                            />
                            <Radio
                                name="type"
                                label="Aller/Simple"
                                className="text-white checked:bg-black"
                                labelProps={{ className: "text-white font-bold" }}
                                color="yellow"
                            />
                        </div>
                        <div className="w-full">
                            <Input
                                label="Départ de"
                                icon={
                                    <div className="bg-yellow-500 rounded">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 64 64"
                                            aria-labelledby="title"
                                            aria-describedby="desc"
                                            role="img"
                                            fill="#003581"
                                            className="w-6 h-6"
                                        >
                                            <title>Plane</title>
                                            <desc>A solid styled icon from Orion Icon Library.</desc>
                                            <path
                                                data-name="layer1"
                                                d="M57.4 38.3L37 22.5v-15a5 5 0 0 0-10 0v15L6.6 38.3S5 39.4 5 40.5v4.2a1.3 1.3 0 0 0 .7 1.3c.5.3 1.9-.3 2.4-.5L27 39.4v11.1L19.7 56a1.6 1.6 0 0 0-.7 1.4v3.1c0 .4.1 1.3 1.4.8L32 56.5l11.6 4.8c1.4.5 1.4-.5 1.4-.8v-3.1a1.6 1.6 0 0 0-.7-1.4L37 50.5V39.4l18.9 6.2c.5.2 1.9.7 2.4.5a1.3 1.3 0 0 0 .7-1.3v-4.3c0-1.1-1.6-2.2-1.6-2.2z"
                                            />
                                        </svg>
                                    </div>
                                }
                                color="white"
                            />
                        </div>
                        {/* this is the input i want to be small*/}
                        <div className="flex gap-4 w-full">
                            <div className="w-[37%]">
                                <Input
                                    label="Départ de"
                                    icon={
                                        <div className="bg-yellow-500 rounded">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 64 64"
                                                fill="#003581"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    d="M57.4 38.3L37 22.5v-15a5 5 0 0 0-10 0v15L6.6 38.3S5 39.4 5 40.5v4.2a1.3 1.3 0 0 0 .7 1.3c.5.3 1.9-.3 2.4-.5L27 39.4v11.1L19.7 56a1.6 1.6 0 0 0-.7 1.4v3.1c0 .4.1 1.3 1.4.8L32 56.5l11.6 4.8c1.4.5 1.4-.5 1.4-.8v-3.1a1.6 1.6 0 0 0-.7-1.4L37 50.5V39.4l18.9 6.2c.5.2 1.9.7 2.4.5a1.3 1.3 0 0 0 .7-1.3v-4.3c0-1.1-1.6-2.2-1.6-2.2z"
                                                />
                                            </svg>
                                        </div>
                                    }
                                    color="white"
                                />
                            </div>
                            <div className="w-[37%] ml-[2.6rem]">
                                <Input
                                    label="Départ de"
                                    icon={
                                        <div className="bg-yellow-500 rounded">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 64 64"
                                                fill="#003581"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    d="M57.4 38.3L37 22.5v-15a5 5 0 0 0-10 0v15L6.6 38.3S5 39.4 5 40.5v4.2a1.3 1.3 0 0 0 .7 1.3c.5.3 1.9-.3 2.4-.5L27 39.4v11.1L19.7 56a1.6 1.6 0 0 0-.7 1.4v3.1c0 .4.1 1.3 1.4.8L32 56.5l11.6 4.8c1.4.5 1.4-.5 1.4-.8v-3.1a1.6 1.6 0 0 0-.7-1.4L37 50.5V39.4l18.9 6.2c.5.2 1.9.7 2.4.5a1.3 1.3 0 0 0 .7-1.3v-4.3c0-1.1-1.6-2.2-1.6-2.2z"
                                                />
                                            </svg>
                                        </div>
                                    }
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <div className="w-1/3 text-white font-normal text-md mt-3">
                                Classe
                            </div>
                            <div className="w-2/3">
                                <Select variant="standard" label="Choisir votre classe" color="yellow">
                                    <Option>Economique</Option>
                                    <Option>Premium</Option>
                                    <Option>Première</Option>
                                    <Option>Classe Affaire</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    {/*Middle Section*/}
                    <div className="w-[10%] flex items-center justify-center">
                        <div className="flex sm:flex-row flex-col items-center">
                            {/* Arrow for Mobile */}
                            <i
                                className="bi bi-arrow-down-up text-2xl sm:hidden"
                                style={{ color: "yellow" }}
                            ></i>
                            {/* Arrow for Larger Screens */}
                            <i
                                className="bi bi-arrow-left-right text-2xl hidden sm:block"
                                style={{ color: "yellow" }}
                            ></i>
                        </div>
                    </div>

                    {/*Right Section*/}
                    <div className="w-[45%] flex flex-col mt-[59px]">
                        <div className="w-[90%]">
                            <Input
                                label="Arrivé à"
                                icon={
                                    <div className="bg-yellow-500 rounded">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 64 64"
                                            aria-labelledby="title"
                                            aria-describedby="desc"
                                            role="img"
                                            fill="#003581"
                                            className="w-6 h-6"
                                        >
                                            <title>Plane</title>
                                            <desc>A solid styled icon from Orion Icon Library.</desc>
                                            <path
                                                data-name="layer1"
                                                d="M57.4 38.3L37 22.5v-15a5 5 0 0 0-10 0v15L6.6 38.3S5 39.4 5 40.5v4.2a1.3 1.3 0 0 0 .7 1.3c.5.3 1.9-.3 2.4-.5L27 39.4v11.1L19.7 56a1.6 1.6 0 0 0-.7 1.4v3.1c0 .4.1 1.3 1.4.8L32 56.5l11.6 4.8c1.4.5 1.4-.5 1.4-.8v-3.1a1.6 1.6 0 0 0-.7-1.4L37 50.5V39.4l18.9 6.2c.5.2 1.9.7 2.4.5a1.3 1.3 0 0 0 .7-1.3v-4.3c0-1.1-1.6-2.2-1.6-2.2z"
                                            />
                                        </svg>
                                    </div>
                                }
                                color="white"
                            />
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
                        <Button variant="gradient" color="yellow" className="flex items-center gap-3 w-[90%] h-[5rem] mt-10 text-[#003581] text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            RECHERCHER
                        </Button>
                    </div>

                </div>
            </main></>
    );
}

// components/ResultHotel/ResultHotel.js
"use client"; // Ensures ResultHotel is treated as a client component

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tabs,
    Tab,
    TabsHeader,
    Checkbox
} from "@material-tailwind/react";

const ResultHotel = ({ listHotels, listHotelTripAdv }) => {
    const [activeTab, setActiveTab] = useState("Petit dejeuner");

    const data = [
        {
            label: "Petit dejeuner",
            value: "Petit dejeuner",
            TABLE_ROWS: [
                { name: "Chambre Double Standard", prix: "303" },
                { name: "Chambre Double Vue Mer", prix: "328" },
                { name: "Suite Junior Double", prix: "466" }
            ]
        },
        {
            label: "Demi pension",
            value: "Demi pension",
            TABLE_ROWS: [
                { name: "Chambre Double Standard", prix: "327" },
                { name: "Chambre Double Vue Mer", prix: "352" },
                { name: "Suite Junior Double", prix: "490" }
            ]
        },
        {
            label: "All inclusive soft",
            value: "All inclusive soft",
            TABLE_ROWS: [
                { name: "Chambre Double Standard", prix: "315" },
                { name: "Chambre Double Vue Mer", prix: "341" },
                { name: "Suite Junior Double", prix: "479" }
            ]
        },
    ];

    return (
        <section id="result">
            <div className="relative max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6 z-9 w-full mb-12 ">
                {listHotels.map((hotel) => (
                    <Card key={hotel.id_hotel} className="w-full flex flex-col md:flex-row mb-6">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 md:w-2/5 w-full rounded-t-md md:rounded-r-none md:rounded-l-md"
                        >
                            <img
                                src={hotel.images.image_principal}
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody className='w-full p-4 z-0'>
                            <Typography variant="h4" color="blue-gray" className="mb-2 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-x-4">
                                <span>{hotel.libelle_hotel}</span>
                                {listHotelTripAdv.map((hotelTripAdv) =>
                                    hotel.id_hotel === hotelTripAdv.id_hotel ? (
                                        <div key={hotelTripAdv.id_hotel} className="flex items-center space-x-2">
                                            <img
                                                src="/icon_tripadvisor.svg"
                                                alt="icon_tripadvisor"
                                                className="w-15 h-15 md:w-15 md:h-15 mb-2" 
                                            />
                                            <span>
                                                {hotelTripAdv.note_tripad}/5 {hotelTripAdv.text_tripad}
                                            </span>
                                        </div>
                                    ) : null
                                )}
                            </Typography>

                            <Typography color="gray" className="mb-8 font-normal">
                                <Card className="h-full w-full">
                                    <table className="w-full min-w-max table-auto text-left">
                                        <thead>
                                            <tr>
                                                <div className="overflow-x-auto whitespace-nowrap ">
                                                    <Tabs value={activeTab}>
                                                        <TabsHeader className="mb-4">
                                                            {data.map(({ label, value }) => (
                                                                <Tab key={value} value={value} onClick={() => setActiveTab(value)} className="lex-shrink-0 min-w-[120px] px-3 py-2 text-sm text-center">
                                                                    {label}
                                                                </Tab>
                                                            ))}
                                                        </TabsHeader>
                                                    </Tabs>
                                                </div>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.find(tab => tab.value === activeTab)?.TABLE_ROWS.map(({ name, prix }, index) => {
                                                const isLast = index === data.find(tab => tab.value === activeTab).TABLE_ROWS.length - 1;
                                                const classes = isLast ? "" : "border-b border-blue-gray-50";

                                                return (
                                                    <tr key={name}>
                                                        <td className={classes}>
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                <div className="flex items-center space-x-2">
                                                                    <div className="m-0 p-0">
                                                                        <Checkbox id={`ripple-on-${index}`} ripple={true} />
                                                                    </div>
                                                                    <span>{name}</span>
                                                                </div>
                                                            </Typography>
                                                        </td>
                                                        <td> <div>{prix}DT</div></td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </Card>
                            </Typography>
                            <a href="#" className="inline-block w-full">
                                <div className="relative w-full">
                                    <Link href="">
                                        <button
                                            className="btn_rechercher w-72 lg:w-72 md:w-36 py-2 bg-gradient-to-r from-[#FF5555] to-[#F40091] text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
                                        >
                                            + De detail
                                        </button>
                                    </Link>
                                </div>
                            </a>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ResultHotel;

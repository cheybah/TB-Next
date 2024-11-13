"use client"; // Ensures ResultHotel is treated as a client component

import React, { useState } from 'react';
import { decode } from 'he'; // Import decode from he library
import Link from 'next/link';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tabs,
    Tab,
    TabsHeader,
    Checkbox,
    Input,
} from "@material-tailwind/react";
import Image from 'next/image';

const ResultHotel = ({ listHotels, listHotelTripAdv }) => {
    const [activeTab, setActiveTab] = useState("Petit dejeuner");
    const [filterText, setFilterText] = useState(""); // State to hold filter input value
    const [selectedCategories, setSelectedCategories] = useState([]); // State to hold selected star categories
    const [selectedFormules, setSelectedFormules] = useState([]); // State to hold selected formules
    const [selectedRatings, setSelectedRatings] = useState([]); // State for selected TripAdvisor ratings

    // Check if we are on the client side by checking for the window object
    const isClient = typeof window !== "undefined";

    if (!isClient) {
        return null; // Return nothing during SSR to prevent hydration issues
    }

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

    // Group hotels by their 'categorie' (star rating)
    const hotelsByCategory = listHotels.reduce((acc, hotel) => {
        const category = hotel.categorie;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(hotel);
        return acc;
    }, {});

    // Group hotels by their 'categorie' (star rating) for TripAdvisor ratings
    const hotelsBynoteTripAdv = listHotelTripAdv.reduce((acc, hotel) => {
        const note = hotel.note_tripad;
        if (!acc[note]) {
            acc[note] = [];
        }
        acc[note].push(hotel);
        return acc;
    }, {});

    // Filter hotels based on input, selected categories, selected formulas, and selected TripAdvisor ratings
    const filteredHotels = listHotels.filter((hotel) => {
        // Search filter 
        const matchesSearch = hotel.libelle_hotel.toLowerCase().includes(filterText.toLowerCase());

        // Category filter 
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(hotel.categorie);

        // TripAdvisor filter
        const hotelTripAdvData = listHotelTripAdv.find((hotelTripAdv) => hotelTripAdv.id_hotel === hotel.id_hotel);
        const matchesRating =
            selectedRatings.length === 0 || 
            (hotelTripAdvData && selectedRatings.some((rating) => hotelTripAdvData.note_tripad === rating));

        return matchesSearch && matchesCategory && matchesRating;
    });

    // Handle category checkbox change
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) => {
            if (prev.includes(category)) {
                return prev.filter((cat) => cat !== category); // Uncheck
            } else {
                return [...prev, category]; // Check
            }
        });
    };

    // Handle formule checkbox change
    const handleFormuleChange = (formule) => {
        setSelectedFormules((prev) => {
            if (prev.includes(formule)) {
                return prev.filter((f) => f !== formule); // Uncheck
            } else {
                return [...prev, formule]; // Check
            }
        });
    };

    // Handle TripAdvisor rating checkbox change
    const handleRatingChange = (note_tripad) => {
        setSelectedRatings((prev) => {
            if (prev.includes(note_tripad)) {
                return prev.filter((r) => r !== note_tripad); // Remove rating if already selected
            } else {
                return [...prev, note_tripad]; // Add rating if not selected
            }
        });
    };

    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* Left part filter */}
            <div className="md:w-1/4 px-4">
                <div className="border-b border-blue-gray-900 pb-2">
                    <h2 className="text-lg font-semibold mb-4 !text-blue-gray-900">Filtrer Par:</h2>
                </div>
                {/* Filter input */}
                <div className="my-2 border-b border-blue-gray-900 pb-2">
                    <h2 className="text-lg font-semibold mb-4 !text-blue-gray-900">Nom d'hôtel:</h2>
                    <Input
                        label="Rechercher un hôtel"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)} // Update filterText state
                    />
                </div>
                {/* Filter by category */}
                <div className="my-2 border-b border-blue-gray-900 pb-2">
                    <h2 className="text-lg font-semibold mb-2 !text-blue-gray-900">Catégorie:</h2>
                    {Object.entries(hotelsByCategory).map(([category, hotels]) => (
                        <div key={category} className="flex items-center">
                            <Checkbox
                                id={`ripple-on-${category}`}
                                ripple={true}
                                checked={selectedCategories.includes(category)} // Check if the category is selected
                                onChange={() => handleCategoryChange(category)} // Handle checkbox change
                            />
                            <Image
                                src={`https://tn.tunisiebooking.com/theme/images/star${category}.svg`}
                                alt={`${category} stars`}
                                className="w-24"
                                width={500}
                                height={300}
                                loading="lazy"
                            />
                            <span className="text-gray-700 font-semibold">
                                ({hotels.length})
                            </span>
                        </div>
                    ))}
                </div>
                {/* Filter by formule */}
                <div className="my-2 border-b border-blue-gray-900 pb-2">
                    <h2 className="text-lg font-semibold mb-2 !text-blue-gray-900">Formule d'hébergement:</h2>
                    {data.map(({ label, value }) => (
                        <div key={value} className="flex items-center">
                            <Checkbox
                                id={`ripple-on-formule-${value}`}
                                ripple={true}
                                checked={selectedFormules.includes(label)} // Check if the formule is selected
                                onChange={() => handleFormuleChange(label)} // Handle checkbox change
                            />
                            <span className="font-semibold">{label}</span>
                        </div>
                    ))}
                </div>
                {/* Filter by TripAdvisor rating */}
                <div className="my-2 border-b border-blue-gray-900 pb-2">
                    <h2 className="text-lg font-semibold mb-2 !text-blue-gray-900">Note Tripadvisor:</h2>
                    {Object.entries(hotelsBynoteTripAdv).map(([note, hotels]) => (
                        <div key={note} className="flex items-center">
                            <Checkbox
                                id={`ripple-on-${note}`}
                                ripple={true}
                                checked={selectedRatings.includes(note)} // Check if the rating is selected
                                onChange={() => handleRatingChange(note)} // Handle checkbox change
                            />
                            <Image
                                src={`https://tn.tunisiebooking.com/theme/images/ratings/${note}-34546-5.svg`}
                                alt={`${note} noteTripAdv`}
                                className="w-24"
                                width={500}
                                height={300}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right part - Result Hotels */}
            <section id="result" className="md:w-3/4">
                <div className="relative max-w-6xl p-6 bg-white rounded-lg shadow-lg mt-6 z-9 w-full mb-[3rem]">
                    {filteredHotels.map((hotel) => (
                        <Card key={hotel.id_hotel} className="w-full flex-row mb-4">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                                <Image
                                    src={decode(hotel.images.image_principal)}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                            </CardHeader>
                            <CardBody className="w-full">
                                <Typography variant="h4" color="blue-gray" className="mb-2 flex items-center space-x-4">
                                    <span>{decode(hotel.libelle_hotel)}</span>
                                    {listHotelTripAdv.map((hotelTripAdv) =>
                                        hotel.id_hotel === hotelTripAdv.id_hotel ? (
                                            <div key={hotelTripAdv.id_hotel} className="flex items-center justify-end space-x-2">
                                                <Image
                                                    src={`https://tn.tunisiebooking.com/theme/images/star${hotel.categorie}.svg`}
                                                    alt="icon_tripadvisor"
                                                    className="w-10 h-10 mb-2"
                                                    width={500}
                                                    height={300}
                                                    loading="lazy"
                                                />
                                                <Image
                                                    src="/icon_tripadvisor.svg"
                                                    alt="icon_tripadvisor"
                                                    className="w-10 h-10 mb-2"
                                                    width={500}
                                                    height={300}
                                                    loading="lazy"
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
                                                    <Tabs value={activeTab}>
                                                        <TabsHeader>
                                                            {data.map(({ label, value }) => (
                                                                <Tab
                                                                    key={value}
                                                                    value={value}
                                                                    onClick={() => setActiveTab(value)}
                                                                >
                                                                    {label}
                                                                </Tab>
                                                            ))}
                                                        </TabsHeader>
                                                    </Tabs>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data
                                                    .find((tab) => tab.value === activeTab)
                                                    ?.TABLE_ROWS.map(({ name, prix }, index) => {
                                                        const isLast =
                                                            index ===
                                                            data.find((tab) => tab.value === activeTab)
                                                                .TABLE_ROWS.length - 1;
                                                        const classes = isLast ? "" : "border-b border-blue-gray-50";

                                                        return (
                                                            <tr key={name}>
                                                                <td className={classes}>
                                                                    <Typography
                                                                        variant="small"
                                                                        color="blue-gray"
                                                                        className="font-normal"
                                                                    >
                                                                        <div className="flex items-center space-x-0">
                                                                            <div className="m-0 p-0">
                                                                                <Checkbox
                                                                                    id={`ripple-on-${index}`}
                                                                                    ripple={true}
                                                                                />
                                                                            </div>
                                                                            <div className="m-0 p-0">
                                                                                <span>{name}</span>
                                                                            </div>
                                                                        </div>
                                                                    </Typography>
                                                                </td>
                                                                <td>
                                                                    <div>{prix}DT</div>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                            </tbody>
                                        </table>
                                    </Card>
                                </Typography>
                                <div className="relative w-full">
                                    <Link href="">
                                        <button
                                            className="btn_rechercher w-72 lg:w-72 md:w-36 py-2 bg-gradient-to-r from-[#FF5555] to-[#F40091] text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
                                        >
                                            + De detail
                                        </button>
                                    </Link>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ResultHotel;  // Ensure default export is here

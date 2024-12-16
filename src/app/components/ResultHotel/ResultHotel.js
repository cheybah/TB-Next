"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { decode } from 'he';
import Cookies from 'js-cookie'; // Import js-cookie
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

const ResultHotel = ({ listsHotels = [], listsHotelTripAdv = [], searchParams }) => {
    const Router = useRouter();
    const datedep = searchParams?.datedep || '';
    const dateret = searchParams?.dateret || '';
    const ville = searchParams?.ville || '';  // Get ville from search params

    const listHotels = listsHotels.Hotels_hors_promo;
    const listHotelTripAdv = listsHotelTripAdv.Hotels;
    const [activeTab, setActiveTab] = useState("Petit dejeuner");
    const [filterText, setFilterText] = useState(""); // State to hold filter input value
    const [selectedCategories, setSelectedCategories] = useState([]); // State to hold selected star categories
    const [selectedFormules, setSelectedFormules] = useState([]); // State to hold selected formules
    const [selectedRatings, setSelectedRatings] = useState([]); // State for selected TripAdvisor ratings

    // Formules data (meal plans or accommodation options)
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


    const handleNavigate = (hotel, hotelTripAdv) => {

        console.log("we here", hotel, hotelTripAdv);


        if (typeof window !== "undefined") { // Vérifier si on est bien dans le navigateur
            const today = new Date();

            // Utilisation des dates fournies ou valeurs par défaut
            const departureDate = datedep ? new Date(datedep) : new Date(today);
            const returnDate = dateret ? new Date(dateret) : new Date(today.setDate(today.getDate() + 2));

            // Formatage des dates en 'YYYY-MM-DD'
            const formattedDepartureDate = departureDate.toISOString().split('T')[0];
            const formattedReturnDate = returnDate.toISOString().split('T')[0];
            const location = ville ? ville : hotel.location;

            const noteTripad = hotelTripAdv?.note_tripad || '';


            // Définition des cookies avec une expiration de 7 jours
            Cookies.set('departureDate', formattedDepartureDate, { expires: 7, path: '' });
            Cookies.set('returnDate', formattedReturnDate, { expires: 7, path: '' });
            Cookies.set('location', hotel.region, { expires: 7, path: '' });
            Cookies.set('hotelName', hotel.libelle_hotel, { expires: 7, path: '' }); // Nom de l'hôtel
            Cookies.set('rating', hotel.categorie.toString(), { expires: 7, path: '' }); // Note de l'hôtel

            if (noteTripad) {
                Cookies.set('note_tripad', noteTripad, { expires: 7, path: '' });
            }

            // Vérification que les cookies sont bien enregistrés
            const savedDepartureDate = Cookies.get('departureDate');
            const savedReturnDate = Cookies.get('returnDate');
            const savedLocation = Cookies.get('location');
            const savedHotelName = Cookies.get('hotelName');
            const savedHotelRating = Cookies.get('rating');
            const savedNoteTripad = Cookies.get('note_tripad');

            if (savedDepartureDate && savedReturnDate && savedLocation && savedHotelName && savedHotelRating && savedNoteTripad) {
                Router.push(`/detail_hotel_${hotel.id_hotel}/`);
            } else {
                console.error('Failed to save cookies');
            }
        }
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

            <section id="result" className="md:w-3/4 relative z-1">
                <div className="relative max-w-6xl p-6 bg-white rounded-lg shadow-lg mt-6 z-9 w-full mb-[3rem]">
                    {filteredHotels.map((hotel) => (

                        <Card key={hotel.id_hotel} className="w-full flex-col md:flex-row mb-4" onClick={() => handleNavigate(hotel)}>
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-full md:w-2/5 shrink-0 rounded-r-none"
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
                                <Typography variant="h4" color="blue-gray" className="mb-2 flex flex-wrap items-center space-x-4">
                                    {console.log('listHotelTripAdv:', listHotelTripAdv)}
                                    <span className="w-full sm:w-auto">{decode(hotel.libelle_hotel)}</span>
                                    {listHotelTripAdv.map((hotelTripAdv) =>
                                        hotel.id_hotel === hotelTripAdv.id_hotel ? (
                                            <div key={hotelTripAdv.id_hotel} className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end space-y-2 sm:space-x-2 sm:space-y-0 mt-2 sm:mt-0">
                                                {/* Category Image */}
                                                <Image
                                                    src={`https://tn.tunisiebooking.com/theme/images/star${hotel.categorie}.svg`}
                                                    alt="icon_tripadvisor"
                                                    className="w-10 h-10 mb-2 sm:mb-0"
                                                    width={500}
                                                    height={300}
                                                    loading="lazy"
                                                />
                                                {/* TripAdvisor Icon */}
                                                <Image
                                                    src="/icon_tripadvisor.svg"
                                                    alt="icon_tripadvisor"
                                                    className="w-10 h-10 mb-2 sm:mb-0"
                                                    width={500}
                                                    height={300}
                                                    loading="lazy"
                                                />
                                                {/* TripAdvisor Rating */}
                                                <span className="sm:ml-2">{hotelTripAdv.note_tripad}/5 {hotelTripAdv.text_tripad}</span>
                                            </div>
                                        ) : null
                                    )}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    <Card className="h-full w-full max-w-full"> {/* Card should take full width of container */}
                                        <div className="overflow-x-auto w-full"> {/* Ensure the table scrolls horizontally on small screens */}
                                            <table className="w-full min-w-max table-auto text-left"> {/* Make sure the table is full width */}
                                                <thead>
                                                    <tr>
                                                        <Tabs value={activeTab}>
                                                            <TabsHeader className="md:w-full w-8/12"> {/* Adjust this for tab width if necessary */}
                                                                <div className="overflow-x-auto sm:overflow-x-auto md:overflow-x-visible w-full">
                                                                    <div className="flex space-x-4 min-w-max">
                                                                        {data.map(({ label, value }) => (
                                                                            <Tab
                                                                                key={value}
                                                                                value={value}
                                                                                onClick={() => setActiveTab(value)}
                                                                                className="whitespace-nowrap"
                                                                            >
                                                                                {label}
                                                                            </Tab>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </TabsHeader>
                                                        </Tabs>
                                                    </tr>
                                                </thead>
                                                <tbody className="md:w-full w-full"> {/* Ensure tbody takes full width */}
                                                    {data
                                                        .find((tab) => tab.value === activeTab)
                                                        ?.TABLE_ROWS.map(({ name, prix }, index) => {
                                                            const isLast =
                                                                index ===
                                                                data.find((tab) => tab.value === activeTab)
                                                                    .TABLE_ROWS.length - 1;
                                                            const classes = isLast ? "" : "border-b border-blue-gray-50";

                                                            return (
                                                                <tr key={name} className=" ">
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

                                                                </tr>
                                                            );
                                                        })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card>
                                </Typography>
                                {/* Check this out */}
                                <div className="relative w-full" onClick={() => handleNavigate(hotel)}>
                                    <Link href="">
                                        <button
                                            onClick={() => {
                                                const matchingHotelTripAdv = listHotelTripAdv.find(
                                                    (hotelTripAdv) => hotelTripAdv.id_hotel === hotel.id_hotel
                                                );
                                                handleNavigate(hotel, matchingHotelTripAdv); // Pass matching hotelTripAdv
                                            }}
                                            className="btn_rechercher w-full sm:w-72 py-2 bg-gradient-to-r from-[#FF5555] to-[#F40091] text-white font-semibold rounded-lg transform transition-transform duration-300 hover:bg-lime-600 hover:scale-105 focus:outline-none"
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

export default ResultHotel;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tabs,
    Tab,
    TabsHeader,
    TabsBody,
    TabPanel,
    Checkbox
} from "@material-tailwind/react";
import axios from 'axios';

const ResultHotel = () => {
    const searchParams = useSearchParams();
    const ville = searchParams.get('ville'); // Get the 'ville' query parameter
    const [ListHotels, setListHotels] = useState([]);
    const [ListhotelTripAdv, setListhotelTripAdv] = useState([]);
    const [activeTab, setActiveTab] = useState("Petit dejeuner"); // Initialize with the first tab's value

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

    useEffect(() => {
        // Fetch hotels based on the city
        axios.get(`http://api.resabookings.com/api/api/api_hotel/api_hotel_detail2_v22_vf.php?id_partenaire=10&id_marche=5&destination=${ville}&date_fin_1=2024-10-18&date_fin_2=2024-10-22&type=not%20all`)
            .then(res => {
                const allHotels = res.data.Hotels[0].Hotels_hors_promo;
                const limitedHotels = allHotels.slice(0, 5); // Get the first 5 hotels
                setListHotels(limitedHotels);
            });

        // Fetch TripAdvisor data
        axios.get(`http://api.resabookings.com/api/api/api_hotel/api_tripad.php`)
            .then(res => {
                const allHotels = res.data.Hotels;
                setListhotelTripAdv(allHotels);
            });
    }, [ville]);

    return (
        <div>
            {/* Start of hotel results */}
            <section id="result">
                <div className="relative max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6 z-9 w-full">
                    {ListHotels.map((hotel) => (
                        <Card key={hotel.id_hotel} className="w-full flex-row mb-4">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                                <img
                                    src={hotel.images.image_principal}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className='w-full'>
                                <Typography variant="h4" color="blue-gray" className="mb-2 flex items-center space-x-4">
                                    <span>{hotel.libelle_hotel}</span>
                                    {ListhotelTripAdv.map((hotelTripAdv) =>
                                        hotel.id_hotel === hotelTripAdv.id_hotel ? (
                                            <div key={hotelTripAdv.id_hotel} className="flex items-center justify-end space-x-2">
                                                <img
                                                    src="/icon_tripadvisor.svg"
                                                    alt="icon_tripadvisor"
                                                    className="w-15 h-15 mb-2"
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
                                                                <Tab key={value} value={value} onClick={() => setActiveTab(value)}>
                                                                    {label}
                                                                </Tab>
                                                            ))}
                                                        </TabsHeader>
                                                    </Tabs>
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
                                                                    <div className="flex items-center space-x-0">
                                                                        <div className="m-0 p-0">
                                                                            <Checkbox id={`ripple-on-${index}`} ripple={true} />
                                                                        </div>
                                                                        <div className="m-0 p-0">
                                                                            <span>{name}</span>
                                                                        </div>
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
        </div>
    );
};

export default ResultHotel;

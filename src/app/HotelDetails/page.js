"use client";

import Header from "../components/Header/Header";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const HotelDetails = () => {
    const searchParams = useSearchParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const hotelData = {
            id: searchParams.get("id"),
            image: searchParams.get("image"),
            discount: searchParams.get("discount"),
            name: searchParams.get("name"),
            location: searchParams.get("location"),
            price: searchParams.get("price"),
            originalPrice: searchParams.get("originalPrice"),
            rating: searchParams.get("rating"),
            date: searchParams.get("date"),
        };
        setHotel(hotelData);
    }, [searchParams]);

    if (!hotel) {
        return <div>Loading...</div>;
    }



    return (
        <>
            <Header />
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <nav className="flex">
                        <ol className="flex items-center">
                            <li className="text-left">
                                <a href="/" className="p-1 text-sm font-medium text-gray-600">
                                    Home
                                </a>
                            </li>
                            <li className="text-left mx-2 text-gray-400">/</li>
                            <li className="text-left">
                                <span className="text-sm font-medium text-gray-800">
                                    Hotel Details
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-16">
                        <div className="lg:col-span-3">
                            <div className="max-w-xl overflow-hidden rounded-lg">
                                <img
                                    className="w-full object-cover"
                                    src={hotel.image}
                                    alt={`Hotel Image ${hotel.id}`}
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold">
                                {hotel.name}
                            </h2>
                            <p className="mt-4 text-gray-600">
                                {hotel.description}
                            </p>
                            <p className="mt-4 text-gray-600">
                                Price: {hotel.price}
                            </p>
                            <p className="mt-4 text-gray-600">
                                Location: {hotel.location}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HotelDetails;

"use client";

import Header from "../components/Header/Header";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Copyright from "../components/Copyright/Copyright";

const HotelDetails = () => {
    const searchParams = useSearchParams();
    const [hotel, setHotel] = useState(null);
    const getRatingDescription = (tripAdvisor) => {
        switch (tripAdvisor) {
            case 5:
                return "Excellent";
            case 4:
                return "Très Bien";
            case 3:
                return "Bien";
            case 2:
                return "Passable";
            case 1:
                return "Médiocre";
            default:
                return "N/R";
        }
    };
    

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
            tripAdvisor: parseInt(searchParams.get("tripAdvisor"), 10) // Convert to number
        };

        console.log(
            "TripAdvisor rating description:",
            getRatingDescription(hotelData.tripAdvisor)
        );
        setHotel(hotelData);
    }, [searchParams]);

    if (!hotel) {
        return <div>Loading...</div>;
    }
    console.log("this is the hotel object",hotel);  // Check if `tripAdvisor` is present


    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
            <section className="py-12 sm:py-16" style={{paddingTop: "10px"}} >
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
                    {/*this is the start of the detail card*/}
                    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg"> 
                    <div className="mt-8 relative overflow-hidden rounded-lg">
                    <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold  " style={{marginRight: "10px"}}>{hotel.name}</h2>
                            <div className="rating-container mt-4 flex items-center" style={{marginBottom:"1.5rem", marginRight: "auto"}}>
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        aria-hidden="true"
                                        className={`star-icon w-6 h-6 ${
                                            index < hotel.rating
                                                ? "text-yellow-300"
                                                : "text-gray-300"
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                ))}
                                <span className="bg-yellow-200 px-2 py-1 rounded text-xs ml-2">
                                    {hotel.rating}  
                                </span>
                            </div>
                            <span className="text-lg flex">
                            <img src="/icon_tripadvisor.svg" style={{marginRight: "5px"}}></img> {hotel.tripAdvisor} / 5{" "}
                            <span className="font-bold" style={{marginLeft: "5px"}}>{getRatingDescription(hotel.tripAdvisor)}</span>
                        </span>
                        </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
            <p className="mt-2 text-lg text-grey">{hotel.address}</p> {/* Add a subtitle */}
        </div>
        <img
            className="w-2/3 h-auto rounded-lg" style={{marginTop: "20px"}} // Set width to two-thirds and auto height
            src={hotel.image}
            alt={`Hotel Image ${hotel.id}`}
        />
    </div>
    <div className="lg:grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-3">
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
                </div>
            </section>
            </main>
            <Copyright />
        </div>
        
    );
};


export default HotelDetails;

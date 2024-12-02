"use client";

import { useParams } from "next/navigation";
import TchequeContent from "./components/TchequeContent";

export default function DestinationClient() {
    const { destination } = useParams();

    let content;
    switch (destination) {
        case "tcheque":
            content = <TchequeContent />;
            break;
        // Add more cases for other destinations
        default:
            content = <div>Destination not found</div>;
    }

    return (
        <div className="mb-[3rem] px-6 sm:px-6 md:px-6 lg:px-[15rem]">
            <nav className="flex mb-5">
                <ol className="flex items-center">
                    <li className="text-left">
                        <a href="/" className="p-1 text-sm font-medium text-gray-600">
                            Accueil
                        </a>
                    </li>
                    <li className="text-left mx-2 text-gray-400">/</li>
                    <li className="text-left">
                        <span className="text-sm font-medium text-gray-800">
                            Voyage Organisé
                        </span>
                    </li>
                    <li className="text-left mx-2 text-gray-400">/</li>
                    <li className="text-left">
                        <span className="text-sm font-medium text-gray-800">
                            {destination}
                        </span>
                    </li>
                </ol>
            </nav>
            {content}
            <h1 className="text-lg font-bold text-gray-900 mt-4">
                Voyage Organisé {destination.charAt(0).toUpperCase() + destination.slice(1)} : Voyage{" "}
                {destination.charAt(0).toUpperCase() + destination.slice(1)} à prix Promo!
            </h1>
        </div>

    );
}

"use client";
import { useParams } from 'next/navigation';
import TchequeContent from './components/TchequeContent';
import Header from '@/app/components/Header/Header';
import Background from './components/Background';
import Footer from '@/app/components/Footer/Footer';

export default function DestinationPage() {
    const { destination } = useParams();


    let content;
    switch (destination) {
        case 'tcheque':
            content = <TchequeContent />;
            break;
        // case 'france':
        //     content = <FranceContent />;
        //     break;
        default:
            content = <div>Destination not found</div>;
    }

    return (

        <div>
            <Header />
            <Background />
            <div className='ml-[15rem] mr-[15rem] mb-[3rem]'>
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
                <h1>Voyage Organisé {destination.charAt(0).toUpperCase() + destination.slice(1)} : Voyage {destination.charAt(0).toUpperCase() + destination.slice(1)} à prix Promo ! </h1>
            </div>
            <Footer />
        </div>
    );
}


"use client";

import React, { useState } from "react";

import MoteurVol from "../components/MoteurVol";

import Header from "@/app/components/Header/Header";
import Mosaic from "../components/Mosaic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import VolFooter from "../components/VolFooter";



const VolsPasCherPage = () => {

    const [expandedSections, setExpandedSections] = useState({
        section1: false,

        sections11: false,

        section2: false,
    });

    const toggleContent = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section],
        }));
    };


    return (
        <>
            <div className="bg-gray-300">
                <Header />
                <MoteurVol />
                <div className="p-6 lg:px-[20rem] flex flex-col items-center text-center">
                    <h1 className="text-[41px] text-black font-normal mb-4">Réserver votre vol pas cher !</h1>
                    <div className="max-w-sm w-full lg:max-w-full border-2 border-[white] rounded-md bg-[white] py-4 px-2 sm:px-6">
                    {/* Paragraph */}
                        <p className="text-base text-center">

                        Pour trouver les meilleurs plans pour visiter les villes de la Tunisie, une seule adresse : TunisieBooking.com. Peu importe votre destination tunisienne, 
                        que ce soit l’ile de Djerba ou la capitale historique Tunis. Peut être aussi vous avez envie de passer par sa capitale économique Sfax et Tozeur,
                        un petit oasis paradisiaque situé à la porte du désert. TunisieBooking.com vous permet de voyager dans toutes les villes
                         tunisiennes et vous propose les meilleures offres.
                        </p>
                    {/* Second Paragraph and Toggling Content */}
                        <div className={`overflow-hidden transition-all duration-300 text-base text-center ${expandedSections.section11 ? 'max-h-none' : 'max-h-[6rem]'}`}>
                            <p className="text-center">              
	                            Pour votre vol Tunisie, il vous suffit d’entrer toutes les informations requises par le site et valider.  Apres quoi, vous aurez automatiquement toutes les listes des vols disponibles : vol direct, vol low cost, vol charter ou encore vol régulier. Vous n’aurez plus qu’à choisir.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">  Offre spéciale vol Tunisie </h3>
                            <p className="text-center">
                                TunisieBooking  a pour but de rassembler en un seul site tous les vols Tunisie. Ce qui facilite énormément vos recherches de vol low cost Tunisie. Le principe est simple, nous vous proposons sur notre site  tous les vols adéquats à votre demande. Il ne vous reste donc qu’à comparer toutes les offres. Vous trouvez seulement en quelques minutes le vol qui correspond le mieux à votre budget.  Votre choix étant fait, nous vous conseillons de faire directement votre réservation sur TunisieBooking. La transaction pour l’achat du billet d’avion Tunisie est hautement sécurisée. Cela vous permet d’éviter toute perte de temps inutile.                             </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">  Vol Tunisie : infos pratiques   </h3>
                            <p className="text-center">
                                La Tunisie est reliée régulièrement aux principales grandes villes du monde par un grand nombre de compagnies aériennes 
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">  Billet d'avion Tunisie : Top compagnies aériennes :   </h3>
                            <p className="text-center">
                                Pour visiter la Tunisie, il est possible d’opter pour une compagnie régulière ou profiter d’une promo vol Tunisie proposée par les quelques compagnies low cost desservant les villes du pays. Pour visiter la Tunisie, il est possible d’opter pour une compagnie régulière ou profiter d’une promo vol Tunisie proposée par les quelques compagnies low cost desservant les villes du pays. 
                            </p>

                            <h4 className="text-left text-lg font-semibold mt-4 text-center">  Compagnies régulières  :  </h4>
                            <p className="text-center">
                                Pour visiter La Tunisie est reliée journalièrement à d’autres pays par des compagnies régulières telles qu’Air France,Tunisair,<a href="/vol/vols-Nouvelair/">Nouvelair</a>, Air Algeria, Turkish Airlines...   
                            </p>
                            <h4 className="text-left text-lg font-semibold mt-4 text-center"> Compagnies Low Cost   : </h4>
                            <p className="text-center">
                                Parmi les compagnies proposant un vol pas cher Tunisie qui relie les principales villes de la Tunisie au reste du monde, on peut citer : Transavia France, Vueling Airlines... 
                            </p>
                            <h4 className="text-left text-lg font-semibold mt-4 text-center"> Quand réserver votre billet d’avion Tunisie : </h4>
                            <p className="text-center">
                                Parmi les Il est vrai que trouver un vol Tunisie moins cher est parfaitement faisable tout au long de l’année. Cependant, il est conseillé d’opter pour la basse saison touristique pour effectuer son petit voyage puisque c’est durant ce temps qu’on y trouve très facilement un billet d’avion Tunisie moins cher.  
                            </p>
                            <h4 className="text-left text-lg font-semibold mt-4 text-center">   Durée du vol Tunisie :  </h4>
                            <p className="text-center">
                                Pour un départ dans une ville française, la durée moyenne d’un vol sans escale est de 2h30.    
                            </p>
                        </div>
                         {/* Toggle Button */}
                         <div className="flex justify-center mt-4">
                            <button
                                aria-label="Toggle content"
                                onClick={() => toggleContent('section11')}
                                className="text-[#003581] hover:no-underline flex items-center space-x-2"
                            >
                                <span>{expandedSections.section11 ? "Afficher moins" : "Afficher plus"}</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`transition-transform duration-300 ${expandedSections.section11 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </button>
                        </div>
                    {/* Paragraph */}
                        <p className="text-base text-center">

                            Que vous soyez un voyageur aguerri ou occasionnel, vous êtes surement sans savoir que le prix d’un billet d’avion peut être ce qui coute le plus dans le devis. Il semble donc nécessaire de trouver un moyen afin de profiter d’un vol pas cher. Et ce n’est pas le genre de chose qui se fait au petit bonheur la chance.
                            Voici notamment quelques conditions pour y prétendre.
                        </p>

                        {/* Second Paragraph and Toggling Content */}
                        <div className={`overflow-hidden transition-all duration-300 text-base text-center ${expandedSections.section1 ? 'max-h-none' : 'max-h-[6rem]'}`}>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Trouver un vol pas cher avec Tunisiebooking.com</h3>
                            <p className="text-center">
                                Utiliser les sites de comparaison d’offre est le meilleur moyen pour un Vol pas cher, et ce, peu importe la destination. Néanmoins, en ce qui concerne un voyage en partance vers la Tunisie ou au départ de la Tunisie, Tunisiebooking.com est une référence en la matière, facile à utiliser.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Comment trouver un vol pas cher ?</h3>
                            <p className="text-center">
                                Le rôle de cette plateforme est de regrouper les offres vol pas cher proposé par les différentes compagnies aériennes. En de termes plus simples, il s’agit d’un comparateur vol. Il vous suffit d’entrer votre destination et votre ville de départ, et le moteur de recherche du site vous présentera une liste des frais de réservation les pus abordables. Car, en effet, les tarifs ne se valent pas sur le Net.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Chercher un billet d’avion pour un voyage pas cher</h3>
                            <p className="text-center">
                                Tunisiebooking.com peut vous faire profiter notamment d’un billet d’avion easyjet ou venant d’autres compagnies aériennes. Vous allez donc devoir faire un tri selon vos impératifs : ponctualité, possibilité ou non de choisir son siège, conditions de vol, collation, etc. Comme quoi, en termes de voyage aussi, le rapport qualité-prix est crucial.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center"> Comment économiser lorsque vous réservez un vol pas cher ?</h3>
                            <p className="text-center">
                                Outre la mise en concurrence des prestations des sites de réservation, afin de profiter d’un billet d’avion vraiment pas cher, un conseil : optez pour un voyage en classe économique. Certes, vous aurez moins de place, mais vous pourriez économiser plusieurs centaines d’euros ou de dinars. Par ailleurs, si vous avez la possibilité d’attendre les promotions, ce peut aussi être une excellente idée afin de réserver un billet d’avion pas cher.
                            </p>
                        </div>

                        {/* Toggle Button */}
                        <div className="flex justify-center mt-4">
                            <button
                                aria-label="Toggle content"
                                onClick={() => toggleContent('section1')}
                                className="text-[#003581] hover:no-underline flex items-center space-x-2"
                            >
                                <span>{expandedSections.section1 ? "Afficher moins" : "Afficher plus"}</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`transition-transform duration-300 ${expandedSections.section1 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </button>
                        </div>
                        <Mosaic />
                        {/* Dividerrrr */}
                        <div className="flex items-center mt-8">
                            <hr className="flex-grow border-t border-[#003581]" />
                            <span className="px-3 text-2xl text-bold text-[#003581]"> Les avantages d’une réservation de vol pas cher sur Tunisiebooking.com</span>
                            <hr className="flex-grow border-t border-[#003581]" />
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 text-base text-center mt-4 ${expandedSections.section2 ? 'max-h-none' : 'max-h-[6rem]'}`}>
                            <p>
                                Vous devez savoir en amont que Tunisiebooking.com est une plateforme d’offre de voyage. À ce titre, elle ne met pas uniquement en concurrence le prix des billets d’avion, mais également celui des hôtels et hébergements. Le site vous propose en plus différentes attractions incontournables d’une région à une autre de la Tunisie. En somme, la page vous est d’un grand secours dans l’organisation de votre escale. En outre, Tunisiebooking.com afficher plus de sites de réservation de vol que certains de ses concurrents. Ici, vous avez l’assurance de trouver votre billet d’avion au meilleur prix. La navigabilité de la page a été peaufinée afin d’en faciliter l’utilisation par les internautes. Pour peu que l’on ait une connexion internet, elle est accessible de n’importe où.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Découvrez notre top destinations</h3>
                            <p className="text-center">
                                Les différentes compagnies aériennes qui desservent la Tunisie proposent plusieurs destinations par delà le monde. Certaines sont notamment très renommées, et d’autres non.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Les abordables capitales européennes</h3>
                            <p className="text-center">
                                Paris fait bien évidemment partie des destinations les plus demandées en Europe. Les familles tunisiennes sont nombreuses à se laisser tenter par la beauté et la culture occidentale de la ville de lumière. Mais attention, ce n’est pas la seule option abordable. Pour quelques centaines de dinars, vous pouvez également faire un voyage à Rome à moindre coût. La gastronomie, le romantisme dans l’air et la culture : ce sont autant de raison qui a propulsé cette ville parmi les incontournables.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">L’océan Indien</h3>
                            <p className="text-center">
                                Envie d’un voyage un peu exotique ? Grand bien vous fasse ! Plusieurs petites îles y sont disponibles : Sainte-Marie, Sainte Luce ou même Madagascar. Le prix des billets varie selon la saison. Mais le cadre y est propice à un dépaysement total.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Le plus grand continent : Asie</h3>
                            <p className="text-center">
                                L’Asie est surtout une option pour les geeks et les férus de cultures. Dans le plus grand continent, les destinations se déclinent en plusieurs sortants. Néanmoins, Tokyo l’emporte dans le cœur des particuliers. Outre la modernité de la ville, la présence de la culture nippone et l’importance des traditions en a fait le renom dans le monde entier. Par contre, si vous cherchez une aventure glamour et à voyager dans le luxe, Dubaï est une bien meilleure alternative.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Afrique</h3>
                            <p className="text-center">
                                L’Asie est surtout une option pour Et puis finalement si vous avez envie d’un peu d’aventure, voire même de safari, l’Afrique est l’idéal. Amoureux de grand espace ou envie d’un trek en pleine forêt : vous tombez bien. Tanzanie, Afrique du Sud et bien d’autres encore vous attendent.
                            </p>
                        </div>
                        {/* Toggle Button */}
                        <div className="flex justify-center mt-4">
                            <button
                                aria-label="Toggle content"
                                onClick={() => toggleContent('section2')}
                                className="text-[#003581] hover:no-underline flex items-center space-x-2"
                            >
                                <span>{expandedSections.section2 ? "Afficher moins" : "Afficher plus"}</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`transition-transform duration-300 ${expandedSections.section2 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </button>
                        </div>
                        {/* Dividerrrr */}
                        <div className="flex items-center mt-8">
                            <hr className="hidden sm:block flex-grow border-t border-[#003581]" />
                            <img
                                src="/icon_clock_vol.jpg"
                                alt="star"
                                className="ml-2"
                            />
                            <span className="px-3 text-2xl sm:text-2xl font-normal text-[#003581] text-center">
                                Dernières recherches Vols Pas Chers
                            </span>
                            <img
                                src="/icon_clock_vol_mir.jpg"
                                alt="star"
                                className="block sm:hidden ml-2"
                            />
                            <hr className="hidden sm:block flex-grow border-t border-[#003581]" />
                        </div>
                        {/* 1st set of buttons */}
                        <div className="mx-4 sm:mx-16 mt-4 mb-6">
                            <div className="grid grid-cols-3 gap-4">
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Tunis Djerba
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Tunis Paris
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Tunis Marseille
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* 2nd set of buttons */}
                        <div className="mx-4 sm:mx-16 my-2">
                            <div className="grid grid-cols-3 gap-4">
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Monastir Paris
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Djerba Paris
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Djerba Marseille
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <VolFooter />

            </div>
        </>
    );
};

export default VolsPasCherPage;

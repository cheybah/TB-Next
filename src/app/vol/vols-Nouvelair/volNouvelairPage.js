"use client";

import React, { useState } from "react";

import MoteurVol from "../components/MoteurVol";

import Header from "@/app/components/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AccordionClient from "@/app/components/Accordion/AccordionClient";
import VolFooter from "../components/VolFooter";




const VolsNouvelairPage = () => {

    const [expandedSections, setExpandedSections] = useState({
        section1: false,
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
                    <h1 className="text-[41px] text-black font-normal mb-4">VOL Nouvelair - Comparez et réservez !</h1>
                    <div className="max-w-sm w-full lg:max-w-full border-2 border-[white] rounded-md bg-[white] py-4 px-2 sm:px-6">
                    <p>
                            Depuis toujours, la compagnie Nouvel air propose à sa clientèle des vols charters. En effet, en tant que membre d’une importante entreprise touristique, elle est spécialisée dans le transport de touristes, surtout européens. Ces vols emmènent ceux-ci vers les destinations touristiques tunisiennes les plus appréciées. Tout est organisé pour que les touristes qui empruntent un Vol Nouvel air apprécient le confort en cabine.
                        </p>

                        {/* Images Section */}
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 mt-8">
                            <img
                                src="/nouvelair1.png"
                                alt="Nouvelair 1"
                                className="w-full h-auto rounded-md"
                            />
                            <img
                                src="/nouvelair2.png"
                                alt="Nouvelair 2"
                                className="w-full h-auto rounded-md"
                            />
                            <img
                                src="/nouvelair3.png"
                                alt="Nouvelair 3"
                                className="w-full h-auto rounded-md"
                            />
                        </div>

                        {/* Dividerrrr */}
                        <div className="flex items-center mt-8 mb-4">
                            <hr className="flex-grow border-t border-[#003581]" />
                            <span className="px-3 text-2xl text-bold text-[#003581]"> Connaissons un peu plus Nouvelair</span>
                            <hr className="flex-grow border-t border-[#003581]" />
                        </div>
                        {/* Paragraph */}
                        <p className="text-base text-center">
                            Pour votre vol Tunisie, il vous suffit d’entrer toutes les informations requises par le site et valider. Apres quoi, vous aurez automatiquement toutes les listes des vols disponibles : vol direct, vol low cost, vol charter ou encore vol régulier. Vous n’aurez plus qu’à choisir.
                        </p>

                        {/* Second Paragraph and Toggling Content */}
                        <div className={`overflow-hidden transition-all duration-300 text-base text-center ${expandedSections.section1 ? 'max-h-none' : 'max-h-[6rem]'}`}>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">L’historique de la compagnie Nouvel air</h3>
                            <p className="text-center">
                                Nouvel air est la première compagnie aérienne privée en Tunisie. Elle a été fondée en 1989 et constitue l’une des principales entreprises du groupe Tunisian Travel Service. La compagnie a maintenant acquis la réputation de spécialiste du voyage pas cher en Tunisie.
                                Actuellement, la compagnie dessert plus de 130 aéroports européens éparpillés dans plus de 30 pays, dont la France, l’Allemagne, la Pologne, le Danemark, la Norvège, la Suède, la Hollande, la Belgique ou la Russie. De ces pays, un Vol Nouvel air pas cher amènera les visiteurs vers la Tunisie où ils sont accueillis avec un verre de thé de l'amitié, un brin de jasmin et surtout un sourire spontané. La compagnie Nouvel air est reconnue pour la modernité et la performance de sa flotte. Elle dispose actuellement de 12 appareils de type Airbus A320, et de deux avions de type A321.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Services à bord !</h3>
                            <p className="text-center">
                                Tout un éventail de produits en Duty Free est proposé à bord des appareils Nouvel air. Ces produits vont des parfums, pour femmes et hommes, aux bijoux de marque, en passant par les produits cosmétiques et les cadeaux de souvenirs. La liste de tous ces produits peut être consultée dans le catalogue qui est disponible à bord. Pour faciliter le shopping, ce dernier peut aussi être consulté sur le site web de la compagnie. En vol, vos achats peuvent être réglés en espèces ou par carte bancaire internationale. Le magazine de bord de Nouvel air est aussi disponible à bord de ses avions. Celui-ci permet d’avoir un aperçu des principales destinations ainsi que les différentes régions de Tunisie. Toutes les informations concernant la compagnie : renseignements, flotte et équipages, histoire et son réseau figurent dans le magazine. En ce qui concerne le repas à bord, un large choix de menus sélectionnés qui varient en fonction des saisons est proposé en vol. C’est le passager lui-même qui choisit son plat. Pour ceux qui ont un régime alimentaire particulier, Nouvel air peut leur préparer des menus spéciaux. Pour ce qui est de la Nouvel air bagage, chaque passager peut voyager avec un bagage à main de 5 kg au plus pour la majorité des destinations. Exceptionnellement, ce poids peut atteindre 10 kg pour les vols charters vers la France. Pour les passagers qui voyagent avec un bébé ayant un âge inférieur à deux ans, la compagnie offre 10 kg gratuits de plus afin que le transport de landau, de siège auto ou encore de poussette ne soit pas un problème. Les bagages en soute disposent d’une franchise gratuite de 20 kg, sans considération de passagers ni de vols, à l’exception de ceux qui vont en France ou qui en viennent en vol charter car ils ont droit à 5 kg supplémentaires.                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Programme de fidélité</h3>
                            <p className="text-center">
                                La compagnie ne propose pas de programme de fidélité avec carte de membre et cumul de miles. Cependant, des services supplémentaires sont accessibles via son site internet. Avec ces services, la compagnie offre une meilleure expérience de voyage. Ceux-ci concernent entre autres le transport d’équipements sportifs pour les adeptes du sport en vacances, la prise en charge des animaux de compagnie etc…. En bref, toute une liste de prestation est proposée aux voyageurs pour leur permettre de composer un vol à la carte et sur mesure.
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

                        {/* Dividerrrr */}
                        <div className="flex items-center mt-8">
                            <hr className="flex-grow border-t border-[#003581]" />
                            <span className="px-3 text-2xl text-bold text-[#003581]">Trouvez un vol Nouvel air pas cher avec Tunisiebooking.com</span>
                            <hr className="flex-grow border-t border-[#003581]" />
                        </div>

                        <div className={`overflow-hidden transition-all duration-300 text-base text-center mt-4 ${expandedSections.section2 ? 'max-h-none' : 'max-h-[6rem]'}`}>
                            <p>
                                Pour ceux qui ont besoin d’aide pour effectuer la réservation, Nouvel air assistance peut être joint au +216 70 02 09 00 ou 81 100 150 depuis la Tunisie, ou sur : call.center@Nouvel air.com.tn. Il est possible de réserver via le site web de la compagnie en précisant le numéro de son dossier ainsi que son numéro de téléphone. Malheureusement, Nouvel air enregistrement en ligne n’est pas encore disponible. Le Nouvel air avis peut être consulté sur AIR VALID qui met à disposition des clients presque toutes les informations nécessaires concernant les compagnies aériennes régulières.
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Top Itinéraires proposés par Nouvel air</h3>
                            <p className="text-center">
                                Des prestigieuses destinations touristiques vous sont proposées à partir de Tunis, Monastir, Hammamet ou Djerba : Djeddah la Sirène de la Mer Rouge ; Toulouse la ville rose et capitale du Sud-ouest ; Strasbourg la capitale de l’Alsace ; Nice la vieille ville de la Côte d’Azur Düsseldorf et la Rhénanie ; Lille la capitale du nord de la France ; Moscou la ville autour du Kremlin ; Paris la ville des lumières ; Stockholm le berceau des vikings…
                            </p>
                            <h3 className="text-left text-lg font-semibold mt-4 text-center">Nouvel Air: Partez au meilleur prix !</h3>
                            <p className="text-center">
                                Réputée être le spécialiste du voyage lowcost en Tunisie, vous pouvez donc aller depuis la Tunisie ou inversement, venir de n’importe quel pays d’Europe, en Tunisie, avec les offres vols pas chers de Nouvel air.
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
                        {/* 1st set of buttons */}
                        <div className="mx-4 sm:mx-16 mt-4 mb-6">
                            <div className="grid grid-cols-3 gap-4">
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Tunis Paris
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
                                    Vols Tunis Marrakech
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
                                    Vols Tunis Dubai
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Monastir Marseille
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="bg-transparent hover:bg-[#003581] text-[#003581] font-semibold hover:text-white py-2 px-4 border-2 border-[#003581] hover:border-transparent rounded w-full flex items-center justify-center">
                                    Vols Tunis Istanbul
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 ml-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Dividerrrr */}
                        <div className="flex items-center mt-8">
                            <hr className="hidden sm:block flex-grow border-t border-[#003581]" />
                            <img
                                src="/star_vol.jpg"
                                alt="star"
                                className="ml-2"
                            />
                            <span className="px-3 text-2xl sm:text-2xl font-normal text-[#003581] text-center">
                                Dernières recherches Vols Pas Chers
                            </span>
                            <img
                                src="/star_vol.jpg"
                                alt="star"
                                className="block sm:hidden ml-2"
                            />
                            <hr className="hidden sm:block flex-grow border-t border-[#003581]" />
                        </div>

                        <div className="mt-2">
                            <AccordionClient
                                title={`Quels sont les pays desservis par Nouvelair ?`}
                                content="Nouvel air est une grande compagnie aérienne qui sert notamment les pays nord-Africains : Djerba, Tunis, et l’Europe. Elle compte au total 130 aéroports possibles."
                                index={1}
                            />
                            <AccordionClient
                                title={`Combien d’avions compte la flotte de Nouvel air ?`}
                                content="Nouvel air dispose de 28 avions pour assurer les vols entre les différents pays qu’il dessert. On compte dans le lot un Airbus 320 et un Airbus 321."
                                index={2}
                            />
                            <AccordionClient
                                title={`Quel est le jour le moins cher pour réserver un vol Nouvel air ?`}
                                content="Le prix du vol Nouvel air varie en fonction des saisons et des mois de l’année. La compagnie propose toutefois ses meilleures offres à la toute dernière minute à savoir pendant l’été et vers la fin de l’année."
                                index={3}
                            />
                            <AccordionClient
                                title={`Combien de kg de bagages à main acceptés chez Nouvel air ?`}
                                content="La compagnie impose des conditions strictes pour les bagages en cabine. Ils ne doivent notamment dépasser les 10 kg."
                                index={4}
                            />
                            <AccordionClient
                                title={`Combien de kg de bagages en soute acceptés chez Nouvel air ?`}
                                content="Pour les bagages en soute, vous ne devez dépasser les 32 kilos avec des pénalités de bagages excédents dont 20 kg de bagages gratuits."
                                index={5}
                            />
                            <AccordionClient
                                title={`Combien y a-t-il de vols Nouvel air par semaine ?`}
                                content="En moyenne, il y a une trentaine de vols programmés par semaine chez la compagnie aérienne Nouvel air."
                                index={6}
                            />
                            <AccordionClient
                                title={`Ya-t-il des frais appliqués par Nouvel air en cas de modification ou annulation de la réservation ?`}
                                content="Oui. Les frais dépendent des changements à faire ou du délai d’annulation de la réservation."
                                index={7}
                            />
                            <AccordionClient
                                title={`Les demandes de modification de la réservation Nouvel air peuvent être acceptées en ligne ?`}
                                content="Pour modifier ou annuler votre réservation, vous pouvez procéder par mail en respectant les conditions d’horaires imposés par la compagnie."
                                index={8}
                            />
                            <AccordionClient
                                title={`Où se trouve le siège de Nouvel air ?`}
                                content="A savoir que le siège de la compagnie Nouvel air se trouve à Monastir, Tunis."
                                index={9}
                            />
                            <AccordionClient
                                title={`Comment trouver des vols Nouvel air pas chers chez TunisieBooking ?`}
                                content="Sur TunisieBooking, vous avez la possibilité de réserver des vols via Nouvel air moins cher. Il vous suffit d’entrée vos critères de recherche dans le formulaire de comparatif."
                                index={10}
                            />
                            <AccordionClient
                                title={`Quel est le meilleur prix pour un vol aller-retour Nouvel air  selon les saisons ?`}
                                content="Selon les saisons et la destination choisit, le vol aller-retour Nouvel air peut vous couter entre 50 et 200 euros."
                                index={11}
                            />
                        </div>
                    </div>
                </div>
                <VolFooter />
            </div>
        </>
    );
};

export default VolsNouvelairPage;
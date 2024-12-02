"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const PresentationCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section id="presentation">
            <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                <div className="relative overflow-hidden rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="text-left mt-4">
                            <div className="text-2xl font-bold">Présentation</div>
                            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
                            <h3 className="text-left text-lg font-semibold mt-4">Infos Pratiques :</h3>
                            
                            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-none' : 'max-h-[6rem]'}`}>
                                <p>
                                    Pour découvrir et profiter à bon escient de tous les vestiges de Tunis, Vous devez choisir une ville où vous allez axer votre voyage de luxe.
                                    <br /> Dans ce cas, pourquoi ne pas opter pour Hammamet ? C'est l'une des plus belles villes de la Tunisie.
                                </p>
                                <div className="mt-4">
                                    <p>
                                        Elle est accessible et peut vous offrir toute une panoplie d'activités et loisir, de plus, vous pouvez profiter ici de El Mouradi.
                                    </p>
                                    <h3 className="text-left text-lg font-semibold mt-4">Situation de l'hôtel :</h3>
                                    <p>
                                        Au cœur de la station balnéaire de Yasmine Hammamet, sur une superbe plage de sables fins dorée.<br />
                                        A quelques kilomètres au sud de la Ville d&apos;Hammamet, vous découvrirez un grand hôtel 4 étoiles : El Mouradi El Menzeh.<br />
                                        C&apos;est une grande bâtisse blanche rénovée, aux airs un peu palais que vous ne pourrez pas rater.<br />
                                        Il se trouve qu&apos;à quelques kilomètres à peine des parcs d&apos;attractions de la ville.
                                    </p>
                                    <h3 className="text-left text-lg font-semibold mt-4">Les types d'hébergements que puis-je réserver à l'établissement :</h3>
                                    <p>
                                        L&apos;hotel possède 395 chambres, parmi ces derniers, vous avez le choix entre plusieurs types des chambres. <br />
                                        El Mouradi El Menzah est aussi l&apos;une des rares à proposer des suites à ses clients. <br />
                                        Chaque chambre de cet établissement 4 étoiles a été créée dans un esprit de confort et de modernité. <br />
                                        Elles sont dotées d&apos;un matelas confort, qui pour le cas d&apos;une chambre standard avec enfant, peut-être accompagné d&apos;un lit pour petit. <br />
                                        Chacune d&apos;entre elles dispose de tous les matériels nécessaires au confort des clients. <br />
                                        Une terrasse privative d&apos;où vous pourrez jouir d&apos;une superbe vue sur la mer ou sur le jardin verdoyant.<br />
                                        En outre, dans tout l&apos;établissement, vous pouvez profiter d&apos;un Wi-Fi gratuit pendant tout le séjour.
                                    </p>
                                    <h3 className="text-left text-lg font-semibold mt-4">Restaurants et Bars sur place :</h3>
                                    <p>
                                        Deux restaurants assurent votre confort pendant toute la durée de votre séjour. <br />
                                        Les plats typiques de la région, comme des menus internationaux sont servis tous les jours sous forme de buffet. <br />
                                        Dans un décor original, traditionnel et moderne, vous aurez l&apos;occasion de gouter aux spécialités culinaires de la Tunisie. <br />
                                        Dans chacune des restaurants, des chefs étoilés et une équipe professionnelle assurent le service.<br />
                                        Vous pouvez ainsi profiter de la belle vue au bord de la mer et commencer la journée du bon pied. <br />
                                        Il est à noter que les petits-déjeuners sont compris dans le prix de la chambre.<br />
                                        Outre les restaurants, vous pouvez aussi gouter aux quelques cocktails locaux avec les deux bars qui sont présents. <br />
                                        L&apos;un des bars vous assure un séjour agréable en vous servant de petites collations en tout genre au bord de la piscine. <br />
                                        Boissons alcoolisées ou non, quelques représentations et une ambiance chaleureuse discothèque y est disponibles tous les soirs. <br />
                                    </p>
                                    <h3 className="text-left text-lg font-semibold mt-4">Activités et loisirs disponibles :</h3>
                                    <p>
                                        Quand on parle El Mouradi El Menzah 4 étoiles en Tunisie, il est obligatoire de trouver au moins une piscine extérieure. <br />
                                        Outre cette dernière, vous avez aussi à disposition une piscine couverte ouverte de 09 h à 18 h. <br />
                                        Pour les baignades à la plage, profitez de la plage privée de l&apos;hôtel Hammamet. <br />
                                        Sachez aussi que l&apos;établissement possède une salle de Fitness. <br />
                                        Une salle de sport dont un court de tennis pour ceux qui souhaitent se lancer dans une petite compétition amicale. <br />
                                        Pour ceux et celles qui prônent la détente avant tout, profitez du Thalassothérapie et Spa de l&apos;établissement.
                                    </p>
                                    <h3 className="text-left text-lg font-semibold mt-4">Les plus de l&apos;hotel El Mouradi El Menzah  4*, TunisieBooking :</h3>
                                    <p>
                                        L&apos;hotel est bien situé, au cœur de la station touristique de Yasmine Hammamet. <br />
                                        Avec un rapport qualité luxueux, face à une très belle plage d&apos;eau douce et à proximité du parc “Carthage Land”.<br />
                                        Pour plus d&apos;informations, rendez-vous dans l&apos;une de nos agences de voyage les plus proches de chez-vous.
                                    </p>
                                </div>
                            </div>
                            
                            <button
                                aria-label="Toggle content"
                                onClick={toggleContent}
                                className="mt-4 text-blue-500 hover:no-underline flex items-center space-x-2"
                            >
                                <span>{isExpanded ? "Afficher moins" : "Afficher plus"}</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PresentationCard;

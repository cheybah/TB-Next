"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header/Header";
import CardComponent from "./CardComponent";
import Image from "next/image";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Footer from '../components/Footer/Footer';

export default function HotelAvecTobogganPage() {
  const [expandedSections, setExpandedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const toggleContent = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const [activeTab, setActiveTab] = React.useState("hammamet");

  const data = [
    {
      label: "Hammamet",
      sublabel: "3 Hôtels",
      value: "hammamet",
      desc: (
        <div>
          {[
            {
              title: "Hammamet Garden Resort & Spa",
              imageUrl:
                "https://image.resabooking.com/images/image_panoramique/hammamet_garden_resort_&_spa_2.jpg",
              rating: "4",
              tripAdvisorNote: "3.5/5",
              tripAdvisorLabel: "Bien",
              onButtonClick: () => console.log("Redirecting to Hammamet..."),
              showBadge: true, 
            },
            {
              title: "Golden Tulip President Hammamet",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Golden_Tulip_President_Hammamet_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Hammamet..."),
              showBadge: false, // Show badge for this card

            },
            {
              title: "Medina Diar Lemdina",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Medina_Diar_Lemdina_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.5/5",
              tripAdvisorLabel: "Excellent",
              onButtonClick: () => console.log("Redirecting to Hammamet..."),
              showBadge: false, // Show badge for this card

            },
          ].map((cardData, index) => (
            <CardComponent key={index} {...cardData} />
          ))}
        </div>
      ),
    },
    {
      label: "Sousse",
      sublabel: "8 Hôtels",
      value: "sousse",
      desc: (
        <div>
          {[
            {
              title: "Sousse City & Beach Hotel",
              imageUrl:
                "https://image.resabooking.com/images/hotel/Sousse_City_&_Beach_Hotel_.jpg",
              rating: "3",
              tripAdvisorNote: "3.0/5",
              tripAdvisorLabel: "Moyen",
              onButtonClick: () => console.log("Redirecting to Sousse..."),
              showBadge: true, 
            },
            {
              title: "Soviva Resort & Aquapark",
              imageUrl: "https://image.resabooking.com/images/hotel/Soviva_Resort_.jpg",
              rating: "3",
              tripAdvisorNote: "3.0/5",
              tripAdvisorLabel: "Moyen",
              onButtonClick: () => console.log("Redirecting to Sousse..."),
              showBadge: true, // Show badge for this card

            },
            {
              title: "Hotel KANTA",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Hotel_KANTA_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Sousse..."),
              showBadge: true, // Show badge for this card
            },
            {
              title: "Marhaba Club",
              imageUrl:
                "https://image.resabooking.com/images/image_panoramique/Marhaba_Club_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Sousse..."),
              showBadge: true, 
            },
            {
              title: "Abou Sofiane Hotel & Aquapark",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Abou_Sofiane_Hotel_&_Aquapark_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Sousse..."),
              showBadge: false, // Show badge for this card

            },
            {
              title: "Occidental Sousse Marhaba",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Occidental_Sousse_Marhaba_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Sousse..."),
              showBadge: true, // Show badge for this card
            },
            {
              title: "Riviera",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Riviera_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Sousse..."),
              showBadge: true, // Show badge for this card
            },
            {
              title: "Jaz Tour Khalef",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Jaz_Tour_Khalef_2.jpg",
              rating: "5",
              tripAdvisorNote: "4.5/5",
              tripAdvisorLabel: "Excellent",
              onButtonClick: () => console.log("Redirecting to Sousse..."),
              showBadge: false, // Show badge for this card
            },
          ].map((cardData, index) => (
            <CardComponent key={index} {...cardData} />
          ))}
        </div>
      ),
    },
    {
      label: "Monastir",
      sublabel: "5 Hôtels",
      value: "monastir",
      desc: (
        <div>
          {[
            {
              title: "Skanes Serail & Aquapark",
              imageUrl:
                "https://image.resabooking.com/images/image_panoramique/Skanes_Serail_&_Aquapark_2.jpg",
              rating: "4",
              tripAdvisorNote: "3.5/5",
              tripAdvisorLabel: "Bien",
              onButtonClick: () => console.log("Redirecting to Monastir..."),
              showBadge: true, 
            },
            {
              title: "Amir Palace",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Amir_Palace_2.jpg",
              rating: "4",
              tripAdvisorNote: "3.5/5",
              tripAdvisorLabel: "Bien",
              onButtonClick: () => console.log("Redirecting to Monastir..."),
              showBadge: true, // Show badge for this card

            },
            {
              title: "Delphin EL Habib",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Delphin_EL_Habib_2.jpg",
              rating: "4",
              tripAdvisorNote: "3.5/5",
              tripAdvisorLabel: "Bien",
              onButtonClick: () => console.log("Redirecting to Monastir..."),
              showBadge: true, // Show badge for this card
            },
            {
              title: "Blue Beach Golf & Spa",
              imageUrl:"https://image.resabooking.com/images/image_panoramique/Blue_Beach_Golf_&_Spa_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.5/5",
              tripAdvisorLabel: "Excellent",
              onButtonClick: () => console.log("Redirecting to Monastir..."),
              showBadge: true, 
            },
            {
              title: "Iberostar Kuriat Palace",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Iberostar_Kuriat_Palace_2.jpg",
              rating: "5",
              tripAdvisorNote: "4.5/5",
              tripAdvisorLabel: "Excellent",
              onButtonClick: () => console.log("Redirecting to Monastir..."),
              showBadge: false, // Show badge for this card

            },
          ].map((cardData, index) => (
            <CardComponent key={index} {...cardData} />
          ))}
        </div>
      ),
    },
    {
      label: "Mahdia",
      sublabel: "2 Hôtels",
      desc: (
        <div>
          {[
            {
              title: "Thapsus Beach Resort",
              imageUrl:
                "https://image.resabooking.com/images/image_panoramique/Thapsus_Beach_Resort_2.jpg",
              rating: "4",
              tripAdvisorNote: "3.5/5",
              tripAdvisorLabel: "Bien",
              onButtonClick: () => console.log("Redirecting to Mahdia..."),
              showBadge: true, 
            },
            {
              title: "Mahdia Beach & Aquapark",
              imageUrl: "https://image.resabooking.com/images/hotel/Mahdia_Beach_&_Aquapark_.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Mahdia..."),
              showBadge: true, // Show badge for this card
            },
          ].map((cardData, index) => (
            <CardComponent key={index} {...cardData} />
          ))}
        </div>
      ),
    },
    {
      label: "Djerba",
      sublabel: "7 Hôtels",
      value: "djerba",
      desc: (
        <div>
          {[
            {
              title: "Djerba Aqua Resort",
              imageUrl:
                "https://image.resabooking.com/images/image_panoramique/Djerba_Aqua_Resort_2.jpeg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Djerba..."),
              showBadge: true, 
            },
            {
              title: "Djerba Castille",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Djerba_Castille_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Djerba..."),
              showBadge: true, // Show badge for this card

            },
            {
              title: "The Ksar",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/The_Ksar_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Djerba..."),
              showBadge: false, // Show badge for this card
            },
            {
              title: "Caribbean World Djerba",
              imageUrl:
                "https://image.resabooking.com/images/image_panoramique/Caribbean_World_Djerba_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Djerba..."),
              showBadge: true, 
            },
            {
              title: "Djerba Sun Beach",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Jerba_Sun_Club_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Djerba..."),
              showBadge: true, // Show badge for this card

            },
            {
              title: "Riad Meninx",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Riad_Meninx_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Djerba..."),
              showBadge: true, // Show badge for this card
            },
            {
              title: "Club Palm Azur",
              imageUrl: "https://image.resabooking.com/images/image_panoramique/Club_Palm_Azur_2.jpg",
              rating: "4",
              tripAdvisorNote: "4.0/5",
              tripAdvisorLabel: "Très Bien",
              onButtonClick: () => console.log("Redirecting to Djerba..."),
              showBadge: true, // Show badge for this card
            },
          ].map((cardData, index) => (
            <CardComponent key={index} {...cardData} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-[15rem]">
        <div className="w-full mx-auto">
          <Image
            src="/thematiq-min_(2).png"
            alt="Hotel avec Toboggan"
            width={1200}
            height={600}
            className="w-full h-auto" />
        </div>
        <Tabs id="custom-animation" value={activeTab} className="mt-6">
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className: "bg-transparent border-b-2 border-gray-200 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, sublabel, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`${activeTab === value ? "text-gray-900 bg-gray-200" : ""} px-4 py-2 rounded-t-md`}
              >
                {label}
                <div className="text-sm text-gray-700">{sublabel}</div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}
                className={`${activeTab === value ? "bg-gray-200" : ""} p-4 `}
              >
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>

        <div className="text-left mt-4">

          <div className="text-2xl font-bold">Hotel Avec Toboggan : Tout le monde y trouve son bonheur 100% glisse!
          </div>
          <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
          <div className={`overflow-hidden transition-all duration-300 ${expandedSections.section1 ? 'max-h-none' : 'max-h-[6rem]'}`}>
            <p className='mt-4'>
              Vous etes a la recherche d une destination pour vos vacances ? Pourquoi ne pas choisir de visiter le beau pays qu'est la Tunisie. Pourquoi faire ce choix? Parmi les nombreux arguments que l'on pourrait vous soumettre, le climat est sans aucun doute celui qui peut faire toute la difference.
            </p>
            <div className="mt-4">
              <p>
                Le sait tous que le climat du pays est chaud et sec lors des vacances d'ete, en hiver, il y fait plus frais et doux,<br />
                en particulier dans le sud. La temperature varie aux alentours de 13 C durant le mois d'hiver. Ce qui ne vous empechera surement pas de profiter des diverses attractions aquatiques que plusieurs hotels du pays proposent. Les hotel avec toboggan sont nombreux en Tunisie. Ils vous offrent diverses activites pour rendre votre séjour inoubliables.
              </p>
            </div>
          </div>
          <button onClick={() => toggleContent('section1')} className="mt-0 text-blue-500 flex items-center space-x-2">
            <span>{expandedSections.section1 ? "Afficher moins" : "Afficher plus"}</span>
            <FontAwesomeIcon icon={faChevronDown} className={`transition-transform duration-300 ${expandedSections.section1 ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>

        <div className="text-left mt-4">
          <div className="text-2xl font-bold">Découvrez les toboggans d'hotel les plus fous en Tunisie :
          </div>
          <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
          <div className={`overflow-hidden transition-all duration-300 ${expandedSections.section2 ? 'max-h-none' : 'max-h-[6rem]'}`}>
            <p className='mt-4'>
              Vous avez fait le choix de vivre une experience unique dans ce splendide pays? Voici une liste des meilleurs hotel avec toboggan aquatique tunisie ou vous ne risquez pas de vous ennuyer, que vous avez choisi de faire un petit sejour en solitaire, avec un groupe d'amis ou encore mieux, avec toute la famille.
            </p>
            <h3 className="text-left text-lg font-semibold mt-4">Toboggan aquatique a Hammamet :</h3>
            <p>
              Se situant au nord-est du pays, Hammamet fait partie des principales stations balneaires de la Tunisie.
              On y trouve les meilleures attractions aquatiques du pays, parmi les hotel avec toboggan aquatique a hammamet, on peut citer l'hotel 4 etoiles Hammamet.Le Zodiac avec ses deux piscines interieure et exterieure, la piscine interieure est chauffee. Le Zodiac propose une des meilleures attractions aquatiques de la ville de Hammamet avec son somptueux toboggan. Mais parmi les hotels avec toboggan hammamet yasmine, on a aussi l'hotel Yasmine Beach qui propose un excellent service.
            </p>
            <h3 className="text-left text-lg font-semibold mt-4">Hotel avec Toboggan à Djerba :</h3>
            <p>
              Magnifique ville situee dans la mediterranee, Djerba fait en tout 514 km2. La legende raconte qu'Ulysse aurait traverse la ville lors de son voyage de retour. L'hotel Club Caribbean est un hotel avec toboggan djerba se trouvant sur la cote ouest de la ville de Djerba.
              En plus de sa piscine avec toboggan, il propose aussi diverses attractions aquatiques pour enfants.
            </p>
            <h3 className="text-left text-lg font-semibold mt-4">Hotel avec Toboggan à Sousse : </h3>
            <p>
              Superbe ville portuaire situee a l'Est du pays, Sousse, aussi connue du grand public sous le surnom perle du Sahel est la 3eme plus grande ville de Tunisie. Elle propose divers sites historiques, dont sa medina qui fait partie du patrimoine mondial de l'UNESCO a partir de 1988. Parmi les nombreux hotel avec toboggan sousse Tunisie, on a Tej Marhaba qui est un complexe touristique situe a seulement 1km du centre-ville.
              Il propose plusieurs activites, dont deux piscines pour adultes et une pour enfant.
            </p>
            <h3 className="text-left text-lg font-semibold mt-4">Hotel avec Toboggan à Mahdia : </h3>
            <p>
              Situee a plus de 200 km dans l Est de la Tunisie, Mahdia est une belle ville cotiere du pays. Elle est surtout connue pour son port de peche qui a ete le tout premier jamais construit dans la ville. L'hotel avec toboggan mahdia Beach est un des meilleurs hotel de la ville de Mahdia. Enseigne 4 etoiles, Mahdia Beach propose 3 splendides piscines, dont une magnifique piscine exterieure disposant de toboggan.
              Mais on a aussi une piscine pour enfant et une exterieure.
            </p>
            <h3 className="text-left text-lg font-semibold mt-4">Hotel avec Toboggan à Monastir : </h3>
            <p>
              Monastir se trouve a quelques 20 km a l est de la ville de Sousse, belle ville cotiere du Sahel, Monastir est installe sur une presqu ile du sud-est du golf d'Hammamet.
              Le Sahara Beach fait partie des hotels avec toboggan Monastir les plus connus de la ville.
            </p>
          </div>
          <div>
            <button onClick={() => toggleContent('section2')} className="mt-0 text-blue-500 flex items-center space-x-2">
              <span>{expandedSections.section2 ? "Afficher moins" : "Afficher plus"}</span>
              <FontAwesomeIcon icon={faChevronDown} className={`transition-transform duration-300 ${expandedSections.section2 ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </div>

          <div className="text-left mt-4">
            <div className="text-2xl font-bold">Pensez aux vacances en hotel avec Toboggan Aquatiques !
            </div>
            <div className="w-[5rem] h-[4px] bg-black mt-2"></div>
            <div className={`overflow-hidden transition-all duration-300 ${expandedSections.section3 ? 'max-h-none' : 'max-h-[6rem]'}`}>                    <p className='mt-4'>
              Parmi les divers avantages de choisir un hotel avec toboggan est sans aucun doute la garantie d'un sejour dans la bonne humeur et loin de l ennui. Mais avant tout, il faut bien choisir son pays de destination en fonction de son climat.                         </p>
              <div className="mt-4">
                <p>
                  Tunisie dispose de tous ces atouts, pour vos prochaines vacances, n'oubliez pas de reserver un hotel avec toboggan Tunisie.
                </p>
              </div>
            </div>
          </div>

          <button onClick={() => toggleContent('section3')} className="mt-0 text-blue-500 flex items-center space-x-2">
            <span>{expandedSections.section3 ? "Afficher moins" : "Afficher plus"}</span>
            <FontAwesomeIcon icon={faChevronDown} className={`transition-transform duration-300 ${expandedSections.section3 ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

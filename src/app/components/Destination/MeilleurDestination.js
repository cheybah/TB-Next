"use client";
import React from "react";
import './Destination3Stars.css';

const hotelsByRegion = [
  {
    region: "Djerba",
    hotels: [
      { name: "Vincci Helios Beach",img:"/Vincci_Helios_Beach_2.jpg", categorie: 4, note_trip: 4.5, text_trip: "Excellent" },
      { name: "Radisson Blu Palace Resort et Thalasso",img:"/Radisson_Blu_Palace_Resort_et_Thalasso_2.jpg", categorie: 5, note_trip: 4.0, text_trip: "Très Bien" },
      { name: "The Ksar",img:"/The_Ksar_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" }
    ]
  },
  {
    region: "Monastir",
    hotels: [
      { name: "Delphin EL Habib",img:"/Delphin_EL_Habib_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" },
      { name: "Skanes Serail & Aquapark",img:"/Skanes_Serail_&_Aquapark_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" },
      { name: "Regency Hotel & Spa Monastir",img:"/Regency_Hotel_&_Spa_Monastir_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" }
    ]
  },
  {
    region: "Sousse",
    hotels: [
      { name: "Marhaba Royal Salem",img:"/Marhaba_Royal_Salem_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" },
      { name: "Marhaba Palace",img:"/Marhaba_Palace_2.jpg", categorie: 5, note_trip: 4.0, text_trip: "Très Bien" },
      { name: "Marhaba Salem Resort", img:"/Marhaba_Salem_Resort_2.jpg",categorie: 4, note_trip: 4.0, text_trip: "Très Bien" }
    ]
  },
  {
    region: "Hammamet",
    hotels: [
      { name: "Sol Azur Beach Congres",img:"/Sol_Azur_Beach_Congres_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" },
      { name: "Royal Azur Thalassa",img:"/Royal_Azur_Thalassa_2.jpg", categorie: 5, note_trip: 4.0, text_trip: "Très Bien" },
      { name: "Royal Tulip Taj Sultan", img:"/Royal_Tulip_Taj_Sultan_2.jpg",categorie: 5, note_trip: 4.0, text_trip: "Très Bien" }
    ]
  },
  {
    region: "Tunis",
    hotels: [
      { name: "Ibn khaldoun Tunis",img:"/Ibn_khaldoun_Tunis_.jpg", categorie: 3, note_trip: 3.5, text_trip: "Bien" },
      { name: "Ezzahra Dar Tunis",img:"/Ezzahra_Dar_Tunis_.jpg", categorie: 4, note_trip: 2.5, text_trip: "Moyen" },
      { name: "Africa Tunis",img:"/africa_tunis_2.jpg", categorie: 5, note_trip: 3.5, text_trip: "Bien" }
    ]
  },
  {
    region: "Sfax",
    hotels: [
      { name: "Pacha Hotel",img:"/pacha_hotel_2.jpg", categorie: 2, note_trip: 3.0, text_trip: "Moyen" },
      { name: "Dar El Hana",img:"/dar_el_hana_2.jpg", categorie: 3, note_trip: 5.0, text_trip: "Excellent" },
      { name: "Golden Yasmin Les Oliviers Palace",img:"/golden_yasmin_les_oliviers_palace_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" }
    ]
  },
  // Add more regions here as needed
];

const MeilleurhotelsByRegion = [
    {
      region: "Djerba",
      hotels: [
        { name: "El Mouradi Djerba Menzel",img:"/El_Mouradi_Djerba_Menzel_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" },
        { name: "Cesar Thalasso",img:"/Cesar_Thalasso_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" },
        { name: "Djerba Aqua Resort",img:"/Djerba_Aqua_Resort_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" }
      ]
    },
    {
      region: "Sousse",
      hotels: [
        { name: "Hotel KANTA",img:"/Hotel_KANTA_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" },
        { name: "Marhaba Palace",img:"/Marhaba_Beach_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" },
        { name: "El Mouradi Palace", img:"/El_Mouradi_Palace_2.jpg",categorie: 5, note_trip: 3.5, text_trip: "Bien" }
      ]
    },
    {
      region: "Hammamet",
      hotels: [
        { name: "El Mouradi Hammamet",img:"/El_Mouradi_Hammamet_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" },
        { name: "El Mouradi El Menzah",img:"/El_Mouradi_El_Menzah_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" },
        { name: "Zodiac Hotel & Aqua Park", img:"/Zodiac_Hotel_&_Aqua_Park_2.jpg",categorie: 4, note_trip: 4.0, text_trip: "Très Bien" }
      ]
    },
    {
      region: "Tunis",
      hotels: [
        { name: "The Penthouse Suites Hotel",img:"/Penthouse_Suites_Hotel_2.jpg", categorie: 5, note_trip: 4.0, text_trip: "Très Bien" },
        { name: "Samarons",img:"/samarons_2.jpg", categorie: 5, note_trip: 4.0, text_trip: "Très Bien" },
        { name: "Ibn khaldoun Tunis",img:"/Ibn_khaldoun_Tunis_ .jpg", categorie: 3, note_trip: 3.5, text_trip: "Bien" }
      ]
    },
    {
      region: "Sfax",
      hotels: [
        { name: "Pacha Hotel",img:"/pacha_hotel_2.jpg", categorie: 2, note_trip: 3.0, text_trip: "Moyen" },
        { name: "Dar El Hana",img:"/dar_el_hana_2.jpg", categorie: 3, note_trip: 5.0, text_trip: "Excellent" },
        { name: "Occidental Sfax Centre",img:"/Concorde_Sfax_Centre_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" }
      ]
    },
    {
      region: "El jem",
      hotels: [
        { name: "Julius",img:"/Julius_.jpg", categorie: 3, note_trip: 4.0, text_trip: "Très Bien" },
      ]
    },
    {
      region: "Monastir",
      hotels: [
        { name: "City Busines Hotels",img:"/Monastir_center_2.jpg", categorie: 3, note_trip: 3.5, text_trip: "Bien" },
        { name: "Skanes Serail & Aquapark",img:"/Skanes_Serail_&_Aquapark_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" },
        { name: "Regency Hotel & Spa Monastir",img:"/Regency_Hotel_&_Spa_Monastir_2.jpg", categorie: 4, note_trip: 4.0, text_trip: "Très Bien" }
      ]
    }
    // Add more regions here as needed
  ];



const MeilleurDestination =async ({ region }) => {
  // Find the region from the hotelsByRegion array
  const regionHotels = hotelsByRegion.find((r) => r.region === region);
  if (!regionHotels) {
    return <div className="my-16"></div>;
  }

  const MeilleurregionHotels = MeilleurhotelsByRegion.find((r) => r.region === region);

  if (!MeilleurregionHotels) {
    return <div className="my-16" ></div>;
  }
  

  return (
    <div>
        <div className="my-16 px-4 mx-auto max-w-screen-xl">
      <div className="my-6 text-xl font-medium text-left">Meilleur Hotel {region} à partir de 102 DT</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {MeilleurregionHotels.hotels.map((hotel, index) => (
          <div key={index} className="destination-card transform transition-all duration-1000 ease-out cursor-pointer">
            <div className="relative image-container">
              <img
                className="destination-image"
                src={`${hotel.img || "/default-image.jpg"}`} // Use a default image if none exists
                alt={`Image of ${hotel.name}`}
              />
            </div>
            <div className="content-container">
              <div>
                <h5 className="destination-title">{hotel.name}</h5>
                <div className="rating-container">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className={`star-icon ${index < hotel.categorie ? "text-black-300" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <div className="border-b border-blue-gray-50" style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/icon_tripadvisor.svg"
                    alt="icon_tripadvisor"
                    className="w-10 h-8 mb-2 sm:mb-0"
                    width={500}
                    height={300}
                    loading="lazy"
                  />
                  <span className="sm:ml-2">{hotel.note_trip}/5 {hotel.text_trip}</span>

                </div>
                <div className="border-b border-blue-gray-50" style={{ display: "flex", alignItems: "center" }}>
                  <span className="sm:ml-2">Télévision satellite</span>
                  <span className="sm:ml-2">Chambre Bloc Central</span>
                  <span className="sm:ml-2">Salle de conférence</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>Disponible en :Petit Dejeuner</div>
                <div className=" flex flex-col space-y-0.5">
                    
                    <div className="static text-3xl font-bold text-gray-900 dark:text-white">
                        <span className="font-sans">
                        64
                        </span>
                        <span className=" font-sans text-sm absolute">DT/pers/nuit</span>
                    </div>
                        <span className="text-xs text-gerytnb">prix du 11/11/24</span>
                </div>
                </div>
                
              </div>

              
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="my-6 px-4 mx-auto max-w-screen-xl">
      <div className="my-6 text-xl font-medium text-left">Les hotels {region} les plus réservés</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {regionHotels.hotels.map((hotel, index) => (
          <div key={index} className="destination-card transform transition-all duration-1000 ease-out cursor-pointer">
            <div className="relative image-container">
              <img
                className="destination-image"
                src={`${hotel.img || "/default-image.jpg"}`} // Use a default image if none exists
                alt={`Image of ${hotel.name}`}
              />
            </div>
            <div className="content-container">
              <div>
                <h5 className="destination-title">{hotel.name}</h5>
                <div className="rating-container">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className={`star-icon ${index < hotel.categorie ? "text-black-300" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/icon_tripadvisor.svg"
                    alt="icon_tripadvisor"
                    className="w-10 h-8 mb-2 sm:mb-0"
                    width={500}
                    height={300}
                    loading="lazy"
                  />
                  <span className="sm:ml-2">{hotel.note_trip}/5 {hotel.text_trip}</span>

                </div>
              </div>

              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default MeilleurDestination;

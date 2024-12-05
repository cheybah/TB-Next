"use client";
import React from "react";
import '../Destination/Destination3Stars.css';

const hotelsByRegion = [
  {
    region: "Djerba",
    hotels: [
      { name: "Diar Yassine",img:"/Diar_Yassine_2.jpg", categorie: 3, note_trip: 3.5, text_trip: "Bien" },
      { name: "Djerba Saray",img:"/Djerba_Saray_2.jpg", categorie: 3, note_trip: 3.5, text_trip: "Bien" },
      { name: "Rodes",img:"/rodes_2.jpg", categorie: 3, note_trip: 2.5, text_trip: "Moyen" }
    ]
  },
 
  {
    region: "Hammamet",
    hotels: [
      { name: "Dar Khayam",img:"/Dar_Khayam_2.jpg", categorie: 3, note_trip: 3.5, text_trip: "Bien" },
      { name: "La Playa Hotel Club",img:"/La_Playa_Hotel_Club_.jpg", categorie: 3, note_trip: 2.5, text_trip: "Moyen" },
      { name: "Residence Romane", img:"/residence_romane_2.jpg",categorie: 3, note_trip: 4.0, text_trip: "Très Bien" }
    ]
  },
  {
    region: "Monastir",
    hotels: [
      { name: "Amir Palace",img:"/Amir_Palace_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" },
      { name: "Blue Beach Golf & Spa",img:"/Blue_Beach_Golf_&_Spa_2.jpg", categorie: 4, note_trip: 4.5, text_trip: "Excellent" },
      { name: "Delphin EL Habib",img:"/Delphin_EL_Habib_2.jpg", categorie: 4, note_trip: 3.5, text_trip: "Bien" }
    ]
  }
  // Add more regions here as needed
];

const DestinationPlage =async ({ region }) => {
  // Find the region from the hotelsByRegion array
  const regionHotels = hotelsByRegion.find((r) => r.region === region);
  if (!regionHotels) {
    return <div></div>;
  }
  

  return (
    <div className="my-6 px-4 mx-auto max-w-screen-xl">
      <div className="my-6 text-xl font-medium text-left">Hotel 3 étoiles de Plage à {region}</div>
        <p className="my-6 mt-4 text-sm sm:text-base md:text-lg">
        Notre site propose une variété d'hotels à proximité de la plage à {region}. Quelle est la meilleure façon de passer vos vacances de rêve ? Voici les hôtels de plage préféré de nos voyageurs.
        </p>
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
  );
};

export default DestinationPlage;

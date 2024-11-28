"use client";
import { useEffect, useState } from "react";
import Nav from "../../components/NavLines/Nav";
import { fetchHotelData, fetchTripadHotelData, fetchRegionsData } from "../../redux/slices/dataSlice";
import { store } from "../../redux/store";

function HotelsDetailsClient({ id }) {
    const [regionsData, setRegionsData] = useState([]);
    const [hotelData, setHotelData] = useState([]);
    const [hotelTripadData, setHotelTripadData] = useState([]);
    const [loading, setLoading] = useState(true); // État de chargement
    const ville = sessionStorage.getItem("location") || "";
            const datedep = sessionStorage.getItem("departureDate") || "";
            const dateret = sessionStorage.getItem("returnDate") || "";
    useEffect(() => {
        async function fetchData() {
            

            try {
                const dispatch = store.dispatch;
                setLoading(true); // Début du chargement

                // Appels Redux pour récupérer les données
                const regionsDataResult = await dispatch(fetchRegionsData()).unwrap();
                const hotelDataResult = await dispatch(fetchHotelData({ id, ville, datedep, dateret })).unwrap();
                const hotelTripadDataResult = await dispatch(fetchTripadHotelData({ id })).unwrap();
                setRegionsData(regionsDataResult || []);
                setHotelData(hotelDataResult?.Hotels[0] || []);
                setHotelTripadData(hotelTripadDataResult || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Fin du chargement
            }
        }

        fetchData();
    }, [id]);
    console.log('HotelData',ville);
    return (
       
        <div>
            {loading ? (
                <div>Loading data...</div> // Indicateur de chargement
            ) : (
                <Nav
                    listsHotels={hotelData}
                    regionsData={regionsData}
                    hotelTripadData={hotelTripadData}
                />
            )}
        </div>
    );
}

export default HotelsDetailsClient;

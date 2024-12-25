"use client";
import Nav from "../../components/NavLines/Nav";


function HotelsDetailsClient({ listsHotels = [], regionsData = [], hotelTripadData = [] }) {
    return (
        <div >
                <Nav
                    listsHotels={listsHotels}
                    regionsData={regionsData}
                    hotelsTripadData={hotelTripadData}
                />
            
        </div>
    );
}

export default HotelsDetailsClient;

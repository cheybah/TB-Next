import dynamic from 'next/dynamic';

const HotelDetails = dynamic(() => import('../components/HotelDetails/HotelDetails'), { ssr: false });

export const metadata = {
    title: 'Hotel Details | Tunisiebooking.com',
    description: "Les meilleurs prix de l'hôtel.sur Tunisiebooking!",
};

const HotelsResult = () => {  //hydrate data
    return (
    <HotelDetails />
    );
};


export default HotelsResult;        
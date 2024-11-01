import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header/Header'), { ssr: false });
const MoteurResult = dynamic(() => import('../components/MoteurResult/MoteurResult'), { ssr: false });
const ResultHotel = dynamic(() => import('../components/ResultHotel/ResultHotel'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer/Footer'), { ssr: false });

export const metadata = {
    title: 'Hotel Results',
    description: 'Find the best hotel results here.',
};

const HotelsResult = ({ data }) => {  //hydrate data
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <MoteurResult />
            <div className="overflow-x-hidden">
                <ResultHotel data={data} />
            </div>
            <Footer />
        </div>
    );
};


export default HotelsResult;

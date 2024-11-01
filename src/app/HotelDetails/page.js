import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('../components/NavLines/Nav'), { ssr: false });

export const metadata = {
    title: 'Hotel Details',
    description: 'Find the best hotel results here.',
};

const HotelsResult = () => {  //hydrate data
    return (
<Nav />
    );
};


export default HotelsResult;        

import HotelsDetailsClient from '../../components/DetailHotel/HotelsDetailsClient';



export default function HotelsDetails({ params }) {
    const { id } = params;
    return <HotelsDetailsClient id={id} />;
}

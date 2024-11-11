import Nav from '../../components/NavLines/Nav';

export const metadata = {
    title: 'Hotel Details',
    description: 'Find the best hotel results here.',
};

export default async function HotelsDetails({ params }) {
    const { id } = params;

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/destinations/${id}`);
        
        if (!res.ok) {
            console.error("Fetch error:", res.status, res.statusText); 
            return <div>Failed to load hotel data (Status: {res.status})</div>;
        }

        const hotelData = await res.json();
        console.log("Fetched hotel data:", hotelData); 

        return (
            <div>
                <Nav hotelData={hotelData} />
            </div>
        );

    } catch (error) {
        console.error("Fetch error:", error); 
        return <div>Error loading hotel data</div>;
    }
}


import DestinationClient from "./DestinationClient";
import Header from "@/app/components/Header/Header";
import Background from "./components/Background";
import Footer from "@/app/components/Footer/Footer";


export const metadata = {
    title: 'Voyage Tchèque à prix Promo !',
    description: 'Partez en Voyage Organisé Tchèque avec TunisieBooking.com et découvrez les incontournables Prague, Vienne, Bratisava...',
    keywords: 'Voyage Organisé Tchèque',
    canonical: 'https://tn.tunisiebooking.com/voyage-organise/tcheque.html',

};

const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "tunisiebooking",
    "url": "https://tn.tunisiebooking.com/",
}

export default function DestinationPage() {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <Background />
            <DestinationClient />
            <Footer />
        </div>
    );
}

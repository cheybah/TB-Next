import HotelToboggan from "../components/HotelToboggan/HotelToboggan";
export const metadata = {
  title: 'Hotel avec Toboggan en Tunisie',
  description: 'Profitez de nos Offres Spéciales Hotels avec Toboggan 2024 ! Réservez tôt pour Payer moins Cher ! ',
  keywords: "hotel toboggan", 
  alternates: {
    canonical: `https://tn.tunisiebooking.com/hotel-avec-toboggan.html`,
},
};
export default function HotelAvecTobogganPage() {
  return (
    <div>
      <HotelToboggan/>
    </div>
  );
}
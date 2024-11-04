
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata() {
  return {
    title:{
      default:"Agence de voyage Tunisie Booking : le N° 1 D'Hôtel Tunisie",
      Template:"%s -Agence de voyage Tunisie Booking : le N° 1 D'Hôtel Tunisie"
    },
    
    description: "Tunisie Booking  Votre agence de voyage pour Réservation ☀️ : ✔️ Hotel Tunisie ✔️ Hotel à l’étranger ✔️ Voyage Organisé ✔️ Omra ✔️ Billets d’avion - Service Clients 7/7 - 27 Agences.",
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

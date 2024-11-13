import localFont from "next/font/local";
import { Providers } from  "./redux/provider" ; 
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; 



export const metadata = { //witout import bcz we're working with jsx not tsx
  title: {
    default: "Agence de voyage Tunisie Booking : le N° 1 D'Hôtel Tunisie",
    template: "%s | TunisieBooking", //for child pages, can be deleted if not needed
  },
  description: "TunisieBooking Votre agence de voyage pour Réservation ☀ : ✓ Hotel Tunisie ✓ Hotel à l’Etranger ✓Voyage Organisé ✓Omra ✓Billets d’avion - Service Clients 7/7 - 27 Agences." ,
  keywords: "agence de voyage, agence de voyage tunisie",

  
  verification: {
    google: "V7FnC16cI6u1BcA5JxTXLjE6hl2wCVGrDdLF2e0iyXg",
    microsoft: "19D37373D59B805C2DFDB120EEEB6964",
  },
  
};


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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers> 
      </body>
    </html>
  );
}

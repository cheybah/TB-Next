import localFont from "next/font/local";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


config.autoAddCss = false; 

export const metadata = {
  title: {
    default: "Agence de voyage Tunisie Booking : le N° 1 D'Hôtel Tunisie",
    template: "%s | TunisieBooking",
  },
  description: "TunisieBooking Votre agence de voyage pour Réservation ☀ : ✓ Hotel Tunisie ✓ Hotel à l’Etranger ✓Voyage Organisé ✓Omra ✓Billets d’avion - Service Clients 7/7 - 27 Agences.",
  keywords: "agence de voyage, agence de voyage tunisie",
  alternates: {
    canonical: 'https://tn.tunisiebooking.com/',
  },
  verification: {
    google: "NuyRXP0B2gIZfxgScNJebdPTiqy7aXuqy2yFjB_opcs",
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

// Define the JSON-LD data
const websiteJsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "tunisiebooking",
  "url": "https://tn.tunisiebooking.com/",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "tunisiebooking",
  "url": "https://tn.tunisiebooking.com/",
  "logo": "https://tn.tunisiebooking.com/images/logo31.png",
  "alternateName": "tunisiebooking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

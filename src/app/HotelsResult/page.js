"use client";
import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../components/Header/Header'), { ssr: false });
const MoteurResult = dynamic(() => import('../components/MoteurResult/MoteurResult'), { ssr: false });
const ResultHotel = dynamic(() => import('../components/ResultHotel/ResultHotel'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer/Footer'), { ssr: false });


const HotelsResult = () => {
    return (
        <>
            <Head>
                <title>Your Page Title</title>
                <meta name="description" content="A short description of your page's content" />
                <meta property="og:title" content="Your Page Title" />
                <meta property="og:description" content="A detailed description of your page's content" />
                <meta property="og:image" content="https://example.com/thumbnail.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="min-h-screen flex flex-col">
                <Header />
                <MoteurResult />
                <ResultHotel />
                <Footer />
            </div>
        </>
    );
};

export default HotelsResult;

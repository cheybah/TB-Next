"use client";
import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import { useSearchParams } from "next/navigation";
import Header from '../components/Header/Header';
import MoteurResult from '../components/MoteurResult/MoteurResult';
import ResultHotel from '../components/ResultHotel/ResultHotel';
import Footer from '../components/Footer/Footer';

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
                <Footer/>
            </div>
        </>
    );
};

export default HotelsResult;

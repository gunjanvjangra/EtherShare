import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import AboutUs from "../components/AboutUs";
import Features from "../components/TopFeatures";
import Trends from "../components/Trends";

const LandingPage = () => {
    return (
        <>
        <Navbar />
        <MainSection />
        <AboutUs />
        <Features />
        <Trends />
        <Footer />
        </>
    );
};

export default LandingPage;
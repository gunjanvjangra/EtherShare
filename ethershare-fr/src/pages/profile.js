import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileBody from "../components/ProfileBody";

const Profile = () => {
    return (
        <>
        <Navbar />
        <ProfileSidebar />
        <ProfileBody />
        <Footer />
        </>
    );
};

export default Profile;
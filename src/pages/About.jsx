import React from 'react'
import Navbar from "../components/Navbar";
import TwentyFourHour from "../components/TwentyFourHour";
// import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import AboutHeader from "../components/AboutHeader";

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHeader />
            <TwentyFourHour />
            {/* <Team /> */}
            <Testimonials />
            <Footer />
        </>
    )
}

export default About
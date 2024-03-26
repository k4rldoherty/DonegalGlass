import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TwentyFourHour from "../components/TwentyFourHour";
import Services from "../components/PlanYourProject";
// import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <TwentyFourHour />
            {/* <Team /> */}
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home
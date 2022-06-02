import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar';
import About from '../components/About'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'
import Projects from '../components/Projects';

function Home () {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <ScrollTop />
            <Projects />
            <Footer />
        </>
    )
}

export default Home;

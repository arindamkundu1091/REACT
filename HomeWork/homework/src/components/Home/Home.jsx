import React from 'react'
import Navbar from './Navbar';
import Carousel from './Carousel';
import Details from './Details';
import Sponsors from './Sponsors';
import PageNav from './PageNav';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel/>
            <Details />
            <Sponsors />
            <PageNav />
            <Footer />
        </div>
    )
}

export default Home
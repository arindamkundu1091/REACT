import React, {useState} from 'react'
import Navbar from './Navbar';
import Carousel from './Carousel';
import Details from './Details';
import Sponsors from './Sponsors';
import PageNav from './PageNav';
import Footer from './Footer';

function Home() {

    const[mode, setMode] = useState("light");

    function ModeChange() {
        if(mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    }

    return (
        <div>
            <Navbar mode={mode} ModeChange={ModeChange}/>
            <Carousel/>
            <Details />
            <Sponsors />
            <PageNav />
            <Footer />
        </div>
    )
}

export default Home
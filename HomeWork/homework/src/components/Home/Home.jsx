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
            document.body.style.backgroundColor = '#222';
        } else {
            setMode("light");
            document.body.style.backgroundColor = 'white';
        }
    }

    return (
        <div>
            <Navbar mode={mode} ModeChange={ModeChange}/>
            <Carousel/>
            <Details  mode={mode}/>
            <Sponsors mode={mode}/>
            <PageNav mode={mode}/>
            <Footer mode={mode}/>
        </div>
    )
}

export default Home
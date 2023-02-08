import React from 'react'
import Carousel from './Carousel';
import Details from './Details';
import Sponsors from './Sponsors';
import PageNav from './PageNav';

function Home(props) {

    let mode = props.mode

    return (
        <div>
            <Carousel/>
            <Details  mode={mode}/>
            <Sponsors mode={mode}/>
            <PageNav mode={mode}/>
        </div>
    )
}

export default Home
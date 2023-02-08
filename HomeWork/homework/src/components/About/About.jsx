import React from 'react'

function About(props) {

    const accordion = [
        {view: " show", type: "", title: "About Us", body: "Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet."},
        {view: " show", type: "", title: "Our Motives", body: "Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet."},
        {view: " show", type: "", title: "Our Services", body: "Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet."},
    ];

    const AboutUs = accordion.map((e, i) => {
        return (
            <div className="accordion-item" id='about' key={i} style={{backgroundColor: props.mode === "light" ? "white" : "#222", color: props.mode === "light" ? "black" : "white"}}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className={`accordion-button${e.type}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" id='aboutBtn' style={{backgroundColor: props.mode === "light" ? "white" : "#333", color: props.mode === "light" ? "black" : "white"}}>
                        {e.title}
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse${e.view}`} aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            {e.body}
                        </div>
                    </div>
                </div>
        );
    });


    return (
        <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                {AboutUs}
            </div>
        </div>
    )
}

export default About
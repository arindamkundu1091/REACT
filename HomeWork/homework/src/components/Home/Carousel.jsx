import React from 'react'


function Carousel() {

    let body = "Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet.Ullamco irure consequat ea nostrud ullamco enim sit laborum ea excepteur. Ut aliqua quis ut adipisicing ipsum deserunt quis consectetur minim veniam amet."
    const carouselList = [
        {title: "First Topic", body: body, src: "https://mdbootstrap.com/img/Photos/Others/images/78.jpg", href: "/"},
        {title: "Second Topic", body: body, src: "https://mdbootstrap.com/img/Photos/Others/images/78.jpg", href: "/"},
        {title: "Third Topic", body: body, src: "https://mdbootstrap.com/img/Photos/Others/images/78.jpg", href: "/"},
    ];

    const Carousel = carouselList.map((e, i) => {
        return (
            <div className="carousel-item active" key={i}>
                        <img src={e.src} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{e.title}</h5>
                            <p>{e.body}</p>
                            <a className='btn btn-primary' href={e.href} role='button'>Learn More</a>
                        </div>
                    </div>
        );
    });

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" id='carousel'>
                    {Carousel}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
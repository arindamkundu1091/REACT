import React from 'react'

function Sponsors() {

    const sponsorList = [
        {name: "Sponsor One", about: "Ullamco irure consequat laborum ea excepteur.", href: "/", src: "https://via.placeholder.com/100"},
        {name: "Sponsor Two", about: "Ullamco irure consequat laborum ea excepteur.", href: "/", src: "https://via.placeholder.com/100"},
        {name: "Sponsor Three", about: "Ullamco irure consequat laborum ea excepteur.", href: "/", src: "https://via.placeholder.com/100"},
        {name: "Sponsor Four", about: "Ullamco irure consequat laborum ea excepteur.", href: "/", src: "https://via.placeholder.com/100"},
        {name: "Sponsor Five", about: "Ullamco irure consequat laborum ea excepteur.", href: "/", src: "https://via.placeholder.com/100"},
        {name: "Sponsor Six", about: "Ullamco irure consequat laborum ea excepteur.", href: "/", src: "https://via.placeholder.com/100"}
    ];

    const ShowSponsor = sponsorList.map((e, i) => {
        return (
            <div className="col" key={i}>
                <div className="card">
                    <img src={e.src} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{e.name}</h5>
                        <p className="card-text">{e.about}</p>
                        <a className='btn btn-primary'role='button' href={e.href}>Visit Site</a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="row">
                {ShowSponsor}
            </div>

        </div>
    )
}

export default Sponsors
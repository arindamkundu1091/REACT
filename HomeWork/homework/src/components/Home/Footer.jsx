import React from 'react'

function Footer() {

    const list1 =[
        {name: "Service", href: "/"},
        {name: "Pricing", href: "/"},
        {name: "Contacts", href: "/"},
        {name: "Testimonials", href: "/"},
        {name: "Parners", href: "/"},
    ];
    const list2 =[
        {name: "Carrers", href: "/"},
        {name: "Portfolio", href: "/"},
        {name: "Our Story", href: "/"},
        {name: "Our History", href: "/"},
        {name: "Awards", href: "/"},
    ];
    const list3 =[
        {name: "Facebook", href: "/"},
        {name: "Twitter", href: "/"},
        {name: "Instagram", href: "/"},
        {name: "LinkedIn", href: "/"},
        {name: "Pinterest", href: "/"},
    ];

    return (
        <div>
            <hr />
            <footer className="section footer-linked bg-gray-700">
                <div className="footer-linked-main">
                <div className="container">
                    <div className="row row-50">
                    <div className="col-lg-8">
                        <h4>Quick Links</h4>
                        <hr className="offset-right-1"/>
                        <div className="row row-20">
                        <div className="col-6 col-sm-3">
                            <ul className="list list-xs">
                            {
                                list1.map((e, i) => {
                                    return (
                                        <li key={i}><a href={e.href}>{e.name}</a></li>
                                    );
                                })
                            }
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3">
                            <ul className="list list-xs">
                            {
                                list2.map((e, i) => {
                                    return (
                                        <li key={i}><a href={e.href}>{e.name}</a></li>
                                    );
                                })
                            }
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3">
                            <ul className="list list-xs">
                            {
                                list3.map((e, i) => {
                                    return (
                                        <li key={i}><a href={e.href}>{e.name}</a></li>
                                    );
                                })
                            }
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-4">
                        <h4>Contact Information</h4>
                        <hr/>
                        <ul className="list-sm">
                            <li className="object-inline"><span className="icon icon-md mdi mdi-map-marker text-gray-700"></span><a className="link-default" href="/">2130 Fulton Street San Diego, CA</a></li>
                            <li><a className="link-default" href="/">1-800-1234-678</a></li>
                            <li><a className="link-default" href="/">1-800-8765-098</a></li>
                            <li className="object-inline"><span className="icon icon-md mdi mdi-email text-gray-700"></span><a className="link-default" href="/">info@demolink.org</a></li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
                <div className="footer-linked-aside">
                <div className="container">
                    <p className="rights"><span>&copy;&nbsp;</span><span className="copyright-year"></span><span>&nbsp;</span><span>All Rights Reserved</span></p>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
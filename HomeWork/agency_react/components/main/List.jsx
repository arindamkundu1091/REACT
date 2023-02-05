import React from "react";

export default function List() {
    return (
        <>
        <hr />

        <div className="row column">
            <ul className="vertical medium-horizontal menu expanded text-center">
            <li>
                <a href="/">
                <div className="stat">28</div>
                <span>Websites</span>
                </a>
            </li>
            <li>
                <a href="/">
                <div className="stat">43</div>
                <span>Apps</span>
                </a>
            </li>
            <li>
                <a href="/">
                <div className="stat">95</div>
                <span>Ads</span>
                </a>
            </li>
            <li>
                <a href="/">
                <div className="stat">59</div>
                <span>Cakes</span>
                </a>
            </li>
            <li>
                <a href="/">
                <div className="stat">18</div>
                <span>Logos</span>
                </a>
            </li>
            </ul>
        </div>
        </>
    );
}

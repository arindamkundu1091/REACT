import React from 'react'

function PageNav(props) {

    const footList = [
        {name: "previous", href: "/"},
        {name: "1", href: "/", type: ""},
        {name: "2", href: "/", type: ""},
        {name: "3", href: "/", type: ""},
        {name: "next", href: "/", type: ""},
    ];

    const ShowFooter = footList.map((e, i) => {
        return (
            <li className={`page-item ${e.type}`} key={i}><a className="page-link btn btn-outline-primary" href={e.href} style={{backgroundColor: props.mode === "light" ? "white" : "#333", color: props.mode === "light" ? "black" : "white"}}>{e.name}</a></li>
        );
    });

    return (
        <div className='my-2' style={{backgroundColor: props.mode === "light" ? "white" : "#222", color: props.mode === "light" ? "black" : "white"}}>
            <nav aria-label="Page navigation example" >
                <ul className="pagination justify-content-center" >
                    {ShowFooter}
                </ul>
            </nav>
        </div>
    )
}

export default PageNav
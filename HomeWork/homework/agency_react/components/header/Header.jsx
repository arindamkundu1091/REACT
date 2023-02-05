import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";

export default function Header() {

    const list1 = [
        {
        li: "One",
        href: "/"
        },
        {
        li: "Two",
        href: "/"
        }
    ];
    const list2 = [
        {
        li: "One",
        href: "/"
        },
        {
        li: "Two",
        href: "/"
        },
        {
        li: "Three",
        href: "/"
        },
        {
        li: "Four",
        href: "/"
        }
    ];
    return (
        <>
            <Navbar list1={list1} list2={list2}/>
            <Heading />
        </>
    );
}




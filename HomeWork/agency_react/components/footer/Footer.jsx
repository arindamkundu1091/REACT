import React from "react";
import Picture from "./Picture";
import Bottom from "./Bottom";

export default function Footer() {

    const src = [
        {src: "https://via.placeholder.com/550x550"},
        {src: "https://via.placeholder.com/550x550"},
        {src: "https://via.placeholder.com/550x550"},
        {src: "https://via.placeholder.com/550x550"},
        {src: "https://via.placeholder.com/550x550"},
        {src: "https://via.placeholder.com/550x550"},
        {src: "https://via.placeholder.com/550x550"},
        {src: "https://via.placeholder.com/550x550"}
    ];

    const list = [
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
            <Picture src = {src}/>
            <Bottom list = {list}/>
        </>
    );
}



import React from 'react'
import Solution from "./Solution";

//! implement map function on it and proptype also
export const bookList = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        img: "https://via.placeholder.com/100"
    },
    {
        title: "The Road to React",
        author: "Robin Wieruch",
        img: "https://via.placeholder.com/100"
    },
    {
        title: "Introduction to Flight",
        author: "John D. Anderson",
        img: "https://via.placeholder.com/100"
    },
    {
        title: "Flight Dynamics Principles",
        author: "Michael V. Cook",
        img: "https://via.placeholder.com/100"
    },
    {
        title: "Flexbox in CSS",
        author: "Estelle Weyl",
        img: "https://via.placeholder.com/100"
    },
    {
        title: "JavaScript the Good Parts",
        author: "Douglas Crockford",
        img: "https://via.placeholder.com/100"
    }
]

function BookData() {
    return (
        <div>
            <Solution bookList={bookList}/>
        </div>
    )
}

export default BookData


import React from 'react'

const List = [
    {
        id: 1,
        firstname: 'Debasish',
        lastname: 'Sahoo',
        dob: 1990
    },
    {
        id: 2,
        firstname: 'Arnab',
        lastname: 'Sahoo',
        dob: 1993
    }
]

//! please Implement map function and Show the Data on frontend proptype also
const nestedList = [List, List]

function DataList() {

    const ListView = nestedList.map((e) => {
        return (
            e.map((elem) => {
                return (
                    <li key={elem.id}>{elem.id} || {elem.firstname} {elem.lastname} || {elem.dob}</li>
                );
            })
        );
    });

    return (
        <div>
            <ul>
                {ListView}
            </ul>
        </div>
    )
}

export default DataList


import React from 'react'

// function Item({name, isPacked}) {
//     if(isPacked) {
//         return (<li>{name} ✔</li>);

//     }
//     return (<li>{name}</li>);
// }

// function Item({name, isPacked}) {
//     return (<li>{isPacked? name + '✔' : name}</li>);
// }

// function Item({name, isPacked}) {
//     return (<li>{isPacked? (<del>{name}</del>)  : name}</li>);
// }

// function Item({name, isPacked}) {
//     return (
//         <li>
//             {name}{isPacked && '✔'}
//         </li>
//     );
// }

function Item({name, isPacked}) {
    let itemContent = name;
    if(isPacked) {
        itemContent = name + '✔';
    }
    return (
        <li>
            {itemContent}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Packing List(React)</h1>
            <ol>
                <Item 
                    isPacked={true}
                    name='HTML'
                />
                <Item 
                    isPacked={true}
                    name='CSS'
                />
                <Item 
                    isPacked={false}
                    name='BotStrap'
                />
                <Item 
                    isPacked={true}
                    name='JS'
                />
            </ol>
        </section>
    )
}

export default PackingList;
import React from "react";
import { Outlet, NavLink} from "react-router-dom"


// const layout = () => {
//     return (
//         <>
//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Cantct</li>
//                     <li>Gallary</li>
//                 </ul>
//             </nav>
//         </>
//     )
// }


function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li> <NavLink to='/'>Home</NavLink> </li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/gallary'>Gallary</NavLink></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}




export default Layout;
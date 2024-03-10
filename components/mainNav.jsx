
//  <img src={Logo} alt="" classname="dog" />  


import { Container, Button, Form } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = () => {
    return (
        <>
        {/* Add desktop class to the aside for desktop mode */}
        <aside className='aside desktop'>
            <a href="/" className="nav__logo">
                
            </a>
            
            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/home" className="nav__link">
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href='/about' className="nav__link">
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href='/profile' className="nav__link">
                                Profile
                            </a>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="footer"></span>
            </div>
        </aside>

        {/* Footer content for mobile mode */}
        <footer className="footer">
            <a href="/" className="nav__link">
                Home
            </a>
            <a href="/about" className="nav__link">
                About
            </a>
            <a href="/register" className="nav__link">
                Register
            </a>
            <a href="/login" className="nav__link">
                Login
            </a>
        </footer>
        </>
    );
}

export default Sidebar;


// {/* <li className="nav__item">
//                             <a href="/register" className="nav__link">
//                                 Register
//                             </a>
//                         </li>
//                         <li className="nav__item">
//                             <a href="/login" className="nav__link">
//                                 Login
//                             </a>
//                         </li> */}
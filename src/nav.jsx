import {useState } from "react";

function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <button className="menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}>☰</button>
            <ul className={`nav-links ${isOpen ? 'open' : ""}`}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </nav>
    )
}

export default Nav;
import React from 'react';

//This is the navigation bar
function NavBar() {
    return (
    <nav className="navbar">
        <ul className="nav-item">
            <li><a href="#">Home</a></li>
            <li><a href="#">Movie Times</a></li>
            <li><a href="#">Tickets</a></li>
            <li><a href="#">Concessions Menu</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    );
}

export default NavBar;
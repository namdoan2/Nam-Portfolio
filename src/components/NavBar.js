import React, {useState} from "react";
import {Menu, Close} from '@material-ui/icons';
import './NavBar.css';

const NavBar = () => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    };

    return(
        <nav>
            <a href="#home" id="logo">Hello</a>
            <div className='menu-icon'><Menu className='menu' onClick={showMenu}/></div>
            <div className={active ? 'slider active' : 'slider'}>
                <div className='closed'><Close className='exit' onClick={showMenu}/></div>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar;
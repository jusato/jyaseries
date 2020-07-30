import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from "../Button";
//import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="JuFlix logo" />
            </a>
            
            <Button as= "a" className="ButtonLink" href="/"> 
                Nova Série 
            </Button>
        </nav>
    );
}

export default Menu;

//as= "a" == o botão vai se comportar como "a" (link)
//Nova Série == prop especifica chamada children
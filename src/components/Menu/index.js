import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="jyaseries logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/serie">
        Nova Série
        {' '}
        {/* prop especifica chamada children */}
      </Button>
    </nav>
  );
}

export default Menu;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';

function Menu() {
  // return (
  //   <nav className="Menu">
  //     <Link to="/">
  //       <img className="Logo" src={Logo} alt="jyaseries logo" />
  //     </Link>

  //     <Button as={Link} className="ButtonLink" to="/cadastro/serie">
  //       Nova Série
  //       {' '}
  //       {/* prop especifica chamada children */}
  //     </Button>
  //   </nav>
  // );
  let buttonRoute = '';
  let buttonText = '';

  if (window.location.href.includes('/serie')) {
    buttonRoute = '/cadastro/categoria';
    buttonText = 'Nova Categoria';
  } else if (window.location.href.includes('/categoria')) {
    buttonRoute = '/';
    buttonText = 'Página Inicial';
  } else {
    buttonRoute = '/cadastro/serie';
    buttonText = 'Nova Série';
  }

  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="jyaseries logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to={buttonRoute}>{buttonText}</Button>
    </nav>
  );
}

export default Menu;

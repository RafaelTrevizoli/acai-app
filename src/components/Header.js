import { Link } from 'react-router-dom';
import logo from '../img/acai-logo.png';
import CarrinhoIcon from '../img/carrinho-de-compras.png';
import UserIcon from '../img/procurar.png';
import './Header.css';

const Header = () => {
  return (
    <div className='geral-principalpg'>
      <header className="header-nav-principalpg">
        <ul className='header-lista-principagpag1'>
          <li><img className="logo-header" src={logo} alt="Logo Quy Açai" /></li>
        </ul>
        <ul className='header-lista-principagpag'>
          <li className='header-components-lista'><Link to="/"> Home</Link></li>
          <li className='header-components-lista'><Link to="/cardapio"> Cardápio</Link></li>
          <li className='header-components-lista'><Link to="/ladingpg"> LadingPág</Link></li>
          <li className='header-components-lista'><Link to="/admin"> AdminPág</Link></li>
          <li className='header-components-lista'><Link to="/"> Sobre</Link></li>
        </ul>
        <ul className='header-lista-principagpag2'>
          <li><img className="header-icon-principalpg2" src={UserIcon} alt="User" width="30px" /></li>
          <li><img className="header-icon-principalpg1" src={CarrinhoIcon} alt="Carrinho" width="30px" /></li></ul>
      </header>
    </div>
  );
};

export default Header;

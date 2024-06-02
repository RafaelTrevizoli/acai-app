import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/acai-logo.png';
import './App.css';

const App = () => {
  return (
    <div className='geral-principalpg'>
      <header className="header-nav-principalpg">
        <div className="header">
          <img className="logo-header" src={logo} alt="Logo Quy Açai" />
        </div>
      </header>

      <main className="main-container-principalpg">
        <section className="main-primeirasecao-principalpg">
          <h1 className="main-titulo-principalpg">Você procura rapidez em seus pedidos?</h1>
          <h2 className="main-subtitulo-principalpg">Conheça agora nosso <span>Cardápio Online</span></h2>

          <div className="block">
            <Link to="/cardapio" className="button is-warning">Clique aqui</Link>
          </div>
        </section>

        <section className="main-segundasecao-principalpg">
          <h1 className="main-titulo-principalpg">Venha conhecer também mais sobre nosso Açai</h1>
          <h2 className="main-subtitulo-principalpg">Acesse agora nossa <span>Lading Pág</span></h2>

          <div className="block">
            <Link to="/ladingpg" className="button is-warning">Clique aqui</Link>
          </div>
        </section>

        <section className="main-segundasecao-principalpg">
          <h1 className="main-titulo-principalpg">Venha organizar o seu negócio de forma facilitada</h1>
          <h2 className="main-subtitulo-principalpg">Acesse agora nossa <span>Página de Administração</span></h2>

          <div className="block">
            <Link to="/admin" className="button is-warning">Clique aqui</Link>
          </div>
        </section>


        <footer className="footer">
          <div className="content has-text-centered">
            <p className="footer-text">
              <strong>Create</strong> by <a href="https://www.instagram.com/rafael.konscca/">Rafael Trevizoli</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;

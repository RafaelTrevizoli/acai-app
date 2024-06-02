import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/acai-logo.png';

import './Ladingpg.css';

const Ladingpg = () => {
  return (
    <div className='geral-lading'>
      <header>
        <nav className="header-nav-lading">
          <ul className="header-nav-menu-lading">
            <li className='opcao-lista'><Link to="/">Volte a página principal</Link></li>
          </ul>
          <a href="/ladingpg" className="logo-escrita-lading"> Q<span>u</span>Y A<span>ça</span>I</a>
        </nav>
      </header>

      <main>
        <section className="main-secao-lading">
          <div className="main-container-lading">
            <h4 className="main-titulo-secundario-lading">Quy Açaiteria, o melhor açai de Auriflama e Região !</h4>
            <h1 className="main-titulo-primario-lading">Conheça os Benefícios do nosso Açai</h1>
            <p>1 - Poderoso antioxidante que combate os radicais livres e protege as células contra danos.<br />
              2 - Energia natural fornecida por carboidratos de qualidade.<br />
              3 - Promove a saúde do coração, reduzindo o colesterol ruim (LDL) e aumentando o colesterol bom (HDL).<br />
              4 - Reforça o sistema imunológico devido ao alto teor de vitamina C.<br />
              5 - Rico em nutrientes essenciais como fibras, vitaminas e minerais para uma saúde geral.<br /></p>
          </div>
          <div className="main-logo-lading">
            <img className="logo-quy" src={logo} alt="QuY Açai" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Create</strong> by <a href="https://www.instagram.com/rafael.konscca/">Rafael Trevizoli</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Ladingpg;

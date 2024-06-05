import React from 'react';
import Header from './../components/Header';
import './Sobre.css';

const Sobre = () => {
    return (
        <div className='geral-sobre'>

            <Header />

            <section className="acai-menu">
                <div className="container">
                    <h2>Conheça algumas variações de nossos açais</h2>
                    <p>Desfrute de deliciosas opções de açaí preparadas com ingredientes frescos e naturais.</p>

                    <div className="menu-items">
                        <div className="menu-item">
                            <h3>Açaí Tradicional</h3>
                            <p>Delicioso açaí servido com granola, banana, morango e leite condensado.</p>
                        </div>
                        <div className="menu-item">
                            <h3>Açaí Especial</h3>
                            <p>Açaí acompanhado de frutas tropicais, granola, leite condensado e leite de coco.</p>
                        </div>
                        <div className="menu-item">
                            <h3>Açaí Fit</h3>
                            <p>Açaí com granola, banana, morango e mel, sem adição de açúcar.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Criado por</strong> <a href="https://github.com/RafaelTrevizoli">Rafael Trevizoli</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Sobre;

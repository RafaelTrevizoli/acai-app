import React, { useState, useEffect } from 'react';
import Header from './../components/Header';
import './Admin.css';

// função tela de carregamento //
const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

// função API google sheets //
  const fetchDataFromGoogleSheets = async () => {
    try {
      const response = await fetch('https://sheet.best/api/sheets/5b6a725e-6243-431b-b609-00ec67a50f56');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao obter dados da planilha:', error);
    }
  };

  useEffect(() => {
    fetchDataFromGoogleSheets();
  }, []);

  return (
    <div className="geral-admin">
      
      {loading ? (
        <div className="loading-screen">A página de admistração está sendo carregada...</div>
      ) : (

        <div>
          
          <Header/>

          <main className="main-container-admin">
            <section className="main-primeirasecao-admin">
              <h1 className="main-titulo-admin">Pedidos realizados:</h1>

              <div className="data-container-admin">
                {data.map((pedido, index) => (
                  <div key={pedido.id} className="row-admin">
                    <h2 className="pedido-id">Pedido #{index + 1}</h2>
                    <p><span className="tabela-admin">Cliente:</span> {pedido.cliente_nome}</p>
                    <p><span className="tabela-admin">Telefone:</span> {pedido.cliente_telefone}</p>
                    <p><span className="tabela-admin">Email:</span> {pedido.cliente_email}</p>
                    <p><span className="tabela-admin">Endereço:</span> {pedido.cliente_endereco}</p>
                    <p><span className="tabela-admin">Tamanho do Copo:</span> {pedido.pedido_tamanho_do_copo}</p>
                    <p><span className="tabela-admin">Quantidade:</span> {pedido.pedido_quantidade_de_copo}</p>
                    <p><span className="tabela-admin">Combinação de Copo:</span> {pedido.pedido_combinacao_copo}</p>
                    {pedido.pedido_adicional_torrone && <p><span className="tabela-admin">Adicional Torrone:</span> {pedido.pedido_adicional_torrone}</p>}
                    {pedido.pedido_adicional_suflair && <p><span className="tabela-admin">Adicional Suflair:</span> {pedido.pedido_adicional_suflair}</p>}
                    {pedido.pedido_adicional_nutella && <p><span className="tabela-admin">Adicional Nutella:</span> {pedido.pedido_adicional_nutella}</p>}
                    {pedido.pedido_adicional_kitkat && <p><span className="tabela-admin">Adicional Kitkat:</span> {pedido.pedido_adicional_kitkat}</p>}
                    {pedido.pedido_adicional_biz && <p><span className="tabela-admin">Adicional Biz:</span> {pedido.pedido_adicional_biz}</p>}
                    {pedido.pedido_observacao && <p><span className="tabela-admin">Observação:</span> {pedido.pedido_observacao}</p>}
                  </div>
                ))}
              </div>
            </section>
          </main>


          <footer className="footer">
            <div className="content has-text-centered">
              <p className="footer-text">
                <strong>Create</strong> by <a href="https://github.com/RafaelTrevizoli">Rafael Trevizoli</a>
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Admin;

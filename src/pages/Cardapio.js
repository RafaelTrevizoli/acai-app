import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './../img/acai-logo.png';
import './Cardapio.css';

const Cardapio = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        try {
            await axios.post('https://eo9b6w6bevvn0kd.m.pipedream.net/', data);
            alert('Pedido enviado com sucesso!');
            window.location.reload();
        } catch (error) {
            console.error('Erro ao enviar pedido:', error);
            alert('Houve um erro ao enviar o pedido.');
        }
    };

    return (
        <div className='geral-cardapio'>

            <div className="header-nav-cardapio">
                <p className='opcao-lista-cardapio'><Link to="/">Página Principal </Link></p>
                <img className="header-logo-cardapio" src={logo} alt="Logo Quy Açai" />
            </div>

            <form onSubmit={handleSubmit}>
                <div className='container-label-cardapio'>
                    <p>Nome Completo: <input className="input is-warning" type="text" name="cliente_nome" id="cliente_nome" maxlength="20" required placeholder="nome completo" /></p>
                    <p>Telefone: <input className="input is-warning" type="tel" name="cliente_telefone" id="cliente_telefone" maxlength="15" required placeholder="(00)000000000" /></p>
                    <p>E-mail: <input className="input is-warning" type="email" name="cliente_email" id="cliente_email" maxlength="50" required placeholder="nome123@gmail.com" /></p>
                    <p>Endereço: <input className="input is-warning" type="text" name="cliente_endereco" id="cliente_endereco" maxlength="50" required placeholder="RUA: NUM: BAIRRO:" /></p>
                </div>

                <div className="main-separacoes1-cardapio">
                    <p className="main-titulo-cardapio">Cardápio</p>
                </div>

                <div className="main-cardapio">
                    <div className="main-border-cardapio">
                        <div className="main-centro-cardapio">
                            <h1 className="title-cardapio">Valor dos copos:</h1>
                            <div className="subtitulo-cardapio">
                                <h2 className="subtitle-cardapio">180 ml : R$:10,00</h2>
                                <h2 className="subtitle-cardapio">300 ml : R$:14,00</h2>
                                <h2 className="subtitle-cardapio">400 ml : R$:16,00</h2>
                                <h2 className="subtitle-cardapio">500 ml : R$:18,00</h2>
                                <h2 className="subtitle-cardapio">700 ml : R$:24,00</h2>
                                <h2 className="subtitle-cardapio">Adicionais : R$:3,00</h2>
                                <h1 className="title2-cardapio">OBS : Na compra de um dos copos você tem direito a uma combinação</h1>
                            </div>
                        </div>
                    </div>

                    <div className="main-border-cardapio">
                        <div className="main-centro-cardapio">
                            <h1 className="title-cardapio">Combinações:</h1>
                            <div className="subtitulo-cardapio">
                                <h2 className="subtitle-cardapio">01 - LEITE EM PÓ, LEITE CONDENSADO E MORANGO</h2>
                                <h2 className="subtitle-cardapio">02 - MORANGO, BANANA E LEITE CONDENSADO</h2>
                                <h2 className="subtitle-cardapio">03 - GRANOLA, MEL E CASTANHAS</h2>
                                <h2 className="subtitle-cardapio">04 - BEIJINHO, DOCE DE LEITE E BRIGADEIRO</h2>
                                <h2 className="subtitle-cardapio">05 - MAÇA, KIWI E GRANOLA</h2>
                                <h2 className="subtitle-cardapio">06 - POWER BALL, LEITE CONDENSADO E BRIGADEIRO</h2>
                                <h2 className="subtitle-cardapio">07 - MOUSSE DE MARACUJÁ, CONFETE E LEITE EM PÓ</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-separacoes2-cardapio">
                    <p className="main-titulo-cardapio">Pedido</p>
                </div>

                <div className="main-form-pedido-cardapio">
                    <div className="main-border-pedido-cardapio">
                        <div className="main-centro-pedido-cardapio">
                            <div className="main-text-pedido-cardapio">
                                <h1>Copo (ml) :</h1>
                                <select name="pedido_tamanho_do_copo" id="pedido_tamanho_do_copo">
                                    <option value=""></option>
                                    <option value="180ml">180ml</option>
                                    <option value="300ml">300ml</option>
                                    <option value="400ml">400ml</option>
                                    <option value="500ml">500ml</option>
                                    <option value="700ml">700ml</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="main-border-pedido-cardapio">
                        <div className="main-centro-pedido-cardapio">
                            <div className="main-text-pedido-cardapio">
                                <h1>Combinação:</h1>
                                <fieldset>
                                    <ol>
                                        <li><input type="radio" name="pedido_combinacao_copo" value="1" /><label for="pedido_combinacao_copo_1">1</label>
                                            <input type="radio" name="pedido_combinacao_copo" value="2" /><label for="pedido_combinacao_copo_2">2</label></li>
                                        <li><input type="radio" name="pedido_combinacao_copo" value="3" /><label for="pedido_combinacao_copo_3">3</label>
                                            <input type="radio" name="pedido_combinacao_copo" value="4" /><label for="pedido_combinacao_copo_4">4</label></li>
                                        <li><input type="radio" name="pedido_combinacao_copo" value="5" /><label for="pedido_combinacao_copo_5">5</label>
                                            <input type="radio" name="pedido_combinacao_copo" value="6" /><label for="pedido_combinacao_copo_6">6</label></li>
                                        <li><input type="radio" name="pedido_combinacao_copo" value="7" /><label for="pedido_combinacao_copo_7">7</label>
                                            <input type="radio" name="pedido_combinacao_copo" value="8" /><label for="pedido_combinacao_copo_8">8</label></li>
                                        <li><input type="radio" name="pedido_combinacao_copo" value="9" /><label for="pedido_combinacao_copo_9">9</label>
                                            <input type="radio" name="pedido_combinacao_copo" value="10" /><label for="pedido_combinacao_copo_10">10</label></li>
                                    </ol>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div className="main-border-pedido-cardapio">
                        <div className="main-centro-pedido-cardapio">
                            <div className="main-text-pedido-cardapio">
                                <h1>Quantidade:</h1>
                                <fieldset>
                                    <ol>
                                        <li><input type="radio" name="pedido_quantidade_de_copo" value="1" /><label for="pedido_quantidade_de_copo_1">1</label></li>
                                        <li><input type="radio" name="pedido_quantidade_de_copo" value="2" /><label for="Quantidade_Copo_2">2</label></li>
                                        <li><input type="radio" name="pedido_quantidade_de_copo" value="3" /><label for="pedido_quantidade_de_copo_3">3</label></li>
                                        <li><input type="radio" name="pedido_quantidade_de_copo" value="4" /><label for="pedido_quantidade_de_copo_4">4</label></li>
                                        <li><input type="radio" name="pedido_quantidade_de_copo" value="5" /><label for="pedido_quantidade_de_copo_5">5</label></li>
                                    </ol>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div className="main-border-pedido-cardapio">
                        <div className="main-centro-pedido-cardapio">
                            <div className="main-text-pedido-cardapio">
                                <h1>Adicionais:</h1>
                                <fieldset>
                                    <ol>
                                        <li><input type="checkbox" name="pedido_adicional_biz" id="pedido_adicional_biz" /><label for="pedido_adicional_biz">Biz</label></li>
                                        <li><input type="checkbox" name="pedido_adicional_kitkat" id="pedido_adicional_kitkat" /><label for="pedido_adicional_kitkat">KitKat</label></li>
                                        <li><input type="checkbox" name="pedido_adicional_suflair" id="pedido_adicional_suflair" /><label for="pedido_adicional_suflair">Suflair</label></li>
                                        <li><input type="checkbox" name="pedido_adicional_nutella" id="pedido_adicional_nutella" /><label for="pedido_adicional_nutella">Nutella</label></li>
                                        <li><input type="checkbox" name="pedido_adicional_torrone" id="pedido_adicional_torrone" /><label for="pedido_adicional_torrone">Torrone</label></li>
                                    </ol>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div className="main-border-pedido-cardapio">
                        <div className="main-centro-pedido-cardapio">
                            <div className="main-text-pedido-cardapio">
                                <h1>Observações:</h1>
                                <textarea name="pedido_observacao" id="pedido_observacao" cols="15" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-button-cardapio">
                    <div className="block">
                        <button className="button is-warning" type="submit">Enviar Pedido</button>
                    </div>
                </div>

            </form>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Create</strong> by <a href="https://www.instagram.com/rafael.konscca/">Rafael Trevizoli</a>
                    </p>
                </div>
            </footer>

        </div >
    );
};

export default Cardapio;

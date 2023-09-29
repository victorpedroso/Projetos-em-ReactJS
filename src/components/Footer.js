// CSS
import styles from './Footer.module.css';

// Images
import Instagram from '../assets/images/instagram.png';
import Youtube from '../assets/images/youtube.png';
import Spotify from '../assets/images/spotify.png';
import Logo from '../assets/images/logo.png';

// Links
import { Link } from 'react-router-dom';

// Hooks
import { useState, useEffect } from 'react';


const Footer = () => {

  // Controle o estado dos cookies
  const [cookiesObrigatorios, setCookiesObrigatorios] = useState(true);
  const [cookiesFuncionais, setCookiesFuncionais] = useState(false);
  const [cookiesSegmentacao, setCookiesSegmentacao] = useState(false);

  // Abre e fecha a janela modal dos cookies
  const abrirModalCookies = () => {
    const modal = document.getElementById('janela_modal_cookies');
    modal.classList.add(styles.abrir);
    modal.addEventListener('click', (e) => {
      if(e.target.id === 'fechar' || e.target.id === 'janela_modal_cookies') {
        modal.classList.remove(styles.abrir);
      }
    })
  };
  // Abre e fecha a janela modal de privacidade
  const abrirModalPrivacidade = () => {
    const modal = document.getElementById('janela_modal_privacidade');
    modal.classList.add(styles.abrir);
    modal.addEventListener('click', (e) => {
      if(e.target.id === 'fechar' || e.target.id === 'janela_modal_privacidade') {
        modal.classList.remove(styles.abrir);
      }
    })
  };
  // Abre e fecha a janela modal das configurações
  const abrirModalDefinicoes = () => {
    const modal = document.getElementById('janela_modal_definicoes');
    modal.classList.add(styles.abrir);
    modal.addEventListener('click', (e) => {
      if(e.target.id === 'fechar' || e.target.id === 'janela_modal_definicoes') {
        modal.classList.remove(styles.abrir);
      }
    })
  };
  // Função para salvar as configurações definidas
  const fechar = () => {
    localStorage.obrigatorios = cookiesObrigatorios;
    localStorage.funcionais = cookiesFuncionais;
    localStorage.segmentacao = cookiesSegmentacao;
    const modal = document.getElementById('janela_modal_definicoes');
    modal.classList.remove(styles.abrir);
  };
  // Se usuario aceitar os cookies, todos são habilitados
  const aceito = () => {
    var msgCookies = document.getElementById('cookies_msg');
    localStorage.lgpd = "accepted";
    msgCookies.classList.remove(styles.mostrar_cookies);
    setCookiesObrigatorios(true);
    setCookiesFuncionais(true);
    setCookiesSegmentacao(true);
    localStorage.obrigatorios = true;
    localStorage.funcionais = true;
    localStorage.segmentacao = true;
  }
  useEffect(() => {
    var msgCookies = document.getElementById('cookies_msg');
    if(localStorage.lgpd && localStorage.lgpd === 'accepted') {
      msgCookies.classList.remove(styles.mostrar_cookies);
    } else {
      msgCookies.classList.add(styles.mostrar_cookies);
    }
  }, []);

  // Cria os cookies no localstorage do navegador
  useEffect(() => {
    const cookiesObrigatoriosStorage = localStorage.obrigatorios;
    const cookiesFuncionaisStorage = localStorage.funcionais;
    const cookiesSegmentacaoStorage = localStorage.segmentacao;
    if(cookiesObrigatoriosStorage && cookiesFuncionaisStorage && cookiesSegmentacaoStorage){
      setCookiesObrigatorios(JSON.parse(cookiesObrigatoriosStorage));
      setCookiesFuncionais(JSON.parse(cookiesFuncionaisStorage));
      setCookiesSegmentacao(JSON.parse(cookiesSegmentacaoStorage));
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.coluna}>
          <div className={styles.logo}>
            <img src={Logo} alt="Escola Moppe"/>
          </div>
        </div>
        <div className={styles.coluna}>
          <h3>Escola Moppe</h3>
          <div className={styles.links_uteis}>
            <p>Av. Lineu de Moura, 1655 - Urbanova - São José dos Campos/SP</p>
            <p>Tel.: (12) 3949-9380</p>
            <p><Link to="tel:(12) 99661-1437">Agendamento de visitas - (12) 99661-1437</Link></p>
            <p>E-mail: moppe@moppe.com.br</p>
          </div>
        </div>
        <div className={styles.coluna}>
          <h3>Redes sociais</h3>
        <div className={styles.coluna_sociais}>
            <div className={styles.icones}>
                <a href="https://www.instagram.com/escolamoppeoficial/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" className={styles.icones}/>
                </a>
            </div>
            <div className={styles.icones}>
                <a href="https://www.youtube.com/channel/UCl1jd2WwdpYcV4taCDBaX1g" target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt="Youtube" className={styles.icones}/>
                </a>
            </div>
            <div className={styles.icones}>
                <a href="https://open.spotify.com/show/3Zzkp8boZ6Tv30oeKCcaB8" target="_blank" rel="noopener noreferrer">
                <img src={Spotify} alt="Spotify" className={styles.icones}/>
                </a>
            </div>
        </div>
        </div>
      </div>
      <div className={styles.informacoes}>
        <h3>&copy;2023 - Escola Moppe</h3>
        <p>ESCOLA MOPPE LTDA - CNPJ: 07.535.734/0001-14</p>
      </div>
      <div className={styles.politicas}>
        <p onClick={() => abrirModalCookies()}>Política de cookies</p>
        <p onClick={() => abrirModalPrivacidade()}>Política de privacidade</p>
        <p onClick={() => abrirModalDefinicoes()}>Definição de cookies</p>
      </div>
      <div className={styles.janela_modal_cookies} id="janela_modal_cookies">
        <div className={styles.modal}>
            <button className={styles.fechar} id="fechar">X</button>
            <h1>Politica de cookies</h1>
            <p>Nós utilizamos cookies para melhorar a sua experiência em nosso site. Os cookies são pequenos arquivos de texto que armazenam informações em seu dispositivo. Ao continuar navegando, você concorda com o uso de cookies. Se desejar, você pode alterar as configurações de cookies no seu navegador.</p>
        </div>
      </div>
      <div className={styles.janela_modal_privacidade} id="janela_modal_privacidade">
        <div className={styles.modal}>
            <button className={styles.fechar} id="fechar">X</button>
            <h1>Politica de privacidade</h1>
            <p>Respeitamos sua privacidade. Coletamos dados pessoais apenas para melhorar sua experiência no site. Suas informações são protegidas e não compartilhadas com terceiros sem seu consentimento. Você tem controle sobre seus dados e pode solicitar sua exclusão a qualquer momento.</p>
            <p className={styles.politica_de_privacidade}>Para acessar a política de privacidade <Link id="fechar" to="/politica-de-privacidade">clique aqui</Link>.</p>
        </div>
      </div>
      <div className={styles.janela_modal_definicoes} id="janela_modal_definicoes">
        <div className={styles.modal}>
            <button className={styles.fechar} id="fechar">X</button>
            <h1>Definições de cookies</h1>
            <div className={styles.definicoes_privacidade}>
                <input type="checkbox" checked={cookiesObrigatorios} onChange={(e) => setCookiesObrigatorios(e.target.checked)} disabled/>Cookies obrigatórios
            </div>
            <div className={styles.definicoes_privacidade}>
                <input type="checkbox" checked={cookiesFuncionais} onChange={(e) => setCookiesFuncionais(e.target.checked)}/>Cookies funcionais
            </div>
            <div className={styles.definicoes_privacidade}>
                <input type="checkbox" checked={cookiesSegmentacao} onChange={(e) => setCookiesSegmentacao(e.target.checked)}/>Cookies de segmentação
            </div>
            <button className={styles.btn_salvar} onClick={fechar}>Salvar</button>
        </div>
      </div>
      <div className={styles.cookies_msg} id="cookies_msg">
        <div className={styles.cookies_txt}>
          <p>Este site usa cookies e tecnologias afins, que são pequenos arquivos ou pedaços de texto baixados para um aparelho quando o visitante acessa um website ou aplicativo. Ao utilizar nosso site você está de acordo com a utilização dos cookies para te proporcionar uma melhor experiência.</p>
          <div className={styles.cookies_btn}>
            <button onClick={() => aceito()}>Aceito</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
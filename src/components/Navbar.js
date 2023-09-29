// CSS
import styles from './Navbar.module.css';

// Hooks
import { useEffect, useRef, useState } from 'react';

// NavLink
import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

// Images
import Logo from '../assets/images/icones/logo_moppe.png';

const Navbar = () => {

    const {user} = useAuthValue();
    const {logout} = useAuthentication();

    // Controla os estados dos submenus
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        moppe: false,
        ciclos: false,
        programa: false,
        atividades: false,
        utilidades: false,
        blog: false
    });
      
    // Função que ativa o submenu se o mouse passar em cima
    const handleMouseEnter = (submenu) => {
        setIsDropdownOpen((prevState) => ({
          ...prevState,
          [submenu]: true
        }));
    };
    
      // Função que fecha o submenu se o mouse sair de cima
    const handleMouseLeave = (submenu) => {
        setIsDropdownOpen((prevState) => ({
          ...prevState,
          [submenu]: false
        }));
    };

    // Função que controla a troca de menu (transparente para aparente)
    useEffect(() => {
        const handleScroll = () => {
            let header = document.querySelector('#header');
            header.classList.toggle(styles.rolagem, window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    return (
        <header id="header">
            <div className={styles.container}>
                <div className={styles.flex}>
                    <NavLink to="/"><img src={Logo} alt="Escola moppe" /></NavLink>
                    <nav className={styles.menu}>
                        <ul className={styles.navbar}>
                            <li onMouseEnter={() => handleMouseEnter('moppe')} onMouseLeave={() => handleMouseLeave('moppe')}>
                                <p>A Moppe</p>
                                <ul className={`${styles.navbar_dropdown} ${isDropdownOpen.moppe ? styles.open : ''}`}>
                                    <li><NavLink to="/sobre">Sobre a Moppe</NavLink></li>
                                    <li><NavLink to="/propostapedagogica">Proposta Pedagógica</NavLink></li>
                                    <li><NavLink to="/estruturaescolar">Estrutura Escolar</NavLink></li>
                                    {/* <li><NavLink to="/metodologias">Metodologias</NavLink></li>
                                    <li><NavLink to="/depoimentos">Depoimentos</NavLink></li> */}
                                </ul>
                            </li>
                            <li onMouseEnter={() => handleMouseEnter('ciclos')} onMouseLeave={() => handleMouseLeave('ciclos')}>
                                <p>Ciclos</p>
                                <ul className={`${styles.navbar_dropdown} ${isDropdownOpen.ciclos ? styles.open : ''}`}>
                                    <li><NavLink to="/bercario">Berçário</NavLink></li>
                                    <li><NavLink to="/infantil">Infantil</NavLink></li>
                                    <li><NavLink to="/anosiniciais">Anos Iniciais</NavLink></li>
                                    <li><NavLink to="/anosfinais">Anos Finais</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/smart"><p>Programa Smart e Bilíngue</p></NavLink>
                            </li>
                            <li>
                                <NavLink to="/atividadesextra"><p>Atividades Extracurriculares</p></NavLink>
                            </li>
                            <li onMouseEnter={() => handleMouseEnter('utilidades')} onMouseLeave={() => handleMouseLeave('utilidades')}>
                                <p>Utilidades Moppe</p>
                                <ul className={`${styles.navbar_dropdown} ${isDropdownOpen.utilidades ? styles.open : ''}`}>
                                    <li><NavLink to="/contato">Contato</NavLink></li>
                                    <li><NavLink to="https://portal.sophia.com.br/SophiA_65/Acesso.aspx?escola=3208" target="_blank">Terminal Web</NavLink></li>
                                    <li><NavLink to="https://web.agendaedu.com/" target="_blank">Agenda Edu</NavLink></li>
                                    <li><NavLink to="https://escolamoppe.gupy.io/" target="_blank">Trabalhe Conosco</NavLink></li>
                                </ul>
                            </li>
                            {user && (
                            <li onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={() => handleMouseLeave('blog')}>
                                <p>Blog</p>
                                <ul className={`${styles.navbar_dropdown} ${isDropdownOpen.blog ? styles.open : ''}`}>
                                    <li><NavLink to="/blog">Ver blog</NavLink></li>
                                    <li><NavLink to="/blog/createpost">Criar postagem</NavLink></li>
                                    <li><NavLink to="/blog/dashboard">Dashboard</NavLink></li>
                                    <li><NavLink><button onClick={logout}>Logout</button></NavLink></li>
                                </ul>
                            </li>
                            )}
                            {!user && (
                            <li><NavLink to="/blog"><p>Blog</p></NavLink></li>
                            )}
                        </ul>
                    </nav>

                    <div className={styles.contato}>
                        <li><NavLink to="https://wa.me/message/4YIEE2EYOTBME1#rd-box-joq3m2m2" target="_blank"><button>AGENDE SUA VISITA</button></NavLink></li>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

import React, { useEffect, useState } from "react";

// Framer motion
import { motion, AnimatePresence } from "framer-motion";
// CSS
import './NavbarMobile.css';
// Icones
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
//React router 
import { NavLink, Link, useLocation } from "react-router-dom";

// Define as posições do menu
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" } // Inicia o menu fora da tela à direita
};
const NavbarMobile = () => {
    const [show, setShow] = useState(false); // Controla o status do menu
    const [menuOpen, setMenuOpen] = useState(null); // Controla o status dos itens do menu 
    const location = useLocation(); // Controle das rotas

    // Função para setar o status dos itens dropdown
    const handleClick = (index) => {
        setMenuOpen(menuOpen === index? null : index);
    };

    // Função para montar/desmontar a nav
    const showNav = () => {
        setShow(!show);
    };

    // Verifica se a rota foi alterada e fecha o menu e os itens
    useEffect(() => {
        setShow(false);
        setMenuOpen(false);
      }, [location.pathname]);
    
    return (
        <>
            <AnimatePresence>
                {show && (
                    <motion.nav
                        className={`navbar ${menuOpen !== null ? 'open' : ''}`}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div className="inner-nav">
                            <ul>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                <motion.li 
                                    whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                    whileTap={{scale: 0.9}}
                                    style={{ position: 'relative' }}
                                >
                                    Início
                                </motion.li>
                                </NavLink>
                                <motion.li 
                                    whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                    whileTap={{scale: 0.9}}
                                    style={{ position: 'relative' }}
                                    onClick={() => handleClick(1)}
                                >
                                    <p>A Moppe <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></p>
                                </motion.li>
                                {menuOpen === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{opacity: 1}}
                                        transition={{ duration: 0.5 }}
                                        exit={{ opacity: 0, y: 50 }}
                                    > 
                                        <NavLink to="/sobre">
                                            <motion.li
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                whileHover={{ backgroundColor: 'rgb(234, 137, 35)' }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                Sobre a Moppe
                                            </motion.li>
                                        </NavLink>
                                        <NavLink to="/propostapedagogica">
                                            <motion.li 
                                                whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                Proposta pedagógica
                                            </motion.li>
                                        </NavLink>
                                        <NavLink to="estruturaescolar">
                                            <motion.li 
                                                whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                Estrutura escolar
                                            </motion.li>
                                        </NavLink>
                                    </motion.div>              
                                )}
                                <motion.li 
                                    whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                    whileTap={{scale: 0.9}}
                                    style={{ position: 'relative' }}
                                    onClick={() => handleClick(2)}
                                >
                                    <p>Ciclos <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></p>
                                </motion.li>
                                {menuOpen === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{opacity: 1}}
                                        transition={{ duration: 0.5 }}
                                        exit={{ opacity: 0, y: 50 }}
                                    > 
                                        <NavLink to="/bercario">
                                            <motion.li
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                whileHover={{ backgroundColor: 'rgb(234, 137, 35)' }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                Berçário
                                            </motion.li>
                                        </NavLink>
                                        <NavLink to="/infantil">
                                            <motion.li 
                                                whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                Infantil
                                            </motion.li>
                                        </NavLink>
                                        <NavLink to="/anosiniciais">
                                            <motion.li 
                                                whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                Anos iniciais
                                            </motion.li>
                                        </NavLink>
                                        <NavLink to="anosfinais">
                                            <motion.li 
                                                whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                Anos finais
                                            </motion.li>
                                        </NavLink>
                                    </motion.div>              
                                )}
                                <NavLink to ="/smart">
                                <motion.li 
                                    whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                    whileTap={{scale: 0.9}}
                                >
                                    Programa Smart e Bilíngue
                                </motion.li>
                                </NavLink>
                                <NavLink to="/atividadesextra">
                                    <motion.li 
                                        whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                        whileTap={{scale: 0.9}}
                                    >
                                        Atividades Extracurriculares
                                    </motion.li>
                                </NavLink>
                                <motion.li 
                                    whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                    whileTap={{scale: 0.9}}
                                    style={{ position: 'relative' }}
                                    onClick={() => handleClick(3)}
                                >
                                    <p>Utilidades Moppe <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></p>
                                </motion.li>
                                {menuOpen === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{opacity: 1}}
                                        transition={{ duration: 0.5 }}
                                        exit={{ opacity: 0, y: 50 }}
                                    > 
                                        <NavLink to="/contato">
                                            <motion.li
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                whileHover={{ backgroundColor: 'rgb(234, 137, 35)' }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                Contato
                                            </motion.li>
                                        </NavLink>
                                        <Link to="https://portal.sophia.com.br/SophiA_65/Acesso.aspx?escola=3208" target="_blank">
                                            <motion.li 
                                                whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                Terminal WEB
                                            </motion.li>
                                        </Link> 
                                        <Link to="https://web.agendaedu.com/" target="_blank">
                                            <motion.li 
                                                whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                Agenda Edu
                                            </motion.li>
                                        </Link>
                                        <Link to="https://escolamoppe.gupy.io/" target="_blank">
                                            <motion.li 
                                                whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                Trabalhe conosco
                                            </motion.li>
                                        </Link> 
                                    </motion.div>              
                                )}
                                <motion.li 
                                    whileHover={{backgroundColor: 'rgb(234,137,35)'}}
                                    whileTap={{scale: 0.9}}
                                >
                                    <p>Blog</p>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
            <motion.button
                className="toggle"
                onClick={showNav}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                {show ? <CloseIcon/> : <MenuIcon />}
            </motion.button>
        </>
    )
}

export default NavbarMobile;
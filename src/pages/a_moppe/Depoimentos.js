//CSS
import styles from './Deposimentos.module.css';

//Motion
import { motion } from 'framer-motion';

//Hooks
import { useState, useEffect } from 'react';

const Depoimentos = () => {

  const [control, setControl] = useState(false);
  const [largura, setLargura] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        setControl(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const setarLargura = () => {
      const larguraTela = window.innerWidth;
      if (larguraTela > 1030) {
        setLargura(window.innerWidth - (window.innerWidth * 0.35));
      } else {
        setLargura(window.innerWidth - (window.innerWidth * 0.15));
      }
    };

    setarLargura();
    window.addEventListener('resize', setarLargura);

    return () => {
      window.removeEventListener('resize', setarLargura);
    };
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.banner}></section>
      <div className={styles.title_page}>
        <h1>Depoimentos</h1>
        {control && (
          <motion.hr
            initial={{ width: 1 }}
            animate={{ width: largura }}
            transition={{ type: 'tween', duration: 2 }}
            style={{ originX: 0, color: '#FFF' }}
          />
        )}
      </div>

    </div>
  )
}

export default Depoimentos
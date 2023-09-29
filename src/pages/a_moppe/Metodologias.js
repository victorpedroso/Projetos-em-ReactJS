//Motion
import { motion } from 'framer-motion';

//Hooks
import { useState, useEffect } from 'react';

//CSS
import styles from './Metodologias.module.css';

//Images
import title_page from '../../assets/images/metodologias/title_page.png';

const Metodologias = () => {
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

  return (
    <div className={styles.container}>
      <section className={styles.banner}></section>
      <div className={styles.title_page}>
        <img src={title_page} alt="Metodologias" className={styles.img_title}/>
        <motion.hr
              initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
              animate={{ width: '80%' }}
              transition={{ type: 'tween', duration: 2 }}
              style={{ originX: 0 }}
          />
        <div className={styles.conteudo}>
          <div className={styles.title}>
            <h2>Metodologias Ativas</h2>
            <p>Pioneira em inovação nas práticas pedagógicas, essa abordagem faz parte da proposta pedagógica da escola desde a sua fundação.</p>
            <p>As metodologias ativas promovem uma educação crítico-reflexiva, na qual posiciona o aluno no centro do processo de aquisição do conhecimento, enquanto o professor assume o papel de mediador, transformando as aulas em experiências ricas, significativas e estimulantes.</p>
          </div>
          <p>FOTO + TEXTO

            Cultura Maker: 
            Projetos:
            Aprendizagem Baseada em Problemas:  
            Sala de aula invertida:
          </p>
          <div>
            <motion.hr
              initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
              animate={{ width: '80%' }}
              transition={{ type: 'tween', duration: 2 }}
              style={{ originX: 0 }}
          />
        </div>
          <div className={styles.title}>
            <h2>Tecnologia como ferramenta de aprendizagem</h2>
            <p>Usufruir das novas tecnologias no universo educacional significa agregar as mudanças sociais ao ambiente acadêmico, possibilitando conexões, reflexões e inovações através de uma infinidade de recursos e linguagens midiáticas empregadas com o intuito de incentivar e possibilitar novas formas de aprender</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metodologias;

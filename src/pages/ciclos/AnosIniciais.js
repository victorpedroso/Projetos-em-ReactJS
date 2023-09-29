//CC
import styles from './AnosIniciais.module.css';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from 'framer-motion';

//Images
import title_page from '../../assets/images/anos_iniciais/title_anosiniciais.png';
import img_inicio from '../../assets/images/anos_iniciais/img_inicio.png';
import img_autonomia from '../../assets/images/anos_iniciais/img_autonomia.png';
import img_praticas from '../../assets/images/anos_iniciais/img_praticas.png';
import img_trabgrupo from '../../assets/images/anos_iniciais/img_trabgrupo.png';
import img2_trabgrupo from '../../assets/images/anos_iniciais/img2_trabgrupo.png';
import smart from '../../assets/images/anos_iniciais/smart.png';
import musica from '../../assets/images/anos_iniciais/musica.png';
import prog_games from '../../assets/images/anos_iniciais/prog_games.png';
import ed_fisica from '../../assets/images/anos_iniciais/ed_fisica.png';

function useIntersectionObserver(ref, callback) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0.65) {
        callback();
        observer.unobserve(ref.current);
      }
    }, {
      threshold: 0.65, 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback]);
}
const AnosIniciais = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);
  const componentRef4 = useRef(null);
  const componentRef5 = useRef(null);
  const componentRef6 = useRef(null);
  const componentRef7 = useRef(null);
  const componentRef8 = useRef(null);
  const componentRef9 = useRef(null);

  useIntersectionObserver(componentRef1, () => {
    setIsVisible1(true);
  });
  useIntersectionObserver(componentRef2, () => {
    setIsVisible2(true);
  });
  useIntersectionObserver(componentRef3, () => {
    setIsVisible3(true);
  });
  useIntersectionObserver(componentRef4, () => {
    setIsVisible4(true);
  });
  useIntersectionObserver(componentRef5, () => {
    setIsVisible5(true);
  });
  useIntersectionObserver(componentRef6, () => {
    setIsVisible6(true);
  });
  useIntersectionObserver(componentRef7, () => {
    setIsVisible7(true);
  });
  useIntersectionObserver(componentRef8, () => {
    setIsVisible8(true);
  });
  useIntersectionObserver(componentRef9, () => {
    setIsVisible9(true);
  });

  return (
    <div className={styles.container}>
      <section className={styles.banner} />
      <div className={styles.titulo}>
        <img src={title_page} alt="Anos iniciais" />
      </div>
      <div className={styles.linha_titulo}>
      <motion.div
            ref={componentRef9}
            initial={{opacity: 0}}
            animate={{opacity: isVisible9 ? 1 : 0}}
            transition={{duration: 1.5}}
      >
        {isVisible9 && (
        <motion.hr
          initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
          animate={{ width: '63%' }}
          transition={{ type: 'tween', duration: 2 }}
          style={{ originX: 0 }}
        />
        )}
      </motion.div>
      </div>
      <div className="box_conteudo">
        <motion.div
          className="conteudo"
          ref={componentRef1}
          initial={{opacity: 0}}
          animate={{opacity: isVisible1 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <p>O Anos Iniciais destina-se à formação da criança de 06 a 10 anos, a fim de desenvolver procedimentos escritores e leitores, raciocínio lógico, habilidades físicas, bem como a compreensão do ambiente natural e social e repertório artístico.</p>
            <p>Nesta fase, é estruturada a sistematização dos processos pedagógicos, tais como os procedimentos de registro e pesquisa, instrumentos de avaliação e hábito de estudo diário, sem perder de vista uma aprendizagem plena de relações e significado, de incentivo à criatividade e respeito à faixa etária.</p>
          </div>
          <div className={styles.column}>
            <img src={img_inicio} alt="Anos iniciais" className={styles.img1}/>
          </div>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef2}
          initial={{opacity: 0}}
          animate={{opacity: isVisible2 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <h1>Autonomia Moral</h1>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef2}
          initial={{opacity: 0}}
          animate={{opacity: isVisible2 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <p>A escola tem como missão, ser formadora de cidadãos autônomos, baseando-se em teorias científicas e princípios humanistas, e para isso, o trabalho com autonomia moral torna-se essencial.</p>
          </div>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef3}
          initial={{opacity: 0}}
          animate={{opacity: isVisible3 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <img src={img_autonomia} alt="Autonomia" className={styles.img2}/>
          </div>
          <div className={styles.column}>
            <p>O caminho para a autonomia moral é a constante reflexão sobre os atos, é transformar o conflito em oportunidade de aprendizado, fazendo com que o aluno saiba pensar no coletivo, colocar-se no lugar do outro e responsabilizar-se pelas consequências de suas ações.</p>
            <p>Somente por meio da reflexão nossos alunos terão oportunidade de construir bons modelos e, assim, construir internamente princípios sólidos que guiem suas ações pela vida.</p>
          </div>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef4}
          initial={{opacity: 0}}
          animate={{opacity: isVisible4 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <h1>Praticas Signicativas</h1>
            <p>A Moppe investe fortemente na formação de seus educadores como resultado temos um currículo de qualidade, com práticas pedagógicas ricas e desenvolvidas de forma contextualizada e significativa.</p>
            <p>A excelência no ensino pode ser observada na qualidade das aulas, onde o aluno, como protagonista, desenvolve as competências necessárias por meio de projetos, trabalhos em grupo, registros significativos, estratégias de estudos dirigidas, estudo do meio, pesquisas entre outras.</p>
            <p>O processo investigativo faz parte da construção do conhecimento dos alunos. Durante a pesquisa, há a aquisição de conteúdos, de habilidades socioemocionais e de competências que ajudam no desenvolvimento e no senso crítico dos estudantes.</p>
          </div>
          <div className={styles.column}>
            <img src={img_praticas} alt="Praticas" className={styles.img3}/>
          </div>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef5}
          initial={{opacity: 0}}
          animate={{opacity: isVisible5 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <img src={img_trabgrupo} alt="Praticas" className={styles.img4}/>
          </div>
          <div className={styles.column}>
            <h1>Trabalho em Grupo</h1>
            <p>O trabalho em grupo promove uma sala de aula democrática, onde o professor, com seu planejamento meticuloso, define os papéis dos alunos, e media as relações com o conteúdo, incentivando os estudantes a pensarem por eles próprios, empoderando e respeitando o posicionamento de cada aluno. Um ambiente de segurança e confiança, onde as crianças expõem suas ideias com espontaneidade.</p>
          </div>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef6}
          initial={{opacity: 0}}
          animate={{opacity: isVisible6 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <p>Por meio de situações como criar argumentos baseado em evidências, promover discussão sobre conceitos e ideias, análise se erros, ouvir a opinião dos colegas, entre outras, são situações que trabalham às habilidades a fim de alcançar as competências esperadas para cada faixa etária. Neste contexto, o papel do professor é garantir a participação equitativa e um aprendizado relevante e rigoroso. </p>
          </div>
          <div className={styles.column}>
            <img src={img2_trabgrupo} alt="Praticas" className={styles.img5}/>
          </div>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef7}
          initial={{opacity: 0}}
          animate={{opacity: isVisible7 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <h1>Muito mais...</h1>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef8}
          initial={{opacity: 0}}
          animate={{opacity: isVisible8 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <div className={styles.images_muitomais}>
              <img src={ed_fisica} alt="Ed física"/>
              <img src={prog_games} alt="Programação de games" />
              <img src={musica} alt="Músicas" />
              <img src={smart} alt="Smart" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AnosIniciais
//CSS
import styles from './PropostaPedagogica.module.css';

//Images
import Triade from '../../assets/images/proposta_pedagogica/Triade.png';
import titulo from '../../assets/images/proposta_pedagogica/titulo.png';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from 'framer-motion';

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

const PropostaPedagogica = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);

  useIntersectionObserver(componentRef1, () => {
    setIsVisible1(true);
  });
  useIntersectionObserver(componentRef2, () => {
    setIsVisible2(true);
  });
  useIntersectionObserver(componentRef3, () => {
    setIsVisible3(true);
  });

  return (
    <div className={styles.container}>
      <section className={styles.banner} />
      <div className={styles.titulo}> 
        <img src={titulo} alt="Proposta pedagógica" className={styles.img_titulo}/>
      </div>
      <div className={styles.linha_titulo}>
      <motion.div
            ref={componentRef1}
            initial={{opacity: 0}}
            animate={{opacity: isVisible1 ? 1 : 0}}
            transition={{duration: 1.5}}
      >
        {isVisible1 && (
        <motion.hr
            initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
            animate={{ width: '80%' }}
            transition={{ type: 'tween', duration: 2 }}
            style={{ originX: 0 }}
        />
        )}
      </motion.div>
      </div>
      <div className="box_conteudo">
        <motion.div
            className="conteudo"
            ref={componentRef2}
            initial={{opacity: 0}}
            animate={{opacity: isVisible2 ? 1 : 0}}
            transition={{duration: 1.5}}
        >          
          <div className={styles.column}>
            <p>Se para levantar uma casa firme é preciso uma estrutura resistente. Para construir um ser humano completo é preciso uma base forte.</p>
            <p>A Moppe oferece uma base forte por meio de uma tríade educacional formada por valores éticos, conteúdos sólidos e competências. Nosso objetivo é construir a autonomia moral e intelectual de nossos alunos.</p>
            <p><b>A Moppe tem a missão de transformar o mundo por meio de uma educação forte aliada ao prazer de aprender, com intuito maior de explorar o potencial de cada aluno.</b></p>
            <p>Nossa abordagem de ensino destaca o protagonismo dos alunos no processo de aprendizagem, valoriza as experiências reais, com explorações dos meios, o trabalho em equipe, o enfrentamento de problemas e a pesquisa em seus múltiplos sentidos.</p>
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
            <img src={Triade} alt="Triade" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PropostaPedagogica
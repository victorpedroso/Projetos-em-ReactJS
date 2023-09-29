//CSS
import styles from './Atividades.module.css';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from 'framer-motion';

//Images
import horarios from '../../assets/images/cec/horarios.png';
import titulo from '../../assets/images/cec/titulo.png';

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


const Atividades = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);

    useIntersectionObserver(componentRef1, () => {
      setIsVisible1(true);
    });
    useIntersectionObserver(componentRef2, () => {
      setIsVisible2(true);
    });
    return (
    <div className={styles.container}>
      <section className={styles.banner} />
      <div className={styles.titulo}>
        <img src={titulo} alt="CEC" />
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
            animate={{ width: '55%' }}
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
          <div>
            <p>As atividades extracurriculares são realizadas através do CEC, o qual visa incentivar os alunos na prática de atividades esportivas e culturais de forma divertida, além de trabalhar com o convívio social, trabalho em equipe, a adoção de hábitos saudáveis no dia a dia das crianças e proporcionar momentos de lazer e entretenimento trabalhando tanto o físco, o lógico como o emocional.</p>
          </div>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef2}
          initial={{opacity: 0}}
          animate={{opacity: isVisible2 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <img src={horarios} alt="CEC" className={styles.img1}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Atividades
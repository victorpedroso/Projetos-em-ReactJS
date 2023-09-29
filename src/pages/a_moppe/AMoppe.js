//CSS
import styles from './AMoppe.module.css';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from 'framer-motion';

//Images
import amoppe from '../../assets/images/amoppe/amoppe.png';
import box1 from '../../assets/images/amoppe/box1/box1.png';
import box2 from '../../assets/images/amoppe/box2/teresinha.png';
import fala_teresinha from '../../assets/images/amoppe/box2/fala_teresinha.png';

import ReactGA4 from 'react-ga4';

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

const AMoppe = () => {

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

    const handleClick = () => {
      console.log("Evento disparado");
      ReactGA4.event({
        category: 'Botão',
        action: 'Clique',
        label: 'Botao teste',
      });
    };

  return (

    <div className={styles.container}>
        <section className={styles.banner}>
        </section>
        <div className={styles.conteudo}>
            <img src={amoppe} alt="A moppe" className={styles.img_title} />
            <motion.div
                ref={componentRef1}
                initial={{opacity: 0}}
                animate={{opacity: isVisible1 ? 1 : 0}}
                transition={{duration: 1.5}}
            >
              {isVisible1 && (
              <motion.hr
                initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
                animate={{ width: '58%' }}
                transition={{ type: 'tween', duration: 2 }}
                style={{ originX: 0 }}
              />
            )}
            </motion.div>
            <motion.div
              className="conteudo"
              ref={componentRef2}
              initial={{opacity: 0}}
              animate={{opacity: isVisible2 ? 1 : 0}}
              transition={{duration: 1.5}}
            >
              <div className={styles.conteudo_principal}>
                <div className={styles.box}>
                  <div className={styles.parte1_texto}>
                    <p>
                      Quando um aluno entra pelos portões da Moppe e sente a energia de um ambiente vivo, alegre e pulsante, talvez não imagine o que faz o coração da escola bater. 
                    </p>
                    <p>
                      É uma vida inteira, com um começo de muita esperança e uma trajetória repleta de realizações. Nessas quatro décadas, seres humanos se formaram e famílias inteiras se transformaram.
                    </p>
                    <p>
                      O começo dessa história, como todas as grandes conquistas, surgiu de um sonho. O desejo de inovar, de ir além do ensino de conteúdos básicos para os estudantes e oferecer mais: autonomia, criatividade, cidadania, senso crítico e ensinar as crianças a pensarem e a resolverem problemas.
                    </p>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.parte2_teresinha}>
                    <img src={box2} alt="Teresinha"/>
                  </div>
                  <div className={styles.parte2_fala}>
                    <img src={fala_teresinha} alt="Teresinha"/>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* <button onClick={handleClick}>Clique aqui</button> */}
        </div>
    </div>
  )
}

export default AMoppe
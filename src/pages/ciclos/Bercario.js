//CSS
import styles from './Bercario.module.css';

//Motion
import { motion } from 'framer-motion';

//Hooks
import { useState, useEffect, useRef } from 'react';

// Images
import img_title from '../../assets/images/bercario/bercario_title.png';
import img1 from '../../assets/images/bercario/img1.png';
import img2 from '../../assets/images/bercario/img2.png';
import img3 from '../../assets/images/bercario/img3.png';
import img4 from '../../assets/images/bercario/img4.png';
import cameras from '../../assets/images/bercario/cameras.png';
import alimentacao from '../../assets/images/bercario/alimentacao.png';

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

const Bercario = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);
  const componentRef4 = useRef(null);
  const componentRef5 = useRef(null);
  const componentRef6 = useRef(null);
  const componentRef7 = useRef(null);

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


  return (
    <div className={styles.container}>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
      >
        <section className={styles.banner}/>
      </motion.div>
      <div className={styles.titulo}>
        <img src={img_title} alt="Bercario" />
      </div>
      <div className={styles.linha_titulo}>
        <motion.div
                ref={componentRef7}
                initial={{opacity: 0}}
                animate={{opacity: isVisible7 ? 1 : 0}}
                transition={{duration: 1.5}}
        > 
        {isVisible7 && (
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
          ref={componentRef1}
          initial={{opacity: 0}}
          animate={{opacity: isVisible1 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <img src={img1} alt="Bercario" className={styles.img1}/>
          </div>
          <div className={styles.column}>
            <p>Os primeiros anos da vida do bebê são os mais importantes para o futuro desenvolvimento de suas emoções, inteligência e capacidade motora. Por isso, o Berçário Moppe Bambini oferece às crianças os estímulos adequados em um ambiente planejado, seguro e cercado de muito carinho.</p>
          </div>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef2}
          initial={{opacity: 0}}
          animate={{opacity: isVisible2 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.column}>
            <h1>Diversidade de propostas e materiais</h1>
            <p>Vamos além de uma aprendizagem baseada somente em transmissão de conteúdo e informações. Articulamos situações diferenciadas em sua rotina escolar, e cuidamos do ambiente para que a aprendizagem ocorra garantindo a participação ativa da criança. A escolha dos materiais, a linguagem que eles indicam, a forma como estão dispostos potencializam as experiências das crianças, convidando-as a desenvolver a autonomia para o criar, o aprender, o pesquisar e o investigar.</p>
          </div>
          <div className={styles.column}>
            <img src={img3} alt="Bercario" className={styles.img2}/>
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
            <img src={img4} alt="Bercario" className={styles.img3}/>
          </div>
          <div className={styles.column}>
            <h1>Profissionais diferenciados</h1>
            <p>O comprometimento e a seriedade com a educação somados ao compromisso em estar em constante inovação e aprimoramento fazem com que a Moppe invista fortemente em formação.  São mais de 7 MIL HORAS Anuais de Capacitação, para oferecermos aos nossos alunos a melhor base.</p>
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
              <h1>Espaço físico</h1>
              <p>Planejado para oferecer um ambiente, seguro, limpo, saudável e cercado de afeto para os  bebês a partir do seu 1º ano de vida.</p>
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
            <img src={img2} alt="Bercario" className={styles.img4}/>
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
            <div className={styles.box1}>
              <h1>Sistema de câmeras de vídeo</h1>
              <p>Nosso oferece um moderno sistema de câmeras de vídeo, que contribui para a segurança das crianças. Desta forma, os pais podem acompanhar seus filhos enquanto eles estão no Espaço Bambini, por meio de um aplicativo no celular, disponível para Android e iOS.</p>
              <img src={cameras} alt="Cameras" className={styles.img5}/>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.box2}>
              <h1>Alimentação balanceada</h1>
              <p>Toda nossa alimentação é desenvolvida por uma nutricionista, e o cardápio é enviado mensalmente aos pais, que, juntamente com o pediatra, podem adaptá-lo de acordo com as necessidades do seu bebê.</p>
              <img src={alimentacao} alt="Alimentação balanceada" className={styles.img6}/>
            </div>
          </div>
        </motion.div>
        {/* <motion.div
          className="conteudo"
          ref={componentRef7}
          initial={{opacity: 0}}
          animate={{opacity: isVisible7 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <div className={styles.parte6}>
            <h1>Aulas e atividades </h1>
            <div className={styles.box_aulas}>
              <img src={img3} alt="Aulas" />
              <img src={img3} alt="Aulas" />
              <img src={img3} alt="Aulas" />
              <img src={img3} alt="Aulas" />
              <img src={img3} alt="Aulas" />
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  )
}

export default Bercario
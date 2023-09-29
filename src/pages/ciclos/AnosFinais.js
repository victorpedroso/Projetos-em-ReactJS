//CSS
import styles from './AnosFinais.module.css';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from "framer-motion";

//Images
import title_page from '../../assets/images/anos_finais/title_page.png';
import img1 from '../../assets/images/anos_finais/img1.png';
import img1_competencias from '../../assets/images/anos_finais/img1_competencias.png';
import img2_competencias from '../../assets/images/anos_finais/img2_competencias.png';
import img_estrategia from '../../assets/images/anos_finais/img_estrategia.png';
import moppemais from '../../assets/images/anos_finais/moppe+.png';
import moppe1 from '../../assets/images/anos_finais/moppe1.png';
import moppe2 from '../../assets/images/anos_finais/moppe2.png';
import moppe3 from '../../assets/images/anos_finais/moppe3.png';
import moppe4 from '../../assets/images/anos_finais/moppe4.png';
import moppe5 from '../../assets/images/anos_finais/moppe5.png';
import moppe6 from '../../assets/images/anos_finais/moppe6.png';
import moppe7 from '../../assets/images/anos_finais/moppe7.png';
import moppe8 from '../../assets/images/anos_finais/moppe8.png';
import moppe9 from '../../assets/images/anos_finais/moppe9.png';
import moppe10 from '../../assets/images/anos_finais/moppe10.png';
import moppe11 from '../../assets/images/anos_finais/moppe11.png';
import moppe12 from '../../assets/images/anos_finais/moppe12.png';

const image_url = [moppe1, moppe2, moppe3, moppe4, moppe5, moppe6, moppe7, moppe8, moppe9, moppe10, moppe11, moppe12];

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

const AnosFinais = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);
  const componentRef4 = useRef(null);
  const componentRef5 = useRef(null);
  const componentRef6 = useRef(null);
  const componentRef7 = useRef(null);
  const componentRef8 = useRef(null);

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

  return (
    <div className={styles.container}>
      <section className={styles.banner} />
      <div className={styles.titulo}>
        <img src={title_page} alt="Anos finais" className={styles.img_title}/>
      </div>
      <div className={styles.linha_titulo}>
      <motion.div
            ref={componentRef8}
            initial={{opacity: 0}}
            animate={{opacity: isVisible8 ? 1 : 0}}
            transition={{duration: 1.5}}
      >
        {isVisible8 && (
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
            <p>Desde os primeiros passos do aluno Moppe, busca-se desenvolver a curiosidade, o senso crítico, o protagonismo, a autonomia moral, o comprometimento, a desenvoltura verbal e o trabalho em grupo.</p>
            <p>Nos anos finais do ensino fundamental (6º ao 9º ano) nossa tríade educacional é consolidada. Nesta fase, os alunos ampliam e solidificam seus conhecimentos, competências e valores humanos necessários lidarem com os desafios acadêmicos, profissionais e pessoais, em busca de uma vida plena e feliz.</p>
          </div>
          <div className={styles.column}>
            <img src={img1} alt="Anos Finais" className={styles.img1}/>
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
            <img src={img1_competencias} alt="Anos Finais" className={styles.img2}/>
          </div>
          <div className={styles.column}>
            <h1>Desenvolvimento de Competências</h1>
            <p>Nossas aulas são dinâmicas, onde o aluno é o centro do processo, o estudos dos temas partem de projetos e levantamento de situações problemas que desencadeiam a busca por respostas e elevam o poder de argumentação e a ação pela busca de novos saberes. Desenvolvemos desta forma as competências necessárias para os desafios da vida.</p>
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
            <h1>Rigos acadêmico</h1>
            <p>Trabalhamos para reter o máximo de conhecimento dos alunos e para isso metodologias ativas para que aprendam fazendo, sendo agentes do seu aprendizado e estimulados a pensar e não apenas repetir ou decorar. Desta forma ao término do 9º ano nosso alunos estão preparados com uma base forte que sustentará seu caminho de sucesso com autonomia moral e intelectual</p>
          </div>
          <div className={styles.column}>
            <img src={img2_competencias} alt="Anos Finais" className={styles.img3}/>
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
            <img src={img_estrategia} alt="Anos Finais" className={styles.img4}/>
          </div>
          <div className={styles.column}>
            <h1>Trabalho em grupos como estratégia pedagógica</h1>
            <p>Para a construção de uma aprendizagem ativa e significativa utilizamos o trabalho em grupo em nossas aulas como uma ferramenta poderosa que oferece oportunidades simultâneas para todos os alunos.</p>
            <p>Juntos e em pequenos grupos (quatro a cinco alunos) trabalham de modo que todos possam participar de uma atividade com tarefas claramente atribuídas e compreender que o trabalho é realizado com a contribuição de todos.</p>
            <p>Além disso, o trabalho em grupo ajuda o aluno a se tornar uma pessoa melhor, uma vez que ele aprende a ver o grupo como um todo e as metas podem ser mais facilmente atingidas independente de sua própria competência.</p>
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
            <img src={moppemais} alt="Moppe+"/>
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
            <p>Um programa que reúne 12 projetos estudantis destinados aos alunos do ensino fundamental anos finais (6º ao 9º ano).</p>
          </div>
        </motion.div>
        <motion.div
            className="conteudo"
            ref={componentRef7}
            initial={{opacity: 0}}
            animate={{opacity: isVisible7 ? 1 : 0}}
            transition={{duration: 1.5}}
        >
          <div className={styles.array_images}>
            <div className={styles.column}>
              {image_url.slice(0,3).map((url, index) => (
                <img key={index} src={url} alt={'Imagem ${index'} />
              ))}
            </div>
            <div className={styles.column}>
              {image_url.slice(3,6).map((url, index) => (
                <img key={index} src={url} alt={'Imagem ${index'} />
              ))}          
            </div>
            <div className={styles.column}>
              {image_url.slice(6,9).map((url, index) => (
                <img key={index} src={url} alt={'Imagem ${index'} />
              ))}      
            </div>
            <div className={styles.column}>
              {image_url.slice(9,12).map((url, index) => (
                <img key={index} src={url} alt={'Imagem ${index'} />
              ))}      
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  )
}

export default AnosFinais;
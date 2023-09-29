import './contato.module.css';
import styles from './contato.module.css';

//Motion
import { motion } from 'framer-motion';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Images
import titulo from '../../assets/images/contato/titulo.png';

//Emailjs
import emailjs from '@emailjs/browser';

import ReCAPTCHA from "react-google-recaptcha";

import { IMaskInput } from "react-imask";

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

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  let [tipoMessage, setTipoMessage] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (tipoMessage === "1"){
      tipoMessage = "Tirar dúvidas";
    } else if (tipoMessage === "2"){
      tipoMessage = "Sugestões"
    } else if (tipoMessage === "3") {
      tipoMessage = "Ouvidoria";
    }
    const templateParams = {
      from_name: name,
      assunto: tipoMessage,
      message: message,
      tel: tel,
      email: email
    }

    emailjs.send("service_ezgd1oo", "template_i7ir3xh", templateParams, "Z5UZnZ8xalYr9naBN")
    .then((response) => {
      setName('');
      setEmail('');
      setTel('');
      setTipoMessage('');
      setMessage('');
    }, (err) => {
      alert("Erro interno - A mensagem não foi enviada");
    })
  }

  function handleOnChange(value) {
    setIsVerified(true);
  }
  
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const [isVerified, setIsVerified] = useState(false);

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
        <img src={titulo} alt="Contato" />
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
            animate={{ width: '60%' }}
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
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name} 
          />
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <IMaskInput
            type="tel"
            mask="(00) 00000-0000"
            placeholder="Digite seu telefone"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />
          <select value={tipoMessage} onChange={(e) => setTipoMessage(e.target.value)}>
            <option value="">Selecione uma opção</option>
            <option value="1">Dúvidas</option>
            <option value="2">Sugestões</option>
            <option value="3">Ouvidoria</option>
          </select>
          <textarea 
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
           <ReCAPTCHA sitekey="6LdwzB0oAAAAAG6U5OZaqqBNw1ZTFp-UFROIZChq" onChange={handleOnChange}/>
              <input className={styles.button} type="submit" value="Enviar" disabled={!isVerified}/>
        </form>
      </motion.div>
      </div>
    </div>
  )
}

export default Contato
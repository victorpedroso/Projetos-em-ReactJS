import React, { useEffect } from 'react';

const BlipChat = () => {
    useEffect(() => {
      // Carregua o script do Blip Chat e inicializa quando o componente é montado
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/blip-chat-widget';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
        new window.BlipChat()
          .withAppKey('bW9wcGU6MzFlODA5YzYtMDQzOS00NGQ1LTk1YzctNWFmOTAwMjZlMDQ2')
          .withButton({ color: '#2CC3D5', icon: '' })
          .withCustomCommonUrl('https://escolamoppe.chat.blip.ai/')
          .build();
      };
  
      document.body.appendChild(script);
  
      // Limpa o script quando o componente é desmontado
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    const chatStyles = {
      position: 'fixed',
      right: '20px', 
      bottom: '20px', 
      zIndex: '999999999999', 
    };
  
    return <div id="blip-chat-widget" style={chatStyles} />;
  };
  
  export default BlipChat;
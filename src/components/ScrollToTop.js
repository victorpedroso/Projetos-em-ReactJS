// Hooks
import { useEffect } from "react";
// React router
import { useLocation } from "react-router-dom";
// Componente para rolar as páginas para cima sempre que a rota for alterada

function ScrollToTop() {
    const location = useLocation();
  
    useEffect(() => {
      const scrollToTopWithDelay = () => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
      };
  
      scrollToTopWithDelay();
    }, [location]);
  
    return null;
  }

export default ScrollToTop;
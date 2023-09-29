import React, { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import ReactGA4 from 'react-ga4';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
//context
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RDStation from './components/RDStation';
import BlipChat from './components/BlipChat';
import Modal from 'react-modal';
import Home from './pages/Home';
import AMoppe from './pages/a_moppe/AMoppe';
import PropostaPedagogica from './pages/a_moppe/PropostaPedagogica';
import EstruturaEscolar from './pages/a_moppe/EstruturaEscolar';
import Bercario from './pages/ciclos/Bercario';
import Infantil from './pages/ciclos/Infantil';
import AnosIniciais from './pages/ciclos/AnosIniciais';
import AnosFinais from './pages/ciclos/AnosFinais';
import Smart from './pages/smart/Smart';
import Atividades from './pages/atividades/Atividades';
import NotFound from './pages/NotFound';
import PoliticaDePrivacidade from './pages/politica_de_privacidade/PoliticaDePrivacidade';
import Contato from './pages/contato/Contato';
import HomeBlog from './pages/blog/HomeBlog/Home';
import LoginBlog from './pages/blog/Login/Login';
import RegisterBlog from './pages/blog/Register/Register';
import CreatePost from './pages/blog/CreatePost/CreatePost';
import Search from './pages/blog/Search/Search';
import Dashboard from './pages/blog/Dashboard/Dashboard';
import Post from './pages/blog/Post/Post';
import EditPost from './pages/blog/EditPost/EditPost';

Modal.setAppElement('#root');

function App() {
  // Controla o estado dos componentes
  const [isAccessMobile, setIsAccessMobile] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();
  const location = useLocation();
  const loadingUser = user === undefined;

  // Verifica de qual dispositivo o acesso esta sendo feito
  useEffect(() => {
    const checkDevice = () => {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        window.innerWidth < 1030
      ) {
        setIsAccessMobile(true);
      } else {
        setIsAccessMobile(false);
      }
    };
    checkDevice();
  }, []);

  // Inicia o analytics
  useEffect(() => {
    ReactGA4.initialize("G-432DY2Q7TC");
    setInitialized(true);
  }, []);
  // Verifica se o GA4 iniciou e envia os dados para o google
  useEffect(() => {
    
    if (initialized) {
      ReactGA4.set({ page: location.pathname });
      ReactGA4.send("pageview");
    }
  }, [initialized, location]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if(loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <ScrollToTop />
      {!isAccessMobile ? <Navbar /> : <NavbarMobile/>} 
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog/search' element={<Search />}/>
            <Route path='/blog/posts/:id' element={<Post/>}/>
            <Route path='/sobre' element={<AMoppe />}/>
            <Route path='/propostapedagogica' element={<PropostaPedagogica />}/>
            <Route path='/estruturaescolar' element={<EstruturaEscolar />}/>
            <Route path='/bercario' element={<Bercario />}/>
            <Route path='/infantil' element={<Infantil />}/>
            <Route path='/anosiniciais' element={<AnosIniciais />}/>
            <Route path='/anosfinais' element={<AnosFinais />}/>
            <Route path='/smart' element={<Smart />}/>
            <Route path='/atividadesextra' element={<Atividades />}/>
            <Route path='/politica-de-privacidade' element={<PoliticaDePrivacidade/>}/>
            <Route path="*" element={<NotFound />}/>
            <Route path='/contato' element={<Contato />}/>
            <Route path='/blog' element={<HomeBlog/>} />
            <Route path='/login' element={!user ? <LoginBlog /> : <Navigate to="/blog"/>} />
            <Route path='/blog/posts/edit/:id' element={user ? <EditPost /> : <Navigate to="/login"/>} />
            <Route path='/register' element={!user ? <RegisterBlog /> : <Navigate to="/blog"/>} />
            <Route path='/blog/createpost' element={user ? <CreatePost/> : <Navigate to="/login"/>} />
            <Route path='/blog/dashboard' element={user ? <Dashboard/> : <Navigate to="/login"/>} />
          </Routes>
        </div>
       <Footer />
       <RDStation />
       <BlipChat />
       </AuthProvider>
     
    </div>
  );
}

export default App;

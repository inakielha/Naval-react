import { Route, Routes, } from 'react-router-dom';
import Mercury from './components/mercury/Mercury';
import Navbar from './components/navbar/Navbar';
import Footer from './components/mercury/footer/Footer';
import { useEffect, useState } from 'react';
import NavbarWeb from './components/navbar/navbarWeb/NavbarWeb';


function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Establece el límite de ancho para considerarlo "mobile"
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
   <>
   <Routes>
    {/* <Route path='/' element={<Navbar/>}/> */}
    <Route path='/' element={<>{isMobile ? <Navbar/> : <NavbarWeb/>} <Mercury isMobile={isMobile} /> <Footer/></>}/>
   </Routes>
   </>
  );
}

export default App;

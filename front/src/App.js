import { Route, Routes, } from 'react-router-dom';
import Mercury from './components/mercury/Mercury';
import Navbar from './components/navbar/Navbar';
import Footer from './components/mercury/footer/Footer';
import { useEffect, useState } from 'react';
import NavbarWeb from './components/navbar/navbarWeb/NavbarWeb';
import Ecooter from './components/ecooter/E5/EcooterE5';
import EcooterE3 from './components/ecooter/E3/EcooterE3';
import NavbarEcooter from './components/ecooter/navbarEcooter/NavbarEcooter';
import NavMobileEcooter from './components/ecooter/navbarEcooter/NavbarMobile/NavMobileEcooter';
import { useDispatch } from 'react-redux';
import { IS_MOBILE } from './redux/actions/actions';
import LandingEcooter from './components/ecooter/landingEcooter/LandingEcooter';


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch()

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Establece el límite de ancho para considerarlo "mobile"
    dispatch(IS_MOBILE(window.innerWidth <= 768))
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
    {/* <Route path='/' element={<>{isMobile ? <Navbar/> : <NavbarWeb/>} <Mercury isMobile={isMobile} /> <Footer/></>}/> */}
    <Route path='/' element={<>{isMobile ? <NavMobileEcooter isMobile={isMobile}/> : <NavbarEcooter isMobile={isMobile}/>} <LandingEcooter isMobile={isMobile} /> <Footer color={"#6EC1E4"}/></>}/>
    <Route path='/e5' element={<>{isMobile ? <NavMobileEcooter isMobile={isMobile}/> : <NavbarEcooter isMobile={isMobile}/>} <Ecooter isMobile={isMobile} /> <Footer color={"#6EC1E4"}/></>}/>
    <Route path='/e3' element={<>{isMobile ? <NavMobileEcooter isMobile={isMobile}/> : <NavbarEcooter isMobile={isMobile}/>} <EcooterE3 isMobile={isMobile} /> <Footer color={"#6EC1E4"}/></>}/>
   </Routes>
   </>
  );
}

export default App;

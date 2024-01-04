import { Route, Routes, } from 'react-router-dom';
import Mercury from './components/mercury/Mercury';
import Navbar from './components/navbar/Navbar';
import Footer from './components/mercury/footer/Footer';
import { useEffect, useState } from 'react';
import NavbarWeb from './components/navbar/navbarWeb/NavbarWeb';
import Ecooter from './components/ecooter/E5/EcooterE5';
import EcooterE3 from './components/ecooter/E3/EcooterE3';
import EcooterE3L1 from './components/ecooter/E3L1/EcooterE3L1';
import EcooterET3 from './components/ecooter/ET3/EcooterET3';
import NavbarEcooter from './components/ecooter/navbarEcooter/NavbarEcooter';
import NavMobileEcooter from './components/ecooter/navbarEcooter/NavbarMobile/NavMobileEcooter';
import { useDispatch } from 'react-redux';
import { IS_MOBILE } from './redux/actions/actions';
import LandingEcooter from './components/ecooter/landingEcooter/LandingEcooter';
import Demo from './components/ecooter/demo/Demo';


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [demo, setDemo] = useState(false);
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
  console.log({demo})
  return (
   <>
   <Routes>
    {/* <Route path='/' element={<Navbar/>}/> */}
    {/* <Route path='/' element={<>{isMobile ? <Navbar/> : <NavbarWeb/>} <Mercury isMobile={isMobile} /> <Footer/></>}/> */}
    <Route path='/ecooter/' element={<>{isMobile ? <NavMobileEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={true}/> : <NavbarEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={true}/>} <LandingEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/><Footer demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/e5' element={<>{isMobile ? <NavMobileEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false}/> : <NavbarEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false}/>} <Ecooter demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/><Footer demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/e3' element={<>{isMobile ? <NavMobileEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false}/> : <NavbarEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false}/>} <EcooterE3 demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/><Footer demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/e3l1' element={<>{isMobile ? <NavMobileEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false}/> : <NavbarEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false}/>} <EcooterE3L1 demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/><Footer demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/et3' element={<>{isMobile ? <NavMobileEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false}/> : <NavbarEcooter demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false}/>} <EcooterET3 demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/><Footer demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
   </Routes>
   </>
  );
}

export default App;

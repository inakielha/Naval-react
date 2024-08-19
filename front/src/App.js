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
import Red from './components/ecooter/red/Red';
import Concesionarios from './components/ecooter/Concesionarios/Concesionarios';


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [demo, setDemo] = useState(false);
  const [red, setRed] = useState(false);
  const dispatch = useDispatch()
  const [mobileMenu, setMobileMenu] = useState("hide")

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
    {/* SERVER */}
    {/* <Route path='/ecooter/' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={true} concesionarios={false}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={true} concesionarios={false}/>} <LandingEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/><Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/e5' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <Ecooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/e3' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <EcooterE3 red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/e3l1' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <EcooterE3L1 red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/et3' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <EcooterET3 red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/demo' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <LandingEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo demoRoute = {true} setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/red' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <LandingEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo demoRoute = {false} setDemo={setDemo} demo={demo}/> <Red redRoute={true} setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/ecooter/concesionarios' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={true}/> : <NavbarEcooter setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={true}/>} <Concesionarios red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo  setDemo={setDemo} demo={demo}/> <Red  setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/> */}

    {/* ---------------- */}
    {/* VERCEL */}
    <Route path='/' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={true} concesionarios={false}/> : <NavbarEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={true} concesionarios={false}/>} <LandingEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/><Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/e5' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <Ecooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/e3' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <EcooterE3 red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/e3l1' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <EcooterE3L1 red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/et3' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <EcooterET3 red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/demo' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <LandingEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo demoRoute = {true} setDemo={setDemo} demo={demo}/> <Red setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/red' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/> : <NavbarEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={false}/>} <LandingEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo demoRoute = {false} setDemo={setDemo} demo={demo}/> <Red redRoute={true} setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
    <Route path='/concesionarios' element={<>{isMobile ? <NavMobileEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={true}/> : <NavbarEcooter red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} landing={false} concesionarios={true}/>} <Concesionarios red={red} setRed={setRed} demo={demo} setDemo={setDemo} isMobile={isMobile} /> <Demo  setDemo={setDemo} demo={demo}/> <Red  setRed={setRed} red={red}/> <Footer red={red} setRed={setRed} demo={demo} setDemo={setDemo} color={"#6EC1E4"}/></>}/>
   
   </Routes>
   </>
  );
}

export default App;

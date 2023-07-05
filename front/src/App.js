import { Route, Routes, } from 'react-router-dom';
import Mercury from './components/mercury/Mercury';
import Navbar from './components/navbar/Navbar';
import Footer from './components/mercury/footer/Footer';


function App() {
  return (
   <>
   <Routes>
    {/* <Route path='/' element={<Navbar/>}/> */}
    <Route path='/' element={<><Navbar/> <Mercury /> <Footer/></>}/>
   </Routes>
   </>
  );
}

export default App;

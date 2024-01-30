import './App.css'
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import Home from './component/Home';
import About from './component/About';
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Navigation/>
        <Routes>
            <Route path='/react-project/' element={<Home/>} />
            <Route path='/react-project/about' element={<About/>} />
            <Route/>
        </Routes>
    <Footer/>
    </>
  )
}

export default App

import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './VIEWS/Home/home';
import Landing from './VIEWS/Landind/landig';
import Detail from './VIEWS/Detail/detail';
import NavBar from './Components/Navbar/NavBar';
import FormProducts from './VIEWS/FormProduct/FormProducts';
import FormUser from './VIEWS/Forms/FormsUser/user';
import AboutUs from './VIEWS/AboutUs/aboutUs';

const App = () => {

  return (
    <main>
      <Routes> 
        <NavBar/>
        <Route path='/' element={<Landing/>} />
        <Route path='home' element={<Home/>} />
        <Route path='detail/:id' element={<Detail/>} />  
        <Route path='productregister' element={<FormProducts/>} />
        <Route path='registeruser' element={<FormUser/>} />
        <Route path='about' element={<AboutUs/>} />
      </Routes>

    </main>
  )
}

export default App

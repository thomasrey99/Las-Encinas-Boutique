import style from './App.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './VIEWS/Home/Home';
import Landing from './VIEWS/Landind/Landig';
import Detail from './VIEWS/Detail/detail';
import NavBar from './Components/Navbar/NavBar';
import FormProducts from './VIEWS/FormProduct/FormProducts';
import FormUser from './VIEWS/Forms/FormsUser/user';
import AboutUs from './VIEWS/AboutUs/aboutUs';
import ErrorPage from './Components/ErrorPage/errorPage';
import Footer from './Components/Footer/footer';
import Prueba from './Components/Prueba/Prueba';
import Login from './VIEWS/Forms/Login/login';
import Register from './VIEWS/Forms/Register/Register';
import { AuthProvider } from './firebase/authContext';
import ProtectedView from './VIEWS/ProtectedView/ProtectedView';
import LoginFirebase from './VIEWS/Forms/LoginFirebase/LoginFirebase';
const App = () => {

  const location = useLocation();

  
  return (
    <main className={style.mainCont}>
      {location.pathname !== '/' && <NavBar/>}
      <Routes> 
        <Route path='/' element={<Landing/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>} />  
        <Route path='createProduct' element={<FormProducts/>} />
        <Route path='registeruser' element={<FormUser/>} />
        <Route path='about' element={<AboutUs/>} />
        
        <Route path='/prueba' element={<Prueba/>} />
        
       

        
      </Routes>


      <AuthProvider>
          <Routes>
          <Route path='/protectedroute1' element={<ProtectedView/>} />
          <Route path='/registerfirebase' element={<Register/>} /> 
          <Route path='/loginfirebase' element={<LoginFirebase/>} />
          </Routes>
          
        

      </AuthProvider>
     
      {location.pathname !== '/' && <Footer/>} 
    </main>
  )
}

export default App

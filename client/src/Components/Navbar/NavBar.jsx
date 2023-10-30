import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom"
import cart from "../../assets/carrito.png"
import logo from "../../assets/muffin.png"

const NavBar = () => {
  return (
    <nav className={style.navCont}>
        <div className={style.logCont}>
          <img src={logo} className={style.img}/>
        </div>  
        <div className={style.navItems}>
          <img src={cart} className={style.cartIcon}/>
          <div className={style.navLinks}>
              <NavLink to={"/home"} className={style.item}>Pagina Principal</NavLink>
              <NavLink to={"/about"} className={style.item}>Conócenos</NavLink>
              <NavLink to={"/productregister"} className={style.item}>Crear producto</NavLink>
              <NavLink to={"/registeruser"} className={style.item}>Registrarse aquí</NavLink>
          </div>
        </div>
    </nav>
  )
}

export default NavBar;
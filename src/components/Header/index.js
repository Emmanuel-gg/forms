import React, { useEffect, useState } from 'react'
import './Header.css'
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
export default function Header(){
  const location = useLocation();
  const history = useHistory();


  let redirecciona = (dir) => {
    setMostrarMenuMobile(false)
    history.push(dir)
  }
  const [mostrarMenuMobile, setMostrarMenuMobile] = useState(false)
  return <>
    <header>
      <button className={`trigger-menu-mobile ${(mostrarMenuMobile ? "active" : "")}`} onClick={
        () => {
          setMostrarMenuMobile(!mostrarMenuMobile)
        }
      }>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <ul className={(mostrarMenuMobile ? "active" : "")}>
        <li onClick={() => {          
          redirecciona("/formulario-1")
        }} className={(location.pathname === "/" || location.pathname === "/formulario-1") ? "active" : ""}><Link to="/formulario-1">Formulario 1</Link></li>
        <li onClick={() => {          
          redirecciona("/formulario2")
        }} className={(location.pathname === "/formulario2") ? "active" : ""}><Link to="/formulario2">Formulario 2</Link></li>
      </ul>
    </header>
  </>
}
import React from 'react'
import { useContext } from 'react'
import { contexto } from '../customComponent/CustomComponent'
import { NavLink } from 'react-router-dom'
import './nav.css'


const Nav = () => {

    //const {cart} = useContext(contexto)
    //console.log(cart);

    return (
       <nav>

        <NavLink to="/categoria/1"> Comidas frias </NavLink> 
        <NavLink to="/categoria/2"> Comidas Calientes </NavLink>


       </nav>
    )
}

export default Nav

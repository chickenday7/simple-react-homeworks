import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.scss'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";



const activeStyle:any = {
    textDecoration: "none",
    color: "rgba(192, 44, 70, 0.5)",
    fontSize: 20 + 'px'
}


function Header() {
    const [menu,setMenu] = useState(false)
    const finalButtonClassName = `${menu? s.buttonMenuActive : s.buttonMenuDisable}`
    const finalExample = `${menu ? s.exampleActive: s.exampleDisable}`

    const visibleMenu = () => {
        menu ? setMenu(false): setMenu(true)
    }

    return (
        <div className={finalExample}>
        <div className={s.textNav}>
            <NavLink to={PATH.PRE_JUNIOR} style = {({ isActive }) =>
                isActive ? activeStyle : undefined} >Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} style = {({ isActive }) =>
                isActive ? activeStyle : undefined} >Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} style = {({ isActive }) =>
                isActive ? activeStyle : undefined} >Junior+</NavLink>
        </div>
            <div className={s.buttonDiv} onClick={visibleMenu}>
            <SuperButton className={finalButtonClassName} >Menu</SuperButton>
            </div>
        </div>
    )
}

export default Header

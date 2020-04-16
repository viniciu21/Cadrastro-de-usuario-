import './Logo.css'
import React from 'react'
import logo from '../Assets/Img/logo.png'

function Logo(props){
    return(
        <aside className="logo"> 
            <a href="/" className="logo">
                <img src={logo} alt="logo"/>
            </a>
        </aside>
    )
}

export default Logo
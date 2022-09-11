import React, {useState} from 'react';
import { Link } from "react-router-dom";

import './MenuBurger.css';
import reload from '../../assets/reload.svg'

export default function MenuBurger({handleSelect}){
    const [clicked, setClicked] = (useState(false))

    function handleClick (str){
        setClicked(!clicked)        
        if(str.length !== undefined) handleSelect(str)
    }

    function handleReload (){        
        window.location.reload();
    }

    return(
        <div className='container-menu-burger'>
            <div className="container-burger" onClick={handleClick}>
                <div className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`menu-links ${clicked ? 'active' : ''}`}>                
                <img src={reload} alt="reload-img" onClick={handleReload} className='img-reload-menu'/>
                <div className="buttons">
                    <button className="btn-1 menu-hamburger" onClick={(e)=>handleClick('easy')}>Facil</button>
                    <button className="btn-2 menu-hamburger" onClick={(e)=>handleClick('medium')}>Medio</button>
                    <button className="btn-3 menu-hamburger" onClick={(e)=>handleClick('hard')}>Difícil</button>
                </div>
                <Link to="/about" className="about-menu-burger">About</Link>
            </div>
            <div className={`initial ${clicked ? 'active' : ''}`}></div>
        </div>
    )
};
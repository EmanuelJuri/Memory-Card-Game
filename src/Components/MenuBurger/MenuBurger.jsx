import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import './MenuBurger.css';

export default function MenuBurger({handleSelect}){
    const [clicked, setClicked] = (useState(false))

    function handleClick (str){
        setClicked(!clicked)
        handleSelect()
    }

    function handleReload (){        
        window.location.reload();
    }

    return(
        <div className='container-menu'>

            <div className="container-burger" onClick={handleClick}>
                <div className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={`menu-links ${clicked ? 'active' : ''}`}>
                <a >Info</a>  
                <a onClick={handleReload}>Reload</a>
                <Link to="/about" className="">About</Link>

                <div className="buttons">
                    <button className="btn-1" onClick={(e)=>handleClick('easy')}>Facil</button>
                    <button className="btn-2" onClick={(e)=>handleClick('medium')}>Medio</button>
                    <button className="btn-3" onClick={(e)=>handleClick('hard')}>Difícil</button>
                    {/* <button className="btn-4" onClick={(e)=>handleClick('expert')}>Experto</button> */}
                </div>                  
            </div>

            <div className={`initial ${clicked ? 'active' : ''}`}></div>

        </div>
    )
};
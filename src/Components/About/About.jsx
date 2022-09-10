import React from "react";
import {Link} from 'react-router-dom'

import './About.css';

import Linkedin from '../../assets/ln.svg';
import GitHub from '../../assets/Github.svg';

export default function About(){
    return(
        <div className="container-about">
            <div className="card-about">
                <div className="title-group">
                    <p className="title-hi">¿Hola como estas?</p>                    
                    <p className="title-name">Soy <span className="name-change">Emanuel Juri</span> <br/> FullStack Web Developer</p>
                </div>
                <div>
                    <p className="about-pa">
                    Memory Card Game, es un juego para que te diviertas y pongas a prueba tu memoria.
                    Tiene diferentes niveles de dificultad y varias temáticas para elegir.<br/>
                    La app esta desarrollada con React y Material UI.
                    </p>
                </div>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/emanuel-juri/">
                        <img src={Linkedin} alt='ln-logo' className='logosSocialMedia'/>
                    </a>
                    <a href="https://github.com/EmanuelJuri">
                        <img src={GitHub} alt='github-logo' className='logosSocialMedia'/>
                    </a>
                </div>
            </div>
            <div>
                <Link to= '/'>
                    <button className='button-home'>Volver</button>
                </Link>
            </div>
        </div>
    )
};
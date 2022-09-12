import React from 'react';
import { Link } from "react-router-dom";

import './NavBar.css'
import triesImg from '../../assets/tries.png'
import reload from '../../assets/reload.svg'
import choiceImg from '../../assets/choice.svg'
import Modal from '../Modal/Modal';
import MenuBurger from '../MenuBurger/MenuBurger';

export default function NavBar({tries, size, setSize, setTries, choice, setChoice, open, setOpen, shuffledCard, setShuffledCard}){

    function handleReload (){        
        window.location.reload();
    }    
    
    function handleSelect(str){
        if(str !== size){
            setShuffledCard(shuffledCard.forEach(el => {
                el.flipped=false;
              }));  
            setSize(str)
            setTries(0)
        }
    }
    
    const handleClickOpen = () => {
        setOpen(true);        
    };

    const triesRound = Math.floor(tries/2);

    return(
    <div className="container-NavBar">        
        <div className="container-NavBar-mobile mobile">
            <p className="tittle-nb">Memory Card Game</p> 
            <MenuBurger
                handleSelect={handleSelect}
            />            
        </div>            
        <div className='desketop'>
            <Modal
                setChoice={setChoice}                
                open={open}
                setOpen={setOpen}
                setTries={setTries}
            />
            <p className="tittle-nb">Memory Card Game</p>
            <div className="central-group-nb">
                <div className="scoreBoard">
                    <img src={triesImg} alt="tries" />
                    <span className="number-tries-nb">{triesRound}</span>
                    <p className='text-choiced'>{choice === 'pokemon' ? 'pokemon' :
                                                choice === 'animals' ? 'animales' :
                                                choice === 'tools' ? 'herramientas' : null}
                    </p>
                </div>
                <div className="buttons-img">
                    <img src={choiceImg} alt='choice' className="reload-nb" onClick={handleClickOpen}/>                
                    <img src={reload} alt='reload' className="reload-nb" onClick={handleReload}/>
                </div>
            </div>
            <div className="buttons">
                <button className="btn-1" onClick={(e)=>handleSelect('easy')}>Facil</button>
                <button className="btn-2" onClick={(e)=>handleSelect('medium')}>Medio</button>
                <button className="btn-3" onClick={(e)=>handleSelect('hard')}>Difícil</button>
                <button className="btn-4" onClick={(e)=>handleSelect('expert')}>Experto</button>
            </div>
            <Link to="/about" className="about-nb">About</Link>
        </div>
    </div>
    )
};
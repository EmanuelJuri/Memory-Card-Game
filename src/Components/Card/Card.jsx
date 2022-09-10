import React from "react";

import './Card.css'

export default function Card ({card, animating, handleClick, size}){
    return(
        <div className="container-card" onClick={()=>(!card.flipped && !animating) && handleClick(card)}>
            <div className={`card-inner ${card.flipped && 'card-flipped'}`}>
                <div className="card-front"></div>                
                <div className={`card-back ${size}`}><img src={card.emoji} alt='img-card' className="img-card"/></div>
            </div>
        </div>
    )
};
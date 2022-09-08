import React from "react";
import Card from "../Card/Card";

import './Board.css'

export default function Board ({cards, animating, handleClick, size}){    
    return(
        <main className={`container-board ${size}`}>
            {
                cards?.map((card, i)=>{
                    return <Card 
                                key={`${i}_${cards.emoji}`} 
                                card={card}
                                animating={animating}
                                handleClick={handleClick}
                                size={size}
                            />
                })
            }
        </main>
    )
};
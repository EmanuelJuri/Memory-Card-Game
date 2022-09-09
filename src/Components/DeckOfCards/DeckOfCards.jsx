import React,{useEffect} from 'react'
import utils from './utils'

const list = utils();

export default function DeckCard({size, setShuffledEmojiList, choice}){   
    
    useEffect(()=>{
        setShuffledEmojiList(shuffledEmojiList ? shuffledEmojiList : null);        
    }, [size, choice])    

    let index = 0;
    if(choice === 'pokemor') index = 0
    if(choice === 'animals') index = 4
    if(choice === 'tools') index = 8

    let shuffledEmojiList =[]
    if(!size || size === 'easy'){
        shuffledEmojiList = shuffle([...list[index], ...list[index]])
    } else if (size === 'medium'){
        shuffledEmojiList = shuffle([...list[index+1], ...list[index+1]])
    } else if (size === 'hard'){
        shuffledEmojiList = shuffle([...list[index+2], ...list[index+2]])
    } else if (size === 'expert'){
        shuffledEmojiList = shuffle([...list[index+3], ...list[index+3]])
    }    
    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }    
        return array;
    }

    return(
        <div></div>
    )
};
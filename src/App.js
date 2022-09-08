import React, {useState, useEffect} from 'react';

import './App.css';
import Board from './Components/Board/Board';
import NavBar from './Components/NavBar/NavBar';
import DeckOfCards from './Components/DeckOfCards/DeckOfCards';
import ModalComplete from './Components/ModalComplete/ModalComplete';

export default function App() {
  //estado del maso de cartas shiffleado
  const [shuffledEmojiList, setShuffledEmojiList] = useState(null)
  //state de cartas a renderizar
  const [shuffledCard, setShuffledCard] = useState([])
// console.log('shuffledCard', shuffledCard)

  const [selectedCard, setSelectedCard] = useState(null)
  const [animating, setAnimating] = useState(false)
  //estados auxiliares
  const [tries, setTries] = useState(0)
  const [size, setSize] = useState('easy')
  const [choice, setChoice] = useState('')
  //estado del modal
  const [open, setOpen] = useState(false);

  useEffect(()=>{    
      setShuffledCard(shuffledEmojiList?.map((emoji, i)=>({
      index: i,
      emoji,
      flipped: false
    })))
  },[shuffledEmojiList])  
  
  let count = shuffledCard?.filter(el=> el.flipped === true).length;
  let aux = false;   
  if(shuffledCard?.length === count && count > 0) aux= true;
  
  function handleClick(card){
    setTries(tries+1)
    const flippedCard = {...card, flipped: true}
    let shuffledCardCopy = [...shuffledCard]
    shuffledCardCopy.splice(card.index, 1, flippedCard)
    setShuffledCard(shuffledCardCopy)
    if(selectedCard === null){
      setSelectedCard(card)
    }else if(selectedCard.emoji === card.emoji){
      setSelectedCard(null)
    }else{
      setAnimating(true)
      setTimeout(()=>{
        shuffledCardCopy.splice(card.index, 1, card)        
        shuffledCardCopy.splice(selectedCard.index, 1, selectedCard)
        setShuffledCard(shuffledCardCopy)
        setSelectedCard(null)
        setAnimating(false)
      }, 1000)
    }
  }
    
  return (
    <div className="App">
      <div className='container'>
        <NavBar
          tries={tries}
          setTries={setTries}
          setSize={setSize}
          choice={choice}
          setChoice={setChoice}
          open={open}
          setOpen={setOpen}
        />
        <div className="board">
          <Board 
            cards={shuffledCard}
            animating={animating}
            handleClick={handleClick}
            size={size}
          />
          <DeckOfCards
            size={size}
            setShuffledEmojiList={setShuffledEmojiList}
            choice={choice}
          />
          <ModalComplete
            setTries={setTries}
            setSize={setSize}
            size={size}
            aux={aux}
            setOpen={setOpen}
          />
        </div>
      </div>
    </div>
  );
};
import React,{ useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import './ModalComplete.css'

export default function AlertDialog({setTries, size, setSize, aux, setOpen, shuffledCard, setShuffledCard}) {
  const [openC, setOpenC] = useState(false);

  useEffect(()=>{
      if(aux === true){
        setTimeout(()=>{
          setOpenC(true);
        },1200)
      }
  }, [aux])        
  
  const handleClose = () => {
    setOpenC(false);
  };

  function handleReload (){
    setOpen(true);
    setOpenC(false);
  }   

  function handleSelect(){
    setShuffledCard(shuffledCard.forEach(el => {
      el.flipped=false;
    }));        
    if(size === 'easy') setSize('medium')
    if(size === 'medium') setSize('hard')
    if(size === 'hard') setSize('expert')
    if(size === 'expert') setOpen(true)
    setOpenC(false)
    setTries(0)
  }

  return (
    <div className='container-modal'>
      <Dialog
        open={openC}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"          
        PaperProps={{
          style: {
            background: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            textAlign: 'center',            
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Felicitaciones lo has finalizado"}
        </DialogTitle>
        <DialogContent>
          <div id="alert-dialog-description">
            ¿Deseas volver a jugar este nivel o ir al próximo?
          </div>          
          <div className='choise-group-complete'>            
            <button onClick={handleReload} className='btn-modal'>Recargar</button>
            <button onClick={handleSelect} 
              className={size === 'hard' ? "btn-modal hard-mobile" : "btn-modal"}
            >Siguiente</button>
          </div>          
        </DialogContent>
      </Dialog>
    </div>
  );
}


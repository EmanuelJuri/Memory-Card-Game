import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import pokemon from '../../assets/pokemon.svg'
import animals from '../../assets/animals.svg'
import tools from '../../assets/tools.svg'
import { useEffect } from 'react';
import './Modal.css'

export default function AlertDialog({open, setOpen, setChoice, setTries}) {
//   const [open, setOpen] = React.useState(false);
//   const [choice, setChoice] = React.useState('')

  useEffect(()=>{
    setOpen(true);
  },[])

  const handleChoice = (str) => {
    setChoice(str)
    setTries(0)
    setOpen(false)
  }

  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <div className='container-modal'>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth='sm'
        PaperProps={{
          style: {
            background: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            textAlign: 'center',            
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Por favor elige un tipo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">            
          </DialogContentText>
          <div className='container-modal-choise'>
            <div className='choise-group'>
              <img src={pokemon} alt="pika" width='150px' heigth='150px'className='modal-img'/>
              <button onClick={()=>handleChoice('pokemon')} className='btn-modal'>Pokemon</button>
            </div>
            <div className='choise-group'>
              <img src={animals} alt="leon" width='150px' heigth='150px'className='modal-img'/>
              <button onClick={()=>handleChoice('animals')} className='btn-modal'>Animales</button>
            </div>
            <div className='choise-group'>
              <img src={tools} alt="leon" width='150px' heigth='150px'className='modal-img'/>
              <button onClick={()=>handleChoice('tools')} className='btn-modal'>Herramientas</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}


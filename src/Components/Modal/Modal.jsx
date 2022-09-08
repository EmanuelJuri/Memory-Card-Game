import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import pikachu from '../../assets/pokemon/pikachu.png'
import leon from '../../assets/animals/leon.png'
import _leon from '../../assets/animals2/leon.png'
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
          <div className='choise-group'>
            <img src={pikachu} alt="pika" width='100px' heigth='100px'className='modal-img'/>
            <button onClick={()=>handleChoice('pokemon')} className='btn-modal'>Pokemon</button>
          </div>
          <div className='choise-group'>
            <img src={leon} alt="leon" width='100px' heigth='100px'className='modal-img'/>
            <button onClick={()=>handleChoice('animals')} className='btn-modal'>Animals</button>
          </div>
          <div className='choise-group'>
            <img src={_leon} alt="leon" width='100px' heigth='100px'className='modal-img'/>
            <button onClick={()=>handleChoice('animals2')} className='btn-modal'>Animals2</button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}


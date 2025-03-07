import React from 'react'
import error from '../img/error.jpg'
import { useNavigate } from 'react-router-dom'


const Errorhome = () => {
    const navigate = useNavigate()
    const handleErrorMenu=()=>{
        navigate('/home');
    }
  return (
   
    <>
    <div className='recuadroerror'>
        <div className='recuadrofoto'>
            <img className='errorfoto' src={error} alt="Error 4042"/>
        </div>
        <div className='recuadrotexto'>
            <h6 className='textoerror'>Lo siento, página en construcción</h6>
        </div>
    
        
        <div className='recuadrobutton'>
            <button className='volvererror' onClick={handleErrorMenu}>VOLVER</button>
        </div>
    </div>
    </>
  )
}

export default Errorhome

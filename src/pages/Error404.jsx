import React from 'react'
import error from '../img/error.jpg'
import { useNavigate } from 'react-router-dom'
import '../CSS/error.css'

const Error404 = () => {
    const navigate = useNavigate()
    const handleError=()=>{
        navigate(-1);
    }
  return (
   
    <>
    <div className='recuadroerror'>
        <div className='recuadrofoto'>
            <img className='errorfoto' src={error} alt="Error 404"/>
        </div>
        <div className='recuadrotexto'>
            <h6 className='textoerror'>Lo siento, página en construcción</h6>
        </div>
        <div className='recuadrobutton'>
            <button className='volvererror' onClick={handleError}>VOLVER</button>
        </div>
    </div>
    </>
  )
}

export default Error404

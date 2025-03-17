import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Cotizaciones = () => {

  const navigate=useNavigate();
  const handleVolverMenu = () =>{
  navigate('/menu');
};
  const cotizacionError= () =>{
    navigate('/error2');
};

  const nuevaCotizacion=()=>{
    navigate('/home')
  }
  return (
    <>
    <div className="background-container-cotiza">
        
    <div className="title-container">
          <h2 className="title-menu">GIGAFLOP</h2>
        </div>
      <div className="cotizabox">
        <div className='cotizatitlebox'>
            <h3 className='cotizatitle'>COTIZACIONES</h3>
        </div>
        
        <div className="cotiza-container-button"> 
          <button className="cotiza-button" onClick={nuevaCotizacion}>NUEVA COTIZACIÓN</button>
          <button className="cotiza-button"onClick={cotizacionError}>HISTORIAL</button>
        </div>
        <div className='box-volver-cotiza'>
        <NavLink className="volver-cotiza active" href="/menu" aria-current="page" onClick={handleVolverMenu}>VOLVER</NavLink>
        <NavLink className="volver-cotiza active" href="/menu" aria-current="page" onClick={cotizacionError}>AJUSTES</NavLink>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cotizaciones

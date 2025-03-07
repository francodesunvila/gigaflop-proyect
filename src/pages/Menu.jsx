import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'



const Menu = () => {
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const handleCotizacion =() =>{
        navigate('/cotizaciones');
    };
    const gestionCliente=()=>{
        navigate('/error')
    }
    const seguimientoCoti=()=>{
      navigate('/error')
  }
    const handleLogout =() =>{
        setUser(false)
        navigate('/')
    }
    return (
        
    <>
   
    <div className="background-container-menu">
    <div className="title-container">
          <h2 className="title-menu">GIGAFLOP</h2>
        </div>
      <div className="menubox">
        
        <div className="menu-container"> 
          <button className="menu-button"onClick={seguimientoCoti}>SEGUIMIENTO DE COTIZACIONES</button>
          <button className="menu-button"onClick={gestionCliente}>GESTIÓN DE CLIENTES</button>
          <button className="menu-button" onClick={handleCotizacion}>GESTIÓN DE COTIZACIONES</button>
          
        </div>
        <div className='logout-container'>
            <button className="logout-button" onClick={handleLogout} >Cerrar Sesión</button>
        </div>
      </div>
        
    </div>

  </>

  )

}

export default Menu;

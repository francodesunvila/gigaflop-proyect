import { buildQueries } from '@testing-library/dom'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'


const Login = () => {

    
const {user,setUser} = useContext(UserContext);
const navigate = useNavigate();
const handleLogin =() =>{
    setUser(true)
    navigate('/menu');
};


  return (
    <>
   
    <div className="background-container">
      <div className="loginbox">
        <div className="title-container">
          <h2 className="title">GIGAFLOP</h2>
        </div>
        <div className="input-container">
          <input type="email" placeholder='Usuario' className="input" />
          <input type="password" placeholder='Contraseña' className="input" />
         
            <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
            <NavLink className='loginregistro'>Registrate</NavLink>
            
        </div>
      </div>
    </div>
  </>
  )
}

export default Login
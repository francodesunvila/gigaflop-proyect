import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/style.css'
import {router} from './router/index.js'
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <>
      <UserProvider>
      <RouterProvider router={router}/></UserProvider>
  </>
 );



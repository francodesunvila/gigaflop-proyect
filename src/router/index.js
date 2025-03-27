import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Cotizaciones from "../pages/Cotizaciones";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";





export const router = createBrowserRouter([
    
            {
            path: '/',
            element: <Login/>,
            errorElement: <Error404/>  
            },
            
            {
            path: '/menu',
            element: <Menu/>,  
            errorElement: <Error404/> 
            },

            {
            path: '/cotizaciones',
            element: <Cotizaciones/>,
            errorElement: <Error404/> 
            },

            {
            path: '/error',
            element: <Error404/>,
            },
        
            {
            path: '/home',
            element: <Home/>,
            errorElement: <Error404/> 
            },
            
]);


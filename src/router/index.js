import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Cotizaciones from "../pages/Cotizaciones";
import Error404 from "../pages/Error404";
import Error4042 from "../pages/Error4042";
import Home from "../pages/Home";
import Errorhome from "../pages/Errorhome";




export const router = createBrowserRouter([
    
            {
            path: '/',
            element: <Login/>,  
            },
            
            {
            path: '/menu',
            element: <Menu/>,  
            },

            {
            path: '/cotizaciones',
            element: <Cotizaciones/>,
            },

            {
            path: '/error',
            element: <Error404/>,
            },
            {
            path: '/error2',
            element: <Error4042/>,
            },
            {
            path: '/home',
            element: <Home/>,
            },
            {
            path: '/errorhome',
            element: <Errorhome/>,
            },
]);


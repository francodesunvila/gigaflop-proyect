import React from 'react'
import logoc from '../img/logoc.png'
import discoexterno from '../img/discoexterno.jpg'
import hub from '../img/hub.jpg'
import impresora from '../img/impresora.jpg'
import notebook from '../img/notebook.webp'
import hyper from '../img/hyper.jpg'
import genius from '../img/genius.png'
import hp from '../img/hp.jpg'
import intel2 from '../img/intel2.jpg'
import { useNavigate } from 'react-router-dom'
import menu from '../img/menu.png'

const Home = () => {

const navigate=useNavigate()

const backCotizacion=()=>{
    navigate('/cotizaciones')
}
const errorHome=()=>{
    navigate('/error')
}

  return (
    <>
        <div className='headerhome'> 
            <header className='headercontainer'>
                <div className='gigacontainer'>
                    <h2 className='titlehome'>GIGAFLOP</h2>
                </div>
                <div className='containermenuimage'>
                    <img className='menuimage'src={menu}/>
                </div>
                <div className='inputcontainer'>
                    <input className='inputhome' placeholder='¿Que producto estás buscando?'/>
                </div>
                <div className='proveedorcontainer'>
                    <h2 className='proveedor' onClick={errorHome}>TODOSOFT S.R.L.</h2>
                </div>
                <div className='carritocontainer'>
                    <h1 className='carrito' onClick={errorHome}>C</h1>
                </div>
            </header>
            <div className='optioncontainer'>
                <h6 className='optionhome' onClick={errorHome}>NUEVA COTIZACION</h6>
                <h6 className='optionhome' onClick={errorHome}>CLIENTE</h6>
                <h6 className='optionhome' onClick={errorHome}>SEGUIMIENTO</h6>
                <h6 className='optionhome' onClick={errorHome}>HISTORIAL</h6>
                <h6 className='optionhome' onClick={errorHome}>REPORTES</h6>
            </div>
          
            <section className='card'>
                    <div className='inputcontainermobile'>
                        <input className='inputhomemobile' placeholder='       Ingrese Producto'/>
                    </div>
                    <div className='cardtitlecont'>
                        <h3 className='titlecard'>PRODUCTOS</h3>
                    </div>
                    <div className='cardsforproduct'>
                        <div className='cardcontainer'>
                            <div className='cardimage'>
                                <img className='discoe' src={discoexterno} />
                            </div>
                            <div className='carddescription'>
                                <h6 className='product'>DISCO RIGIDO EXTERNO SAMSUNG 1TB</h6>
                            </div>
                            <div className='cardstock'>
                                <h6 className='stock'>Producto con stock</h6>
                            </div>
                            <div className='containerbuttoncard'>
                                <button className='buttoncard' onClick={errorHome}>Consultar</button>
                            </div>
                        </div>
                        <div className='cardcontainer'>
                            <div className='cardimage'>
                            <img className='hub'src={hub} />
                            </div>
                            <div className='carddescription'>
                                <h6 className='product'>UE330 ADAP USB 3.0 A ETHERNET GIGABIT RJ45 + MINIHUB</h6>
                            </div>
                            <div className='cardstock'>
                                <h6 className='stock'>Producto con stock</h6>
                            </div>
                            <div className='containerbuttoncard'>
                                <button className='buttoncard' onClick={errorHome}>Consultar</button>
                            </div>
                        </div>
                        <div className='cardcontainer'>
                            <div className='cardimage'>
                            <img className='notebook' src={notebook} />
                            </div>
                            <div className='carddescription'>
                                <h6 className='product'>NOTEBOOK LENOVO YOGA SLIM6 14" 2.8 INTEL I5 13420H 16GB 5200MHZ DDR5 512GB NVME W11H</h6>
                            </div>
                            <div className='cardstock'>
                                <h6 className='stock'>Producto con stock</h6>
                            </div>
                            <div className='containerbuttoncard'>
                                <button className='buttoncard' onClick={errorHome}>Consultar</button>
                            </div>
                        </div>
                        <div className='cardcontainer'>
                            <div className='cardimage'>
                            <img className='impresora' src={impresora} />
                            </div>
                            <div className='carddescription'>
                                <h6 className='product'>HP IMPRESORA LASER M111A</h6>
                            </div>
                            <div className='cardstock'>
                                <h6 className='stock'>Producto con Stock</h6>
                            </div>
                            <div className='containerbuttoncard'>
                                <button className='buttoncard' onClick={errorHome}>Consultar</button>
                            </div>
                        </div>
                    </div>
                
                
            </section>
            <footer className='footerhome'>
                <div className='footerimagecontainer'>
                    <img className='imagefooter' onClick={errorHome} src={intel2}/>
                    <img className='imagefooter' onClick={errorHome} src={hyper}/>
                    <img className='imagefooter' onClick={errorHome} src={hp}/>
                    <img className='imagefooter' onClick={errorHome} src={genius}/>
                </div>
                <div className='footercontainer'>
                    <button className='footerback' onClick={backCotizacion}>Volver</button>
                    <button className='footerfinalizar'onClick={errorHome}>Finalizar Cotización</button>
                </div>
            </footer>
        </div>
        
      
    </>
  )
}

export default Home

import { connect } from "react-redux"
import { useState } from "react";
import { NavLink, Link } from "react-router-dom"
import logo from "assets/img/logo_sub.png"
import 'styles/index.css'
import { DotLoader } from "react-spinners";

function Navbar(){
    const [loading, setLoading]=useState(true)
    return(
        <nav className="w-full py-4 top-0 fixed">
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
                    <div className="ml-4 mt-2">
                        <Link to='/' className='ml-4 mt-2' >
                        <img src={logo}
                        width={140}
                        height={140}
                        className="mb-4"/>
                        </Link>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/sucursales' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4  mx-4"> Sucursales</NavLink>
                    <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4  mx-4"> Nosotros</NavLink>                    
                    <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4  mx-4"> Contacto </NavLink>
                    <Link
                        to="/inicioSecion"
                        className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-button focus:ring-offset-2"
                    >
                        Iniciar Sesión 
                        <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={25} color="#ffffff" />
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
const mapStateToProps = state =>({

})
export default connect (mapStateToProps,{

}) (Navbar)
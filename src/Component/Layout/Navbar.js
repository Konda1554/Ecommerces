import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className='container'>
                <Link to='/' className="navbar-brand fw-bold" ><b>Our Shop</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link" >Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/product' className="nav-link" >Products</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to='' className="nav-link " >About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='' className="nav-link " >Contact us</Link>
                        </li>
                    </ul>
                    <div className='buttons'>
                        <Link to='' className='btn btn-outline-dark'>
                            <i className='fa fa-sign-in'></i> Login
                        </Link>
                        <Link to='' className='btn btn-outline-dark m-2'>
                            <i className='fa fa-user-plus'></i> Register
                        </Link>
                        <Link to='/cart' className='btn btn-outline-dark '>
                            <i className='fa fa-shopping-cart'></i> Cart ({state.length})
                        </Link>
                    </div>

                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

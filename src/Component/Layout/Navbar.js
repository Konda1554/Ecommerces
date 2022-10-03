import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


const Navbar = () => {
    const {
        isAuthenticated,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();
    const state = useSelector((state)=> state.handleCart)
    const dispatch=useDispatch()
    const [search,setSearch]=useState("");
    const [loading,setLoading]=useState(false)
    const [post,setPost]=useState([]);
    useEffect(()=>{
        const loadposts = async ()=>{
            setLoading(true);
            const response = await axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
            setPost(response.data)
            setLoading(false)
        };
        loadposts();

    },[])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm  fixed-top">
                <div className='container'>
                <Link to='/' className="navbar-brand fw-bold " ><img src='./Images/Rj.png'alt='logo' width={'200px'}></img></Link>
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
                        
                        {/* <li className="nav-item">
                            <Link to='' className="nav-link " >About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='' className="nav-link " >Contact us</Link>
                        </li> */}
                        
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>
                    <div className='buttons d-flex'>
                        { isAuthenticated ? ( <div><i className="fa fa-user"></i><span className='username'>{user.nickname}</span>  <button className='btn btn-outline-dark mr-2' onClick= {()=>{
                            logout()
                            
                        }}>
                            <i className='fa fa-sign-in'></i> Logout
                        </button ></div>) : (<button  to='' className='btn btn-outline-dark mr-2 ' onClick={loginWithRedirect}>
                            <i className='fa fa-sign-in'></i> Login
                        </button >) }
                        
                        
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

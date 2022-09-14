import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Component/Layout/Navbar'
import Cart from './Component/Pages/Cart'
import Home from './Component/Pages/Home'
import Product from './Component/Pages/Product'
import Products from './Component/Pages/Products'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
       <Route exact path='/' element={<Home />}/>
       <Route exact path='/product' element={<Products />}/>
       <Route exact path='/product/:id' element={<Product />}/>
       <Route exact path='/cart' element={<Cart />}/>
      </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screen/Home'
import Product from '../Screen/Product'
import About from '../Screen/About'
import Who from '../Screen/Who'
import Gallery from '../Screen/Gallery'
import Contact from '../Screen/Contact'
import ProductInfo from '../Screen/ProductInfo'


export default function Index() {
  return (
    <div
    className='mt-[70px] lg:mt-0'
    >
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/who' element={<Who/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/info/:id' element={<ProductInfo/>}/>
    </Routes>
    </div>
  )
}

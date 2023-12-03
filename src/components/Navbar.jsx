import React from 'react'
import { IoSearch } from "react-icons/io5";
import './Navbar.css'

function Navbar() { 
  return (
    <div>
      
      <header className='body-nav'>

        <div className="logo">Mauii-Flix</div>
        
        <ul className="list-nav">
          <li><a href="#" className='item-nav'>Home</a></li>
          <li><a href="#" className='item-nav'>Adults</a></li>
          <li><a href="#" className='item-nav'>Trending</a></li>
          <li><a href="#" className='item-nav'>Kids</a></li>
          <li><a href="#" className='item-nav'>My List</a></li>
          <li><a href="#" className='item-nav'>Profile</a></li>
        </ul>

        <div className="search-nav">
          <input 
          type="text" 
          placeholder='Search' 
          className='search-bar'
          />
        </div>

      </header>

    </div>
  )
}

export default Navbar
import React, { Component } from 'react'
import {
 Link
} from "react-router-dom";

function Navbar1() {
  

  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">newsletter</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link headingnames1" to="/news"><span className='coloring'>Home</span><span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link headingnames1" to="/business"><span className='coloringbusiness'>business</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link headingnames1" to="/entertainment"><span className='coloringentertainment'>entertainment</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link headingnames1" to="/science"><span className='coloringscience'>science</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link headingnames1" to="/sports"><span className='coloringsports'>sports</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link headingnames1" to="/technology"><span className='coloringtechnology'>technology</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link headingnames1" to="/health"><span className='coloringhealth'>health</span></Link>
          </li>
          

        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar1
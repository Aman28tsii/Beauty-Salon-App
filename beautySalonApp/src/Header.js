import React from 'react';
import { Routes,Route,Link } from 'react-router-dom'
import './App.css';
import './About.css';
import './Membership.css'
import About from './Usercomponent/About';
import Gallary from './Usercomponent/Gallary';
import Membership from './Usercomponent/Membership';
import Login from './Usercomponent/Login.js'
import Home from './Usercomponent/Home.js'

const Header = () => {
  
    
  return (
       <> <header className="main-header">
    <div className='main-info'>
      <div className='container'>
        <div className='row'>
          <h1 className='logo'>
            <a href='#'>
        
              <img  className='logo-light' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JAbr4hLdQULBCshz44wbhohCDibe60l_yA&usqp=CAU" />
            </a>
          </h1>
          <div className='contact'>
            <div className='contact-icon'>
         <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></i>
            </div>
            <div className='contact-main'>
              <a href='#'>+251 95278285</a>
              <br/>
              <a href='#'>+251 96528464</a>
            </div>

          </div>
          <div className='contact'>
            <div className='contact-icon'>
     <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></i>
            </div>
            <div className='contact-main'>
              <a href='#'>Adiss Abeba , Around Down Town 22</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='main-nav'>
      <div className='container'>
        <nav>
                     
                        
                      
          <div>
          <Link to='/' className='active'>HOME</Link>
          </div>
          <div>
          <Link to='/About'>ABOUT</Link>
          </div>
          <div>
             
          <Link to='/Gallery'>GALLERY</Link>
          </div>
          <div>
          <Link to='/Membership'>MEMBERSHIP</Link>
          </div>
          <div>
          <Link to='/Service'>BOOKING & SERVICES</Link>
          </div>
          <div>
            <a href='#main-footerx'>CONTACTS</a>
          </div>
          <div className='search'>
            <a href='#'>
              <i className="fas fa-search"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Gallery' element={<Gallary />} />
                    <Route path='/Membership' element={<Membership />} />
                    <Route path='/Service' element={<Login />} />
                </Routes>
  
  </> 
 );
}
 
export default Header;

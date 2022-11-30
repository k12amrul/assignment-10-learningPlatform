import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../context/AuthProvider';


const Header = () => {
  const {user ,logout}=useContext(AuthContext)

  const handleLogOut =()=>{
       logout()
       .then()
       .catch(err => {
        console.log(err)
       })
  }
    return (
        <div>
         <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img   style={{width : 55}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0icYYeKYszA_6ofhMe15jr8-4b_sQYfBBuB7wOGq&s" alt="" />
    <h1>Hasan Academy </h1>
    {/* <img   src="https://wallpapercave.com/wp/wp7250034.jpg" alt="" /> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to={'/course'} class="nav-link active" aria-current="page" >Course</Link>
        </li>
        <li class="nav-item">
          <Link to={'/blog'} class="nav-link active" aria-current="page" >blog</Link>
        </li>
        <li class="nav-item">
        <Link to={'/faq'} class="nav-link active" aria-current="page" >FAQ</Link>
        </li>
       
       
        
        <li class="nav-item">
          <Link  to={'/register'} class="nav-link ">Register</Link>
        </li>
        <li class="nav-item">
          <Link  to={'/login'} class="nav-link ">Login</Link>
        </li>
      </ul>
      <div>
        {
          user?.uid ? 
          <>
           {user?.displayName}
           <Button onClick={handleLogOut} variant="primary">Logout</Button>{' '}
          
          </> :
          <>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>

          {/* <Button  variant="primary">Login</Button>{' '} */}
          </>

        }
      
      </div>
      <div>
        <img className='' style={{width :33}}  src={user?.photoURL} alt="" />
      {/* {user?.photoURL} */}
      </div>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
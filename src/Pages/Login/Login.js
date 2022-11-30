import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

  const {user, signin} =useContext(AuthContext)
  const navigate= useNavigate()
  const location =useLocation()
  const from =location.state?.from?.pathname || '/'

    const handleSubmit =event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(   email ,password );
        // const name = form.name.value;

        signin(email ,password)
        .then(result =>{
          const user=result.user
          console.log(user);
          // setUser(currentUser)
          navigate(from ,{replace : true})
          
        })
        .catch(err => {
          console.error(err)
        })
    }

    return (
      
        <form onSubmit={handleSubmit} action="">
        {/* <input
            type="text"
            className="form-control"
            placeholder="Your name"
            aria-label="Username"
            name="name"
          /> */}
          <p> Enter Email  </p>
         <input
            type="email"
            className="form-control"
            placeholder="Your email"
            aria-label="Username"
            name="email"
          />
          <p> Enter Password  </p>
         <input
            type="password"
            className="form-control"
            placeholder="Your password"
            aria-label="Username"
            name="password"
          />
           <Button variant="primary" type="submit">
                Login
            </Button>
            <p> <span> <Link to={'/register'}> Register</Link></span></p>
         

        </form>
      
     

    //     <div className=" p-3 color-4D4C7D">
    //   <form  onSubmit={handleSubmit} className="container " >
    //     <div className="input-group mb-3 mt-5">
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="Your name"
    //         aria-label="Username"
    //         name="name"
    //       />
    //     </div>
    //     <div className="input-group mb-3 mt-5">
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="Your email"
    //         aria-label="Username"
    //         name="email"
    //       />
    //     </div>

       
    //     <div className="mt-4">
    //       <input type="submit" value="submit" className="btn btn-info" />
    //     </div>
    //   </form>
    // </div>
       

        
    );
};

export default Login;
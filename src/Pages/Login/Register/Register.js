import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../../context/AuthProvider';

const Register = () => {

    const { user, createUser,  updateUserProfile} =useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, photoURL, email, password);
        console.log(name,email ,password  )

        createUser( email,password)
        .then( result =>{
            const user =result.user
            console.log(user);
            handleUpdateUserProfile(name,photoURL)
        })
        .catch( err=>{
            console.error(err)
        })
    }
    const handleUpdateUserProfile =(name,photoURL)=>{
        const profile ={
            displayName:name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then( ()   => {})
        .catch(  er => {
            console.er(er)
        })
    }
    return (
       
        <form onSubmit={handleSubmit} action="">
            <p>Enter Name</p>
        <input
            type="text"
            className="form-control"
            placeholder="Your name"
            aria-label="Username"
            name="name"
          />
            <p>Enter  photo url</p>
        <input
            type="text"
            className="form-control"
            placeholder="Your photo url"
            aria-label="Username"
            name="photoURL"
          />
           <p>Enter email</p>
         <input
            type="email"
            className="form-control"
            placeholder="Your email"
            aria-label="Username"
            name="email"
            required
          />
          <p>Enter password</p>
         <input
            type="password"
            className="form-control"
            placeholder="Your password"
            aria-label="Username"
            name="password"
            required
          />
           <Button variant="primary" type="submit">
           Register
            </Button>
         
        </form>


    //     <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Your Name</Form.Label>
    //         <Form.Control name="name" type="text" placeholder="Your Name" />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Photo URL</Form.Label>
    //         <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control name="email" type="email" placeholder="Enter email" required />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control name="password" type="password" placeholder="Password" required />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //         <Form.Check
    //             type="checkbox"
    //             // onClick={handleAccepted}
    //             label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
    //     </Form.Group>
    //     <Button variant="primary" type="submit" disabled={!accepted}>
    //         Register
    //     </Button>
    //     <Form.Text className="text-danger">
    //         {/* {error} */}
    //     </Form.Text>
    // </Form>
            
    
    );
};

export default Register;
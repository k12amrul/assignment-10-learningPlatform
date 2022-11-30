import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const courseData =useLoaderData()
    return (
        <div>

<div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={courseData.image} />
      <Card.Body>
        <Card.Title>  {courseData.name}</Card.Title>
        <Card.Text>
          <p> {courseData.price}</p>
        </Card.Text>

        <button> <Link to={`/categoryDetails/${ courseData.id}`}>  Enroll now   </Link></button>
      </Card.Body>
    </Card>
        </div>

         
        </div> 
        
    );
};

export default Category;
//=================



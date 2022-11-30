import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseItem = ({courseItem}) => {
    console.log(courseItem)
    return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={courseItem.image}/>
      <Card.Body>
        <Card.Title>{ courseItem.name}</Card.Title>
        <Card.Text>
        <p class="card-text">$ { courseItem.price} </p>
        </Card.Text>
        <button> <Link to={`/categoryDetails/${ courseItem.id}`}>  Enroll now     </Link></button>
       
      </Card.Body>
    </Card>

    

        
  
    
        </div>    
    );
};

export default CourseItem;
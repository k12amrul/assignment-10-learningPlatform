import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const CategoryDetails = () => {

    const courseDetailsData=useLoaderData()

    
   

    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={courseDetailsData.image} />
      <Card.Body>
        <Card.Title>  {courseDetailsData.name}</Card.Title>
        <Card.Text>
          <p> {courseDetailsData.price}</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        </div>
    );
};

export default CategoryDetails;
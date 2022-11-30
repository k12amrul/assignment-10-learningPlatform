import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import CourseItem from '../CourseItem/CourseItem';


const Courses = () => {
    const navigate =useNavigate()
    const location =useLocation()
    const [courseItem ,setCourseItem ] =useState([])
    const from =location.state?.from?.pathname || '/'

    useEffect( () => {
        fetch('https://assignment-tenserver.vercel.app/')
        .then(res => res.json())
        .then(data => setCourseItem(data))
        
    },[])
   
const coursesData= useLoaderData()

    return (
        <div  className=''>
            <h1> Courses {coursesData.length}</h1>
            <h1>e</h1>
            {
                courseItem.map( courseItem => <CourseItem
                    courseItem={courseItem}
                >



                </CourseItem>)  
            }

            
            
        </div>
    );
};

export default Courses;
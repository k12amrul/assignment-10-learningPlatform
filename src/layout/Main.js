import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import RightSaideNav from '../Shared/RightSaideNav/RightSaideNav';
import Header from '../Shared/Header/Header';
import Courses from '../Pages/Courses/Courses';
import Category from '../Pages/Category/Category';

const Main = () => {
    return (
        <div>
            {/* <Outlet></Outlet> */}
            <Header></Header>
            <Container>
                <Row >
                    <Col lg="8"><Outlet><h1> 
                        Outlet Outlet</h1></Outlet></Col>
                    <Col lg="4"><RightSaideNav/></Col>
                    {/* <Col lg="4"><RightSaideNav></RightSaideNav></Col> */}
                </Row>
             </Container>
        </div>
    );
};

export default Main;
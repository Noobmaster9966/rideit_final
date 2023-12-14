import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from 'react'
const LoginPage = () => {

    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Sign Up</h1>
                <Row className="mt-2">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                        <Form.Group controlId="formBasicName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="name" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"  />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit" style={{margin:"10px"}}>
                                <a href="http://localhost:3000/home" style={{padding:"4px",textDecoration:"none",fontSize:"20px",color:"black"}} >Sign Up</a>
                            </Button>
                            <div><a href="#">Forgot Password?</a></div>
                            <div style={{marginTop:"15px"}} ><a href="http://localhost:3000/signin">Already a user?</a></div>
                        </Form>
                    </Col>
                </Row>
        
            </Container>
        </>
    );
};

export default LoginPage;
import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const LoginPage2 = () => {
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Welcome</h1>
                <Row className="mt-2">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" formAction='localhost:3000/' />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit" style={{margin:"10px"}}>
                                <a href="http://localhost:3000/home" style={{padding:"4px",textDecoration:"none",fontSize:"20px",color:"black"}} >Login</a>
                            </Button>
                    
                        </Form>
                    </Col>
                </Row>
        
            </Container>
        </>
    );
};

export default LoginPage2;
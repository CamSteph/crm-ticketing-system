import React, {useState} from 'react';
// Bootstrap imports
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
// End bootstrap imports

// Prop type import
import propTypes from 'prop-types';
// End prop type import

const LoginComponent = ({handleOnChange, email, password, handleOnSubmit, formSwitch}) => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Client Login</h1>
                    <hr/>
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Email Address:
                            </Form.Label>
                            <Form.Control 
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter email here..."
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Password:
                            </Form.Label>
                            <Form.Control 
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Enter password here..."
                            />
                        </Form.Group>
                        <Button type="submit" className='mt-3'>Login</Button>
                    </Form>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <span>Forgot password? Click <a href="#" onClick={() => formSwitch('reset')}>here</a>.</span>
                </Col>
            </Row>
        </Container>
    )
};

LoginComponent.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    handleOnSubmit: propTypes.func.isRequired,
    formSwitch: propTypes.func.isRequired,
}

export default LoginComponent
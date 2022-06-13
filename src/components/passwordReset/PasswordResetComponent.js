import React, {useState} from 'react';
// Bootstrap imports
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
// End bootstrap imports

// Prop type import
import propTypes from 'prop-types';
// End prop type import

const  PasswordReset = ({handleOnChange, email, handleOnResetSubmit, formSwitch}) => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Reset Password</h1>
                    <hr/>
                    <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                        <Button type="submit" className='mt-3'>Reset Password</Button>
                    </Form>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <span>Already have an account? Click <a href="#" onClick={() => formSwitch('login')}>here</a>.</span>
                </Col>
            </Row>
        </Container>
    )
};

PasswordReset.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    handleOnResetSubmit: propTypes.func.isRequired,
    email: propTypes.string.isRequired
};

export default PasswordReset;
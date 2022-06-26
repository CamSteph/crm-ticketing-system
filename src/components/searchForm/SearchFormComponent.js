import React from 'react';

// import Bootstrap
import {Form, Row, Col} from 'react-bootstrap';
// End import bootstrap

const SearchFormComponent = ({handleOnChange, strValue}) => {

    console.log(strValue);

  return (
    <Form>
        <Form.Group as={Row}>
            <Form.Label column sm="2">Search:</Form.Label>
            <Col sm="9">
                <Form.Control
                name="searchStr"
                placeholder='Search...'
                onChange={handleOnChange}
                value={strValue}
                />
            </Col>
        </Form.Group>
    </Form>
  )
};

export default SearchFormComponent;
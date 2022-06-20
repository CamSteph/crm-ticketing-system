import React from 'react';

// Import bootstrap 
import {Form, Button, Row, Col} from 'react-bootstrap';
// End import bootstrap

// Import Prop types
import { propTypes } from 'prop-types';
// End Import Prop types

// Import Styling
import './add-new-ticket-styles.css';
// End Import styling

const AddNewTicketForm = ({handleOnSubmit,handleOnChange,  formData, formErrorData}) => {
    console.log(formData)
  return (
    <div className='custom-jumbotron add-new-ticket'>
        <h1>Add New Ticket</h1>
        <hr/>
      <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group className="pt-2">
                            <Form.Label>
                                <b>Subject:</b>
                            </Form.Label>
                            <Form.Control 
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleOnChange}
                            placeholder="Enter subject matter here..."
                            />
                            <Form.Text className="text-danger">{formErrorData.subject && 'Subject length is invalid.'}</Form.Text>
                        </Form.Group>
                        <Form.Group className="pt-2">
                            <Form.Label>
                                <b>Issue Date:</b>
                            </Form.Label>
                            <Form.Control 
                            type="date"
                            name="issueDate"
                            value={formData.issueDate}
                            onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="pt-2">
                            <Form.Label>
                                <b>Details:</b>
                            </Form.Label>
                            <Form.Control 
                            as="textarea"
                            name="details"
                            rows="5"
                            value={formData.details}
                            onChange={handleOnChange}
                            placeholder="Enter detailed explanation of the issue here..."
                            />
                        </Form.Group>
                        <Button type="submit" className='mt-3 w-100' block>Create</Button>
                    </Form>
    </div>
  )
};

// AddNewTicketForm.propTypes = {
//     handleOnSubmit: propTypes.func.isRequired,
//     handleOnChange: propTypes.func.isRequired,
//     formData: propTypes.object.isRequired,
// }

export default AddNewTicketForm;
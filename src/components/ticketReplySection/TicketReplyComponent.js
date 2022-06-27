import React from 'react';
import {Form, Button} from 'react-bootstrap';

const TicketReplyComponent = ({messageContent, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label><b>Reply:</b></Form.Label>
        <Form.Control
        className="p-3"
        as="textarea"
        row="5"
        name="reply-details"
        placeholder='Please type your reply here...'
        value={messageContent}
        onChange={handleOnChange}
        />
        <div className="text-right mt-4 mb-4">
            <Button variant="primary" type="submit">Reply</Button>
        </div>
    </Form>
  )
};

export default TicketReplyComponent;
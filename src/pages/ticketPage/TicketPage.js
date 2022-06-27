import React, {useState, useEffect} from 'react';
// import Bootstrap
import {Container, Row, Col, Button} from 'react-bootstrap';
// End import bootstrap

// import Components
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb';
import MessageHistoryComponent from '../../components/messageHistory/MessageHistoryComponent';
import TicketReplyComponent from '../../components/ticketReplySection/TicketReplyComponent';
// End import components

// Import tickets
import tickets from '../../assets/data/dummyTickets.json';
// End import tickets

const ticket = tickets[0];

const TicketPage = () => {

    const [messageContent, setMessageContent] = useState('');

    useEffect(() => {

    }, [messageContent]);

    const handleOnChange = e => {
        const {val} = e.target.value;
        setMessageContent(val);
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        alert("Reply submitted.");
    };

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="subject"><b>Subject:</b> {ticket.subject}</div>
                <div className="date"><b>Ticket Creation:</b> {ticket.addedAt}</div>
                <div className="status"><b>Status:</b> {ticket.status}</div>
            </Col>
            <Col>
                <Button variant="outline-primary" className="fw-bold">Close Ticket</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <MessageHistoryComponent message={ticket.history}/>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-4">
            <Col>
                <TicketReplyComponent messageContent={messageContent}
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                />
            </Col>
        </Row>
    </Container>
  )
};

export default TicketPage;
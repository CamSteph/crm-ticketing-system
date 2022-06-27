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

import { useParams } from 'react-router-dom';

//const ticket = tickets[0];

const TicketPage = () => {

    const {tID} = useParams();
    const [messageContent, setMessageContent] = useState('');
    const [ticket, setTicket] = useState('');

    useEffect(() => {
        for(let i = 0; i < tickets.length; i++){
            if(tickets[i].id == tID){
                setTicket(tickets[i]);
                continue;
            }
        }
    }, [messageContent, tID]);

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
                <div className="subject"><b>{tID}<br/> Subject:</b> {ticket && ticket.subject}</div>
                <div className="date"><b>Ticket Creation:</b> {ticket && ticket.addedAt}</div>
                <div className="status"><b>Status:</b> {ticket && ticket.status}</div>
            </Col>
            <Col className='text-right'>
                <Button variant="outline-primary" className="fw-bold text-right">Close Ticket</Button>
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
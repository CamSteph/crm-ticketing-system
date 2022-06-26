import React, {useState, useEffect} from 'react';

// Import bootstrap
import {Container, Row, Col, Button} from 'react-bootstrap'
// End import bootstrap

// Import Components
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb';
import SearchFormComponent from '../../components/searchForm/SearchFormComponent'; 
import TicketTable from '../../components/ticketTable/TicketTable';
// End import components

// Import dummy ticket data
import tickets from '../../assets/data/dummyTickets.json';
// End import dummy ticket data

const TicketListPage = () => {
    const [strValue, setStrValue] = useState('');
    const [filteredTickets, setFilteredTickets] = useState(tickets);

    const handleOnChange = e => {
        const {value} = e.target;
        setStrValue(value);
        searchTicket(value);
    };

    useEffect(() => {
        //setFilteredTickets(tickets);
    }, [strValue, filteredTickets]);

    const searchTicket = str => {

        const displayTickets = tickets.filter(row => {
            return row.subject.toLowerCase().includes(str.toLowerCase());
        });
        setFilteredTickets(displayTickets);
    };

  return (
    <Container className="pb-4">
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket Lists"/>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <Button variant="primary" className="text-white">Add New Ticket</Button>
            </Col>
            <Col className='text-right'>
                <SearchFormComponent handleOnChange={handleOnChange} strValue={strValue}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <TicketTable tickets={filteredTickets}/>
            </Col>
        </Row>
    </Container>
  )
}

export default TicketListPage
import React from 'react';
// Import bootstrap
import {Container, Row, Col, Button} from 'react-bootstrap';
// End import bootstrap

// Import Components
import TicketTable from '../../components/ticketTable/TicketTable';
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb';
// End Import Components

// Import dummy data
import dummyTickets from '../../assets/data/dummyTickets.json';
// End import dummy data

import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard"/>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-5 mb-2'>
          <Link to='/add-ticket'><Button variant="primary" style={{'font-size':'1.5rem', 'padding':'10px 20px', 'color':'#fff'}}>Add New Ticket</Button></Link>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-2'>
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-2'>
          <h4>Recently added tickets</h4>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col className='recent-tcket mb-4'>
          <TicketTable tickets={dummyTickets}/>
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardPage
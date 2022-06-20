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
          <Button variant="primary" style={{'font-size':'1.5rem', 'padding':'10px 20px', 'color':'#fff'}}>Add New Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-2'>
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>
      <Row>+
        <Col className='text-center mb-2'>
          Recently added tickets
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col className='recent-tcket'>
          <TicketTable tickets={dummyTickets}/>
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardPage
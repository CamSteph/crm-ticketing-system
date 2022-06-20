import React from 'react';
// Import Bootstrap
import {Table} from 'react-bootstrap';
// End import bootstrap

const TicketTable = ({tickets}) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {tickets.length ? tickets.map(row => {
                return (<tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.subject}</td>
                    <td>{row.status}</td>
                    <td>{row.addedAt}</td>
                </tr>)
            })
            :
            <tr>
                <td colSpan="4" className="text-center">Ticket queue is empty. Check back later.</td>
            </tr>
            }
        </tbody>
    </Table>
  )
}

export default TicketTable
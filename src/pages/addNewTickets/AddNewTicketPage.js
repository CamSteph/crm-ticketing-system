import React, {useState} from 'react';
// Import validation functions
import {textLengthValidation} from '../../utils/validateForm';
// End import validation functions

// import Bootstrap
import {Container, Row, Col} from 'react-bootstrap';
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb';
// End import bootstrap

// Import components
import AddNewTicketForm from '../../components/addNewTicketsForm/AddNewTicketForm';
// End import components

// Initial Form Data
const initialFormData = {
    subject: "",
    issueDate: null,
    details: ""
}
// End Intial Form Data

// Initial Error Data
const initialFormErrorData = {
    subject: false,
    issueDate: false,
    details: false
}
// End Intial Form Data


const AddNewTicket = () => {

    const [formData, setFormData] = useState(initialFormData);
    const [formErrorData, setFormErrorData] = useState(initialFormErrorData);

    //handle onChange function
    const handleOnChange = e => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    // handle onSubmit function
    const handleOnSubmit = e => {
        e.preventDefault();
        const textLengthValid = textLengthValidation(formData.subject);
        if(textLengthValid){
            setFormErrorData(initialFormErrorData);
            console.log('Form sucessfully submitted.');
        }else{
            setFormErrorData({
                ...formErrorData,
                subject: !textLengthValid
            });
            console.log('Invalid subject length')
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Add New Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddNewTicketForm 
                    handleOnSubmit={handleOnSubmit}
                    handleOnChange={handleOnChange} 
                    formData={formData}
                    formErrorData={formErrorData}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AddNewTicket;
import React, {useState} from 'react';
// Import styling
import './entry-style.css';
// End import styling

// Import Components
import LoginComponent from '../../components/login/LoginComponent';
import PasswordReset from '../../components/passwordReset/PasswordResetComponent';
// End import components

const EntryPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formLoad, setFormLoad] = useState('login');

    const handleOnChange = e => {
        const {name, value} = e.target;
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        if(!email && !password){
           return alert('Please fill out all entries.');
        }else if(!email){
            return alert('Email is required.');
        }else if(!password){
            return alert('Password is required.');
        }
    }

    const handleOnResetSubmit = e => {
        e.preventDefault();
        if(!email){
            return alert('Email is required.');
        }
    }

    const formSwitch = formType => {
        setFormLoad(formType);
    }

    return (
        <div className='entry-page bg-dark'>
            <div className='custom-jumbotron form-box'>
                {formLoad === 'login' && 
                    <LoginComponent handleOnChange={handleOnChange} email={email} password={password} handleOnSubmit={handleOnSubmit}
                    formSwitch={formSwitch}
                    />
                }
                {formLoad === 'reset' &&
                    <PasswordReset handleOnChange={handleOnChange} email={email} handleOnResetSubmit={handleOnResetSubmit}
                    formSwitch={formSwitch}
                    />
                }
            </div>
        </div>
    )
};

export default EntryPage;
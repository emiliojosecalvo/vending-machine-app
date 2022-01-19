import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';

export default class Doritos extends Component {
    render() {
        return (
            <div>
                <Message >
                    <h1>Doritos are the best</h1>
                </Message>
                <img alt='doritos' src='https://d2wwnnx8tks4e8.cloudfront.net/images/app/large/5000328462622_3.JPG' />
                <NavLink to='/'>
                    Go Back
                </NavLink>
            </div>
        )
    }
}

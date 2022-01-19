import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Doritos extends Component {
    render() {
        return (
            <div>
                <img alt='doritos' src='https://d2wwnnx8tks4e8.cloudfront.net/images/app/large/5000328462622_3.JPG' />
                <NavLink to='/'>
                    Go Back
                </NavLink>
            </div>
        )
    }
}

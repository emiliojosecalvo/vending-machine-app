import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class CocaCola extends Component {
    render() {
        return (
            <div>
                <img alt='coca-cola' src='https://cdn.huntoffice.ie/images/D.cache.large/can-of-coke.jpg' />
                <NavLink to='/'>
                    Go Back
                </NavLink>
            </div>
        )
    }
}

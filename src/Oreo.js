import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Oreo extends Component {
    render() {
        return (
            <div>
                <img alt='oreo' src='https://www.jiomart.com/images/product/600x600/491338266/cadbury-oreo-original-vanilla-creme-biscuits-120-g-0-20210304.jpg' />
                <NavLink to='/'>
                    Go Back
                </NavLink>
            </div>
        )
    }
}

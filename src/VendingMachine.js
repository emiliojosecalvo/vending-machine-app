import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './VendingMachine.css'

export default class VendingMachine extends Component {
    render() {
        return (
            <div className='VendingMachine'>
                <img src='https://i.dlpng.com/static/png/5096647-cartoon-red-vending-machine-cartoon-vector-cartoon-red-red-png-vending-machine-png-650_651_preview.png' />
                <ul>
                    <li>
                        <NavLink className='VendingMachine-NavLink' to='/doritos'>Doritos</NavLink>
                    </li>
                    <li>
                        <NavLink className='VendingMachine-NavLink' to='/oreo'>Oreo</NavLink>
                    </li>
                    <li>
                        <NavLink className='VendingMachine-NavLink' to='/coca-cola'>Coca-Cola</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}


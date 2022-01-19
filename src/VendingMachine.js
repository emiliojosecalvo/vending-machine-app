import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './VendingMachine.css'

export default class VendingMachine extends Component {
    render() {
        return (
            <div className='VendingMachine'>
                <img alt='vending machine' src='https://i.dlpng.com/static/png/5096647-cartoon-red-vending-machine-cartoon-vector-cartoon-red-red-png-vending-machine-png-650_651_preview.png' />
                <ul>
                    <li>
                        <NavLink className='VendingMachine-NavLink' to='/doritos'>
                            <img alt='doritos' src='https://d2wwnnx8tks4e8.cloudfront.net/images/app/large/5000328462622_3.JPG' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='VendingMachine-NavLink' to='/oreo'>
                            <img alt='oreo' src='https://www.jiomart.com/images/product/600x600/491338266/cadbury-oreo-original-vanilla-creme-biscuits-120-g-0-20210304.jpg' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='VendingMachine-NavLink' to='/coca-cola'>
                            <img alt='coca-cola' src='https://cdn.huntoffice.ie/images/D.cache.large/can-of-coke.jpg' />
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}


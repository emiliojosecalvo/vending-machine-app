import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='Navbar'>
                    <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/'>Home</NavLink>
                    <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/doritos'>Doritos</NavLink>
                    <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/oreo'>Oreo</NavLink>
                    <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/coca-cola'>Coca-Cola</NavLink>
                </nav>
            </div>
        )
    }
}

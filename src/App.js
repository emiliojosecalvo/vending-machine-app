// import * as React from 'react';
import './App.css';
import { Route, Routes, NavLink, Outlet } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Doritos from './Doritos';
import Oreo from './Oreo';
import CocaCola from './CocaCola';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<VendingMachine />} />
          <Route path='vending-machine' element={<VendingMachine />} />
          <Route path='doritos' element={<Doritos />} />
          <Route path='oreo' element={<Oreo />} />
          <Route path='coca-cola' element={<CocaCola />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (<div>
    <nav className='Navbar'>
      <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/'>Home</NavLink>
      <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/doritos'>Doritos</NavLink>
      <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/oreo'>Oreo</NavLink>
      <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/coca-cola'>Coca-Cola</NavLink>
    </nav>

    <Outlet />
  </div>)
}

export default App;

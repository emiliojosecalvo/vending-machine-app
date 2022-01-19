// import * as React from 'react';
import './App.css';
import { Route, Routes, NavLink, Outlet } from 'react-router-dom';
import Home from './Home';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='vending-machine' element={<VendingMachine />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (<div>
    <nav>
      <NavLink to='/'>Home </NavLink>
      <NavLink to='/vending-machine'>Vending Machine</NavLink>
    </nav>

    <Outlet />
  </div>)
}

export default App;

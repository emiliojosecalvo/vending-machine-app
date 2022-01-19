import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Doritos from './Doritos';
import Oreo from './Oreo';
import CocaCola from './CocaCola';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<VendingMachine />} />
        <Route path='vending-machine' element={<VendingMachine />} />
        <Route path='doritos' element={<Doritos />} />
        <Route path='oreo' element={<Oreo />} />
        <Route path='coca-cola' element={<CocaCola />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

function Error() {
  return (
    <div>
      <h2>Opps... something went wrong.</h2>
      <NavLink to='/'>
        Go Back
      </NavLink>
    </div>
  )
}

// function Layout() {
//   return (<div>
//     <nav className='Navbar'>
//       <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/'>Home</NavLink>
//       <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/doritos'>Doritos</NavLink>
//       <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/oreo'>Oreo</NavLink>
//       <NavLink className={(d) => d.isActive ? 'active app-navlink' : 'app-navlink'} to='/coca-cola'>Coca-Cola</NavLink>
//     </nav>

//     <Outlet />
//   </div>)
// }

export default App;

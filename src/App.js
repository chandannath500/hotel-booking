import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Hotel from './pages/Hotel/Hotel';
import Hotels from './pages/hotels/Hotels';
import Login from './pages/Logins/Logins.jsx';
import Register from './pages/register/Register';
import Romania from './pages/gallery/Romania';
import Hungary from './pages/gallery/Hungary';
import Iran from './pages/gallery/Iran';
import London from './pages/gallery/London';
import Hotell from './pages/gallery/Hotell';
import Apartment from './pages/gallery/Apartment';
import Resort from './pages/gallery/Resort';
import Cabin from './pages/gallery/Cabin';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/hotels/:id' element={<Hotel />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/romania' element={<Romania />} />
            <Route path='/hungary' element={<Hungary />} />
            <Route path='/iran' element={<Iran />} />
            <Route path='/london' element={<London />} />
            <Route path='/hotell' element={<Hotell />} />
            <Route path='/apartment' element={<Apartment />} />
            <Route path='/resort' element={<Resort />} />
            <Route path='/cabin' element={<Cabin />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;

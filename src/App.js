import './App.css';
import NavBar from './components/NavBar'

import Home from './pages/Home'
import Footer from './components/Footer'
import Pepproni from './pages/pepperoni';
import Burger from './pages/burger'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/recipe/pepperoni' element={<Pepproni />} />
          <Route path='/recipe/burger' element={<Burger />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

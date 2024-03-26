import './App.css';
import NavBar from './components/NavBar'

import Home from './pages/Home'
import Footer from './components/Footer'
import Pepproni from './pages/pepperoni';
import Burger from './pages/burger'
import Sushi from './pages/sushi';
import  Cake  from './pages/cake';
import Baklava from './pages/baklava';



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
          <Route path='/recipe/sushi' element={<Sushi />} />
          <Route path='/recipe/cake' element={<Cake />} />
          <Route path='/recipe/baklava' element={<Baklava />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

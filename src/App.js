import react from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Workout from './workout';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/workout" element={<Workout />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Causes from './pages/Causes';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
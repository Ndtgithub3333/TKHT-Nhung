import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import RealTime from './pages/RealTime';
import Analytics from './pages/Analytics';
import Overspeed from './pages/Overspeed';
import About from './pages/About';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/realtime" element={<RealTime />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/overspeed" element={<Overspeed />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
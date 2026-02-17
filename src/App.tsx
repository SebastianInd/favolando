import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Upcoming from './pages/Upcoming';
import ShowDetail from './pages/ShowDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/in-scena" element={<ShowDetail />} />
            <Route path="/archivio" element={<Archive />} />
            <Route path="/archivio/:id" element={<ShowDetail />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

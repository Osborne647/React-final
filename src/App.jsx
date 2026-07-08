import './App.css';
import Nav from "./components/nav.jsx"
import LandingPage from "./components/landingpage.jsx"
import Games from "./pages/games.jsx"
import GameDetail from './pages/gamedetail.jsx';
import Footer from "./components/footer.jsx"
import { HashRouter, Routes, Route, Link } from 'react-router-dom' 
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameDetail />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Favorites from './pages/Favorites';
import Header from "./components/Header";
import PageOfCharacter from "./pages/PageOfCharacter";


function App() {

  return (
    <div className="container">
    <Router>
      <Header/>
        <Routes>
          <Route path="/characters" element={<Characters/>} />
          <Route path="/comics" element={<Comics/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/character/:characterId" element={<PageOfCharacter/>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;

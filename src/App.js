
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";


import './App.css';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Favorites from './pages/Favorites';
import PageOfCharacter from "./pages/PageOfCharacter";
import PageOfComics from "./pages/PageOfComics";
import Home from "./pages/Home";

import { library } from '@fortawesome/fontawesome-svg-core';
import {faHeart, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';
library.add(faHeart , faForward, faBackward);



function App() {
  
const [search, setSearch] = useState("");
const [skip, setSkip] = useState(0);

  return (
    <div className="container">
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/characters" element={<Characters search={search} setSearch={setSearch} skip={skip} setSkip={setSkip}/>} />
          <Route path="/comics" element={<Comics search={search} setSearch={setSearch} />} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/comics/:characterId" element={<PageOfComics/>} />
          <Route path="/character/:characterId" element={<PageOfCharacter/>} />
        </Routes>
      </Router>
    </div>
  );

}
export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Releases from "./Pages/Sello/Releases";
import Artists from "./Pages/Sello/Artists";
import Submissons from "./Pages/Sello/Submissons";
import Podcast from "./Pages/Produ/Podcast";
import News from "./Pages/Produ/News";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Releases" element={<Releases />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Submissons" element={<Submissons />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Friends from "./components/Friends";
import Himym from "./components/Himym";
import Modern from "./components/Modern";
import Office from "./components/Office";
import Got from "./components/Got";
import B99 from "./components/B99";
import Simpsons from "./components/Simpsons";
import Community from "./components/Community";
import Tbbt from "./components/Tbbt";
import Iasip from "./components/Iasip";
import Tmkoc from "./components/Tmkoc";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/himym" element={<Himym />} />
          <Route path="/tbbt" element={<Tbbt />} />
          <Route path="/modern-family" element={<Modern />} />
          <Route path="/the-office" element={<Office />} />
          <Route path="/game-of-thrones" element={<Got />} />
          <Route path="/b99" element={<B99 />} />
          <Route path="/simpsons" element={<Simpsons />} />
          <Route path="/community" element={<Community />} />
          <Route path="/iasip" element={<Iasip />} />
          <Route path="/tmkoc" element={<Tmkoc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

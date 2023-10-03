
import './App.css';
import { BrowserRouter  , Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Friends from './components/Friends';
import Himym from './components/Himym';
import Tbbt from './components/Tbbt';
import Modern from './components/Modern';



function App() {
  return (
<div>
<Navbar/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/friends" element={<Friends/>} />
        <Route path="/himym" element={<Himym/>} />
       <Route path="/tbbt" element={<Tbbt/>} />
       <Route path ='/modern' element={<Modern/>} />
      </Routes>
    </BrowserRouter>
    </div> 
    
  );
}

export default App;

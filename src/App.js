import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import './App.css';
import Contactus from "./Contactus";
import Home from "./Home";
import Interior from "./Interior";

function App() {
  return <Router>
    <div className='cont'>
      <h1>DESIGN LABORATORY</h1>
    </div>
      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/interior" className='link'>Interior</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/contactus" className='link'>Contact us</Link>
 
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/interior" element={<Interior/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
     </Routes>
</Router>

}

export default App;

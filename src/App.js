import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    
      <Routes>
          <Route path="/" element={<Home></Home>} exact={true}/>
            
          <Route path="/about" element={<About/>}/>

          <Route path="/contact" exact element={<Contact/>}/>

      </Routes>
      
    </div>
  );
}

export default App;

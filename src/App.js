import './App.css';
import React,{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Contact from './Components/Contact';
import About from './Components/About';


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  
  );
}

export default App;
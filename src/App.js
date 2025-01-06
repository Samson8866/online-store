import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar></Navbar>

    <Routes>
      <Route path="/" element={ <Home></Home>} />
      <Route path="/catalog" element={ <Catalog></Catalog>} />
      <Route path="/about" element={ <About></About> } />
    </Routes>


    <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

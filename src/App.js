//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//COMPONENTS
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import ScrambledWord from './components/ScrambledWord';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ScrambledWord />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

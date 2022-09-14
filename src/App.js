import TeamBuilderContainer from './components/TeamBuilderContainer';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ErrorPage from './components/ErrorPage';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Very Excellent <span className="pokefont">Pokemon </span>App</h1>
          <NavBar />
        </header>

        <Routes>

          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/team" element={< TeamBuilderContainer />} />
          <Route path="*" element={< ErrorPage />} />

        </Routes>


      </div>
    </Router>
  )
    ;
}

export default App;

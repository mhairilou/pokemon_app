import TeamBuilderContainer from './components/TeamBuilderContainer';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h1>Very Excellent <span className="pokefont">Pokemon </span>App</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/team" element={< TeamBuilderContainer />} />
        </Routes>
      </Router>
    </div>
  )
    ;
}

export default App;

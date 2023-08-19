import "./App.css";
import Child from "./components/Child";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/child" element={<Child />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="logIn" Component={Login} />
          <Route exact path="homePage" Component={HomePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

function WelcomeMessage() {
  return <h3>Welcome Prince</h3>;
}

const nm = "prince";

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <img src={logo} alt="React - logo" width="200px" height="200px" />

      <h2>{nm}</h2>
    </div>
  );
}

export default App;

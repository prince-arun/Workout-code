import logo from "./logo.svg";
import "./App.css";

function WelcomeMessage() {
  return <h3>Welcome Prince</h3>;
}

const nm = "prince";

const welcome = (msg) => {
  return `Hello ${msg}`;
};

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <img src={logo} alt="React - logo" width="200px" height="200px" />

      <h2>{nm}</h2>

      <h2>{welcome("Nerd")}</h2>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

function WelcomeMessage() {
  return <h3>Welcome Prince</h3>;
}

const nm = "prince";

const welcome = (msg) => {
  return `Hello ${msg}`;
};
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <img src={logo} alt="React - logo" width="200px" height="200px" />

      <h2>{nm}</h2>

      <h2>{welcome("Nerd")}</h2>

      {list.map((item) => {
        return (
          <div key={item.objectID}>
            <p>{item.title}</p>
            <a href={item.url}>{item.title}</a>
            <p>{item.author}</p>
            <p>{item.num_comments}</p>
            <p>{item.points}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

function Logo() {
  return <img src={logo} className="App-logo" alt="logo" />;
}

function Text() {
  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

function Link() {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );
}

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <Text />
      <Link />
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

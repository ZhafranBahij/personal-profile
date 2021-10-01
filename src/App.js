// import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar.js";
import Jumbotron from "./component/Jumbotron.js";

const Fusion = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
};

function App() {
  return <Fusion />;
}

export default App;

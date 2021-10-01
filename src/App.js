// import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./component/js/Navbar.js";
import Jumbotron from "./component/js/Jumbotron.js";
import Skill from "./component/js/Skill.js";

const Fusion = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Skill />
    </div>
  );
};

function App() {
  return <Fusion />;
}

export default App;

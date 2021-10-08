// import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./component/js/Navbar.js";
import Jumbotron from "./component/js/Jumbotron.js";
import Skill from "./component/js/Skill.js";
import Experience from "./component/js/Experience.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Fusion = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Skill />
      <Experience />
    </div>
  );
};

function App() {
  return <Fusion />;
}
AOS.init({
  duration: 750,
  once: false,
});
export default App;

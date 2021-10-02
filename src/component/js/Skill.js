import react from "react";

import "../css/Skill.css";

const FrontEnd = () => {
  return (
    <div id="frontend" className="col-12 col-md-6 mb-5 mb-md-0">
      <h2>Front End Development</h2> <br />
      <i id="cpulogo" class="bi bi-laptop pb-4"></i>
      <div id="x">
        <ul>
          <li>HTML5 and Semantic HTML</li>
          <li>CSS3 and CSS Grid</li>
          <li>Javascript and EcmaScript 6</li>
          <li>Bootstrap 5</li>
          <li>React JS (Not Perfectly)</li>
        </ul>
      </div>
    </div>
  );
};

const BackEnd = () => {
  return (
    <div id="frontend" className="col-12 col-md-6">
      <h2>Back End Development</h2> <br />
      <i id="cpulogo" class="bi bi-cpu pb-4 collapse"></i>
      <div id="x">
        <ul>
          <li>
            Know how to create CRUD with <b>Laravel</b>
          </li>
          <li>
            Create authentication with <b>Laravel</b>
          </li>
          <li>
            Create CRUD with <b>CodeIgniter</b>
          </li>
          <li>
            Can integrate <b>MySQL</b> with <b>Laravel</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

class Skill extends react.Component {
  render() {
    return (
      <div id="skill" className="bg-primary">
        <div id="skill02" className="pt-5  text-white ">
          <h1 className="mb-5">SKILL</h1>
          <div className="row  text-white">
            <FrontEnd />
            <BackEnd />
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;

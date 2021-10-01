import react from "react";

import "../css/Skill.css";

class Skill extends react.Component {
  render() {
    return (
      <div id="skill" className="bg-primary">
        <div id="skill02" className="pt-5  text-white">
          <h1>SKILL</h1>
          <div className="row  text-white">
            <div id="frontend" className="col-6">
              <h2>Front End Development</h2> <br />
              <i id="cpulogo" class="bi bi-laptop"></i>
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
            <div className="col-6">Tolong</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;

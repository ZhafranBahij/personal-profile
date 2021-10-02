import react from "react";
import template from "../../img/Elaina_Wallpaper_LI.jpg";
import "../css/Experience.css";

class Experience extends react.Component {
  render() {
    return (
      <div id="experience">
        <div id="page">
          <img src={template} alt="Placeholder" />
          <img src={template} alt="Placeholder" />
          <img src={template} alt="Placeholder" />
        </div>
      </div>
    );
  }
}

export default Experience;

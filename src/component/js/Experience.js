import react from "react";
import template from "../../img/Elaina_Wallpaper_LI.jpg";
import "../css/Experience.css";

let img_parts = ["img-1"];

for (let i = 2; i <= 9; i++) {
  img_parts.push(`img-${i}`);
}

const PageText = () => {
  return (
    <div id="pagetext" className="text-white mb-5 pt-5">
      <h1>Experience</h1>
    </div>
  );
};

const PageImage = () => {
  let delay = 50;
  const image = img_parts.map((img_part) => {
    delay += 100;
    return (
      <img
        src={template}
        alt="Placeholder"
        className={img_part}
        data-aos="flip-left"
        data-aos-delay={delay}
      />
    );
  });

  return <div id="pageimg">{image}</div>;
};

class Experience extends react.Component {
  render() {
    return (
      <div id="experience">
        <div id="page">
          <PageText />
          <PageImage />
        </div>
      </div>
    );
  }
}

export default Experience;

import react from "react";
import "../css/Experience.css";

//* BUAT IMPORT IMAGE SECARA MASSAL
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const photoProject = importAll(
  require.context("../project_image", false, /\.(png|jpe?g|svg)$/)
);

//* MEMBERIKAN NAMA KELAS
let img_parts = ["img1"];

for (let i = 2; i <= 8; i++) {
  img_parts.push(`img${i}`);
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

    //* photoProject buat mengecek huehehe
    return (
      <a href="#">
        <img
          src={photoProject[`${img_part}.png`].default}
          alt="Placeholder"
          className={img_part}
          data-aos="flip-left"
          data-aos-delay={delay}
        />
      </a>
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

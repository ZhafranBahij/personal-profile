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

//* Memberikan link
const myLink = {
  img1: "https://zhafranbahij.github.io/zero-note/",
  img2: "https://zhafranbahij.github.io/fran-gallery/08_LandingPage.html",
  img3: "#",
  img4: "https://zhafranbahij.github.io/article-wtih-animation/",
  img5: "https://zhafranbahij.github.io/fran-bmiapp/",
  img6: "https://zhafranbahij.github.io/Simple-Run/",
  img7: "https://zhafranbahij.github.io/Bookshelf/",
  img8: "https://zhafranbahij.github.io/calculator-app/",
};

const PageImage = () => {
  let delay = 50;
  const image = img_parts.map((img_part) => {
    delay += 100;

    //* photoProject buat mengecek huehehe
    return (
      <a href={myLink[img_part]}>
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

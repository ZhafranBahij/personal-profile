import nepgear from "../../img/Shizuku.jpg";
import react from "react";
import "../css/Jumbotron.css";

const MyImage = () => {
  return (
    <div id="photo" class=" col-12 col-md-4 col-sm-6 " data-aos="fade-right">
      <img src={nepgear} alt="Shizuku" />
    </div>
  );
};

const Identity = () => {
  return (
    <div
      id="identity"
      class="col-12 col-md-8 col-sm-6"
      data-aos="fade-left"
      data-aos-delay="750"
    >
      <div id="sometext">
        <h2 id="myname" className="pb-0 pt-2">
          RAINFOG MUZABA
        </h2>
        <hr />
        <div id="quote" className="mb-3 pb-3">
          I'm just a normal people who likes anime and JRPG game. However, i
          want to prove that my hobbies can bring myself to be better. So, i'll
          create some creation to prove it
        </div>
        <div id="sosmed">
          <a href="https://github.com/ZhafranBahij">
            <i class="bi bi-github ps-3"></i>
          </a>
          <a href="https://t.me/Zhafran_Bahij">
            <i class="bi bi-telegram ps-3"></i>
          </a>
          <a href="https://www.instagram.com/zhafranbahij/">
            <i class="bi bi-instagram ps-3"></i>
          </a>
          <a href="https://www.linkedin.com/in/m-zhafran-bahij-6021171b8/">
            <i class="bi bi-linkedin ps-3"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

class Jumbotron extends react.Component {
  render() {
    return (
      <div id="jumbotron">
        <div id="truepage">
          <div class="row ">
            <MyImage />
            <Identity />
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;

import profile from "../../img/Zhafran.jpeg";
import react from "react";
import "../css/Jumbotron.css";

const MyImage = () => {
  return (
    <div id="photo" class=" col-12 col-md-4 col-sm-6 " data-aos="fade-right">
      <img src={profile} alt="Shizuku" />
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
          M. Zhafran Bahij
        </h2>
        <hr />
        <div id="quote" className="mb-3 pb-3">
          Hello fellas! I'm a undergraduate Computer Science from State
          University of Jakarta. I've some experience in front-end development.
          Well, check this web if you wanna know about me.
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

import nepgear from "../../img/Shizuku.jpg";
import react from "react";
import "../css/Jumbotron.css";

const MyImage = () => {
  return (
    <div id="photo" class=" col-12 col-md-4 col-sm-6 ">
      <img src={nepgear} alt="nepgear" />
    </div>
  );
};

const Identity = () => {
  return (
    <div id="identity" class="col-12 col-md-8 col-sm-6">
      <div id="sometext">
        <h2 id="myname">RAINFOG MUZABA</h2>
        <hr />
        <div id="quote">
          I'm just a normal people who likes anime and JRPG game. However, i
          want to prove that my hobbies can bring myself to be better. So, i'll
          create some creation that to prove it
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

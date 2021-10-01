import react from "react";
import nepgear from "../img/Nepgear_PP.jpg";

const Menu = () => {
  return (
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav ">
        <a class="nav-link" aria-current="page" href="#">
          Identity
        </a>
        <a class="nav-link" href="#">
          Skill
        </a>
        <a class="nav-link" href="#">
          Experience
        </a>
      </div>
    </div>
  );
};

const ButtonActivate = () => {
  return (
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  );
};

const ProfileImage = () => {
  return (
    <a class="navbar-brand" href="#">
      <img src={nepgear} alt="Nepgear" width="50" height="50" />
    </a>
  );
};

class Navbar extends react.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text">
        <div class="container-fluid">
          <ProfileImage />
          <ButtonActivate />
          <Menu />
        </div>
      </nav>
    );
  }
}

export default Navbar;

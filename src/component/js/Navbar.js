import react from "react";
import profile from "../../img/Zhafran.jpeg";
import "../css/Navbar.css";

const Menu = () => {
  return (
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav ">
        <a class="nav-link" href="#jumbotron">
          IDENTITY
        </a>
        <a class="nav-link" href="#skill">
          SKILL
        </a>
        <a class="nav-link" href="#experience">
          EXPERIENCE
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
      <img src={profile} alt="profile" width="50" height="50" />
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

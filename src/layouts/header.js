import React from "react";
import "../assets/styles/header.css";

const MainHeader = (props) => {
  return (
    <>
      {/* Header main div */}
      <div className="header noselect">
        <img
          id="back"
          src={require("../assets/static/back.png")}
          alt="Back"
          onClick={() => {
            this.props.history.goBack();
          }}
        ></img>
        <div
          id="home"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          <p id="title">HealthKeeper</p>
          <img
            id="logo"
            src={require("../assets/static/logo.png")}
            alt="Logo"
          ></img>
        </div>
        <img
          id="logout"
          src={require("../assets/static/logout.png")}
          alt="Logout"
          onClick={() => {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "/";
          }}
        ></img>
      </div>
    </>
  );
};

// Header on the home page
const LoginHeader = (pops) => {
  return (
    // Header main div
    <div className="header noselect">
      {/* Home div */}
      <div
        id="home"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <p id="title">HealthKeeper</p>
        <img
          id="logo"
          src={require("../assets/static/logo.png")}
          alt="Logo"
        ></img>
      </div>
    </div>
  );
};

export { MainHeader, LoginHeader };

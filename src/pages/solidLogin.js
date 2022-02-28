import React, { useEffect, useState } from "react";
import "../assets/styles/solidLogin.css";
import Loader from "../components/loader";

const SolidLogin = (props) => {
  const [loading, setLoading] = useState(false);

  const details = {
    message: "Please wait while we configure your dashboard",
  };

  useEffect(() => {
    if (!localStorage.getItem("googleAuth")) {
      window.location.href = "/";
    }

    if (
      localStorage.getItem("solidAuth") &&
      localStorage.getItem("googleAuth")
    ) {
      window.location.href = "/dashboard";
    }
  }, []);

  const solidLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const solidProviders = document.getElementById("solidProviders");
    const selectedsolidProvider =
      solidProviders.options[solidProviders.selectedIndex].value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/v1/podLogin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);

        if (result.metadata.status === 200) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("solidAuth", true);

          window.location.href = "/dashboard";
        }
        if (result.metadata.status === 401) {
          alert(result.metadata.message);
        }
      })
      .catch((error) => console.log("error", error));

    setLoading(false);
  };

  return loading ? (
    <Loader details={details}></Loader>
  ) : (
    <div className="screen-center main-container">
      <h2 className="center-text">Login to your Solid account</h2>
      <br></br>
      <br></br>
      <h6>Choose your Solid provider</h6>
      <select name="solidProviders" id="solidProviders">
        <option value="https://inrupt.net">https://inrupt.net</option>
        <option value="https://solidcommunity.net">
          https://solidcommunity.net
        </option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
      <h6>Username</h6>
      <input
        id="username"
        name="username"
        placeholder="Username"
        required
      ></input>
      <br></br>
      <br></br>
      <br></br>
      <h6>Password</h6>
      <input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        required
      ></input>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button
        id="solidLogin"
        onClick={(e) => {
          solidLogin(e);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default SolidLogin;

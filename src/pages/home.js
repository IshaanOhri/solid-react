import React, { useEffect, useState } from "react";
import "../assets/styles/home.css";
import { LoginHeader } from "../layouts/header";
import Loader from "../components/loader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const details = {
    message: "Please wait while we configure your dashboard",
  };

  return loading ? (
    <Loader details={details}></Loader>
  ) : (
    <>
      <LoginHeader></LoginHeader>
      <div id="signInBtn">
        <button
          onClick={() => {
            localStorage.setItem("googleAuth", true);
            window.location.href = "/solidLogin";
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Home;

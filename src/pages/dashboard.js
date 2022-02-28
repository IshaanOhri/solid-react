import React, { useEffect, useState } from "react";
import { MainHeader } from "../layouts/header";
import { BarChart, Bar, XAxis } from "recharts";
import Loader from "../components/loader";
import "../assets/styles/dashboard.css";

const Dashboard = (props) => {
  const [loading, setLoading] = useState(false);

  const details = {
    message: "Please wait while we configure your dashboard",
  };

  useEffect(() => {
    if (!localStorage.getItem("googleAuth")) {
      window.location.href = "/";
    } else if (!localStorage.getItem("solidAuth")) {
      window.location.href = "/solidLogin";
    }
    // setLoading(true)

    // setTimeout(function() {
    //   setLoading(false)
    // }, 1000);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: "ishaanohri",
      password: "IshaanOhri@123",
      filename: "test102",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/v1/readData", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return loading ? (
    <Loader details={details}></Loader>
  ) : (
    <>
      <MainHeader></MainHeader>

      <div id="options" className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 option noselect">Check</div>
          <div className="col-xs-12 col-sm-6 option noselect">Check</div>
          <div className="col-xs-12 col-sm-6 option noselect">Check</div>
          <div className="col-xs-12 col-sm-6 option noselect">Check</div>
        </div>
      </div>

      <div id="options">
        <table>
          <tbody>
            <tr>
              <td>
                <div
                  className="option noselect"
                  id="steps"
                  onClick={() => {
                    window.location.href = "/steps";
                  }}
                >
                  <div>
                    <div className="cardHeading">
                      <img src={require("../assets/static/steps.png")} alt="" />
                      <p>Steps</p>
                    </div>
                    <div className="cardStats">
                      <p className="cardData">
                        {/* {createGraphData("steps")[6].data} */}
                      </p>
                      <p className="cardDataDay">Today</p>
                    </div>
                  </div>
                  <div className="cardGraph">
                    <BarChart
                      // data={createGraphData("steps")}
                      barSize={10}
                      width={200}
                      height={100}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        height={30}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        style={{ fontSize: "0.8rem" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar dataKey="data" name="Steps" fill="#32d29b" />
                    </BarChart>
                  </div>
                </div>
              </td>

              <td>
                <div
                  className="option noselect"
                  id="distance"
                  onClick={() => {
                    window.location.href = "/distance";
                  }}
                >
                  <div>
                    <div className="cardHeading">
                      <img
                        src={require("../assets/static/distance.png")}
                        alt=""
                      />
                      <p>Distance</p>
                    </div>
                    <div className="cardStats">
                      <p className="cardData">
                        {/* {createGraphData("distance")[6].data} km */}
                      </p>
                      <p className="cardDataDay">Today</p>
                    </div>
                  </div>
                  <div className="cardGraph">
                    <BarChart
                      // data={createGraphData("distance")}
                      barSize={10}
                      width={200}
                      height={100}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        height={30}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        style={{ fontSize: "0.8rem" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar dataKey="data" name="Distance" fill="#32d29b" />
                    </BarChart>
                  </div>
                </div>
              </td>

              <td>
                <div
                  className="option noselect"
                  id="speed"
                  onClick={() => {
                    window.location.href = "/speed";
                  }}
                >
                  <div>
                    <div className="cardHeading">
                      <img src={require("../assets/static/speed.png")} alt="" />
                      <p>Speed</p>
                    </div>
                    <div className="cardStats">
                      <p className="cardData">
                        {/* {createGraphData("speed")[6].data} km/hr */}
                      </p>
                      <p className="cardDataDay">Today</p>
                    </div>
                  </div>
                  <div className="cardGraph">
                    <BarChart
                      // data={createGraphData("speed")}
                      barSize={10}
                      width={200}
                      height={100}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        height={30}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        style={{ fontSize: "0.8rem" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar dataKey="data" name="Speed" fill="#32d29b" />
                    </BarChart>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div
                  className="option noselect"
                  id="activeMinutes"
                  onClick={() => {
                    window.location.href = "/active-minutes";
                  }}
                >
                  <div>
                    <div className="cardHeading">
                      <img
                        src={require("../assets/static/active-minutes.png")}
                        alt=""
                      />
                      <p>
                        Active
                        <br />
                        Minutes
                      </p>
                    </div>
                    <div className="cardStats">
                      <p className="cardData">
                        {/* {createGraphData("activeMinutes")[6].data} min */}
                      </p>
                      <p className="cardDataDay">Today</p>
                    </div>
                  </div>
                  <div className="cardGraph">
                    <BarChart
                      // data={createGraphData("activeMinutes")}
                      barSize={10}
                      width={200}
                      height={100}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        height={30}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        style={{ fontSize: "0.8rem" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar
                        dataKey="data"
                        name="Active Minutes"
                        fill="#32d29b"
                      />
                    </BarChart>
                  </div>
                </div>
              </td>

              <td>
                <div
                  className="option noselect"
                  id="caloriesExpended"
                  onClick={() => {
                    window.location.href = "/calories-expended";
                  }}
                >
                  <div>
                    <div className="cardHeading">
                      <img
                        src={require("../assets/static/calories.png")}
                        alt=""
                      />
                      <p>
                        Calories
                        <br />
                        Expended
                      </p>
                    </div>
                    <div className="cardStats">
                      <p className="cardData">
                        {/* {createGraphData("caloriesExpended")[6].data} cal */}
                      </p>
                      <p className="cardDataDay">Today</p>
                    </div>
                  </div>
                  <div className="cardGraph">
                    <BarChart
                      // data={createGraphData("caloriesExpended")}
                      barSize={10}
                      width={200}
                      height={100}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        height={30}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        style={{ fontSize: "0.8rem" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar
                        dataKey="data"
                        name="Calories Expended"
                        fill="#32d29b"
                      />
                    </BarChart>
                  </div>
                </div>
              </td>

              <td>
                <div
                  className="option noselect"
                  id="heartRate"
                  onClick={() => {
                    window.location.href = "/heart-rate";
                  }}
                >
                  <div>
                    <div className="cardHeading">
                      <img
                        src={require("../assets/static/heart-rate.png")}
                        alt=""
                      />
                      <p>
                        Heart
                        <br />
                        Rate
                      </p>
                    </div>
                    <div className="cardStats">
                      <p className="cardData">
                        {/* {createGraphData("heartRate")[6].data} bpm */}
                      </p>
                      <p className="cardDataDay">Today</p>
                    </div>
                  </div>
                  <div className="cardGraph">
                    <BarChart
                      // data={createGraphData("heartRate")}
                      barSize={10}
                      width={200}
                      height={100}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        height={30}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        style={{ fontSize: "0.8rem" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar dataKey="data" name="Heart Rate" fill="#32d29b" />
                    </BarChart>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <div
                  className="option noselect"
                  id="heartPoints"
                  onClick={() => {
                    window.location.href = "/heart-points";
                  }}
                >
                  <div>
                    <div className="cardHeading">
                      <img
                        src={require("../assets/static/heart-points.png")}
                        alt=""
                      />
                      <p>
                        Heart
                        <br />
                        Points
                      </p>
                    </div>
                    <div className="cardStats">
                      <p className="cardData">
                        {/* {createGraphData("heartPoints")[6].data} pts */}
                      </p>
                      <p className="cardDataDay">Today</p>
                    </div>
                  </div>
                  <div className="cardGraph">
                    <BarChart
                      // data={createGraphData("heartPoints")}
                      barSize={10}
                      width={200}
                      height={100}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        height={30}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        style={{ fontSize: "0.8rem" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar dataKey="data" name="Heart Points" fill="#32d29b" />
                    </BarChart>
                  </div>
                </div>
              </td>
              {/* <td>
                <div
                  className="option noselect"
                  id="sleepDuration"
                  onClick={() => {
                    window.location.href = "/sleep-duration";
                  }}
                >
                  <div>
                    <div className="cardHeading">
                      <img src={require("../assets/static/sleep.png")} alt="" />
                      <p>
                        Sleep
                        <br />
                        Duration
                      </p>
                    </div>
                    <div className="cardStats">
                      <p className="cardData">
                        {createGraphData("sleepDuration")[6].data} min
                      </p>
                      <p className="cardDataDay">Today</p>
                    </div>
                  </div>
                  <div className="cardGraph">
                    <BarChart
                      data={createGraphData("sleepDuration")}
                      barSize={10}
                      width={200}
                      height={100}
                    >
                      <XAxis
                        dataKey="name"
                        scale="point"
                        height={30}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        style={{ fontSize: "0.8rem" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <Bar
                        dataKey="data"
                        name="Sleep Duration"
                        fill="#32d29b"
                      />
                    </BarChart>
                  </div>
                </div>
              </td> */}
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";
import GeneralChart from "./general.components.jsx";
//import Button from "react-bootstrap/Button";
import MyNavbar from "../prefabs/Navbar.prefabs.jsx";

export default function Home() {
  return (
    <div>
      <MyNavbar />
      <h1>Home</h1>
      <h6>
        IO ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
        incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h6>

      <GeneralChart
        params={{
          casetype: "Cases",
          country: "brazil",
          type: "line",
          label: "Chart of Coronavirus Cases in ",
          backgroundColor: "rgba(0, 195, 0, 0.5)",
          borderColor: "rgba(0, 195, 0,1)",
          pointRadius: 0,
          responsive: true,
          tooltips: {
            enabled: true,
            intersect: false,
          },
        }}
      />
      <GeneralChart
        params={{
          casetype: "Cases",
          country: "usa",
          type: "line",
          label: "Chart of Coronavirus Cases in ",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132,1)",
          pointRadius: 0,
          responsive: true,
          tooltips: {
            enabled: true,
            intersect: false,
          },
        }}
      />
      {/*
      <GeneralChart
        params={{
          casetype: "Death",
          country: "usa",
          type: "line",
          label: "Chart of Coronavirus death in ",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132,1)",
          pointRadius: 0,
          responsive: true,
          tooltips: {
            enabled: true,
            intersect: false,
          },
        }}
      />
      */}
    </div>
  );
}

import {
  React,
  Chart,
  Navbar,
  ColorStyle,
  TextStyle,
} from "../index.import.js";

export default function API() {
  return (
    <div>
      <Navbar />
      <h1 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite}`}>
        CoronAsylum
      </h1>
      <h6 className={TextStyle.txtcenter}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </h6>

      <Chart
        params={{
          status: "Confirmed",
          country: "brazil",
          type: "line",
          label: "Chart of Coronavirus Confirmed Cases in ",
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
      <Chart
        params={{
          status: "Confirmed",
          country: "italy",
          type: "line",
          label: "Chart of Coronavirus Confirmed Cases in ",
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

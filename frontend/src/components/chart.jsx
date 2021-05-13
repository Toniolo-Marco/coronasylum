import React, { createRef, useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import { downloadData } from "../utils/statistics.utils";
import {
  datetoShortDate,
  monthtoString,
  stringtoDate,
} from "../utils/string.manipulation";
export default function MyChart() {
  const ref = createRef();

  useEffect(() => {
    var ctx = ref.current.getContext("2d");
    downloadData().then((res) => {
      const data = res;
      console.log(data.xsdates);
      //setData(localData)
      new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: data.xs,
          datasets: [
            {
              label: "Chart of Coronavirus Cases",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              borderColor: "rgba(255, 99, 132,1)",
              pointRadius: 0,
              data: data.ys,
            },
          ],
        },
        options: {
          tooltips: {
            enabled: true,
            intersect: false,
            callbacks: {
              title: function (tooltipItems) {
                //Return value for title
                return datetoShortDate(tooltipItems[0].xLabel);
              },
              label: function (tooltipItems) {
                //Return value for label
                return "Cases: " + tooltipItems.yLabel;
              },
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  callback: function (value, index, values) {
                    return (
                      monthtoString(value.getMonth()) +
                      " " +
                      value.getFullYear()
                    );
                  },
                },
              },
            ],
          },
        },
      });
    });
  }, []);
  return (
    <canvas id="customizeChart" width="200" height="100" ref={ref}></canvas>
  );
}

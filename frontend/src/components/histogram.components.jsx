import Chart from "chart.js";
import { React, useEffect } from "../index.import";

//https://api.covid19api.com/live/country/south-africa

export default function GeneralHistogram({ data, params, ...rest }) {
  const ref = React.createRef(null);
  useEffect(() => {
    let canvas = ref.current;
    canvas &&
      canvas.getContext &&
      new Chart(canvas.getContext("2d"), {
        // The type of chart we want to create
        type: params.type,

        // The data for our dataset
        data: {
          labels: params.label,
          datasets: [
            {
              label: params.title,
              data: data
                .filter((_, i, arr) => i >= arr.length - 2)
                .map((e, i, arr) => {
                  const deaths = arr[1].Deaths - arr[0].Deaths;
                  const confirmed = arr[1].Confirmed - arr[0].Confirmed;
                  const recovered = arr[1].Recovered - arr[0].Recovered;
                  return [confirmed, recovered, deaths];
                })[0],

              backgroundColor: params.backgroundColor,
              borderColor: params.borderColor,
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          responsive: params.responsive,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    return <div></div>;
  }, [data, ref.current]);
  return <canvas id="customizeChart" ref={ref}></canvas>;
}

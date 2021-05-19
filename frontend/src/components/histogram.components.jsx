import Chart from "chart.js";
import {
  React,
  useEffect,
  createRef,
  apiDateToMonth,
  apiDateToString,
  useRef,
} from "../index.import";

//https://api.covid19api.com/live/country/south-africa

export default function GeneralHistogram({ data, params, ...rest }) {
  const ref = useRef(null);
  let canvas = ref.current;

  data.Active = data
    .filter(
      (e) => apiDateToString(e.Date) === apiDateToString(params.whichData)
    )
    .map((e) => e.Active);

  data.Recovered = data
    .filter(
      (e) => apiDateToString(e.Date) === apiDateToString(params.whichData)
    )
    .map((e) => e.Recovered);

  data.Deaths = data
    .filter(
      (e) => apiDateToString(e.Date) === apiDateToString(params.whichData)
    )
    .map((e) => e.Deaths);

  useEffect(() => {
    canvas &&
      new Chart(canvas.getContext("2d"), {
        // The type of chart we want to create
        type: params.type,

        // The data for our dataset
        data: {
          labels: params.label,
          datasets: [
            {
              label: params.title,
              data: [data.Active, data.Recovered, data.Deaths],
              backgroundColor: params.backgroundColor,
              borderColor: params.borderColor,
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: params.responsive,

          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
  }, [data, canvas]);
  return <canvas id="customizeChart" ref={ref}></canvas>;
}

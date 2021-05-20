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
  //console.log(data.map((e) => apiDateToString(e.Date)));
  console.log(apiDateToString(params.whichDate));
  console.log(data.map((e) => apiDateToString(e.Date)));
  console.log(
    data
      .filter(
        (e) => apiDateToString(e.Date) == apiDateToString(params.whichDate)
      )
      .map((e) => [e.Active, e.Recovered, e.Deaths])
  );
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
              data: data
                .filter(
                  (e) =>
                    apiDateToString(e.Date) == apiDateToString(params.whichDate)
                )
                .map((e) => [e.Active, e.Recovered, e.Deaths])[0],

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

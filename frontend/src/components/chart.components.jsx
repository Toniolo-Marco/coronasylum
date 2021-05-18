import Chart from "chart.js";
import {
  React,
  useEffect,
  createRef,
  downloadData,
  TextStyle,
  apiDateToMonth,
} from "../index.import";
/**
 * returns a component from given paramiters `param0`
 * @param {*} listofparams
 * @returns {any}
 */
export default function GeneralChart({ data, params, ...rest }) {
  const ref = createRef();

  useEffect(() => {
    var ctx = ref.current.getContext("2d");

    new Chart(ctx, {
      // The type of chart we want to create
      type: params.type,

      // The data for our dataset
      data: {
        labels: "linea 28",
        datasets: [
          {
            label: params.label,
            backgroundColor: params.backgroundColor,
            borderColor: params.borderColor,
            pointRadius: params.pointRadius,
            //qui dovreo chiamare data."status", il valore di status lo ho in query.status, come faccio senza if?
            data: params.status,
          },
        ],
      },
      options: {
        responsive: params.responsive,
        tooltips: {
          enabled: params.tooltips.enabled,
          intersect: params.tooltips.intersect,
          callbacks: {
            title: function (tooltipItems) {
              //Return value for title
              return "titolo tooltip";
            },
            label: function (tooltipItems) {
              //Return value for label
              return "label tooltip";
            },
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                callback: () => apiDateToMonth(data),
              },
            },
          ],
        },
      },
    });
  }, []);
  return <canvas id="customizeChart" ref={ref}></canvas>;
}

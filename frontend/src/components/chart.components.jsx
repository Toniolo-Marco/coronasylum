import Chart from "chart.js";
import {
  React,
  useEffect,
  useRef,
  apiDateToMonth,
  apiDateToString,
} from "../index.import";

/**
 * returns a component from given paramiters `param0`
 * @param {*} listofparams
 * @returns {any}
 */
export default function GeneralChart({ data, params, ...rest }) {
  const ref = useRef(null);
  let canvas = ref.current;

  useEffect(() => {
    canvas &&
      new Chart(canvas.getContext("2d"), {
        // The type of chart we want to create
        type: params.type,

        // The data for our dataset
        data: {
          labels: data.map((e) => e.Date),
          datasets: [
            {
              label: params.label,
              backgroundColor: params.backgroundColor,
              borderColor: params.borderColor,
              pointRadius: params.pointRadius,
              //qui dovreo chiamare data."status", il valore di status lo ho in query.status, come faccio senza if?
              data: data.map((e) => e[params.status]),
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
                return apiDateToString(tooltipItems.value);
              },
              label: function (tooltipItems) {
                //Return value for label
                return tooltipItems.value;
              },
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  callback: function (value, index, values) {
                    return apiDateToMonth(value);
                  },
                },
              },
            ],
          },
        },
      });
  }, [data, canvas]);
  return <canvas id="customizeChart" ref={ref}></canvas>;
}

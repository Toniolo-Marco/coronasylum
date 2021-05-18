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
export default function GeneralChart({ params, ...rest }) {
  const ref = createRef();

  useEffect(() => {
    var ctx = ref.current.getContext("2d");
    downloadData(params).then((res) => {
      const data = res;

      console.log(data);
      // console.log("data.xsdates");
      // console.log(data.xsdates);

      //setData(localData)
      new Chart(ctx, {
        // The type of chart we want to create
        type: params.type,

        // The data for our dataset
        data: {
          labels: dateToMonth(data),
          datasets: [
            {
              label: params.label,
              backgroundColor: params.backgroundColor,
              borderColor: params.borderColor,
              pointRadius: params.pointRadius,
              //qui dovreo chiamare data."status", il valore di status lo ho in query.status, come faccio senza if?
              data: data.Confirmed,
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
                return;
              },
              label: function (tooltipItems) {
                //Return value for label
                return;
              },
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  callback: (data) => apiDateToMonth(data),
                },
              },
            ],
          },
        },
      });
    });
  }, []);
  return <canvas id="customizeChart" ref={ref}></canvas>;
}

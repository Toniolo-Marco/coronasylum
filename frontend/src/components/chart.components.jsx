import Chart from "chart.js";
import { React, useEffect, createRef, downloadData, TextStyle, monthtoString, datetoShortDate, stringtoDate} from "../index.import";
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
      /*
      console.log("data.xsdates");
      console.log(data.xsdates);
      */
      //setData(localData)
      new Chart(ctx, {
        // The type of chart we want to create
        type: params.type,

        // The data for our dataset
        data: {
          labels: data.xs,
          datasets: [
            {
              label: params.label + params.country,
              backgroundColor: params.backgroundColor,
              borderColor: params.borderColor,
              pointRadius: params.pointRadius,
              data: data.ys,
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
                return datetoShortDate(tooltipItems[0].xLabel);
              },
              label: function (tooltipItems) {
                //Return value for label
                return params.status + ": " + tooltipItems.yLabel;
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

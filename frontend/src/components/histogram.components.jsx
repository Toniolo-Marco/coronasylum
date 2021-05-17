import Chart from "chart.js";
import {
  React,
  useEffect,
  createRef,
  downloadData,
  TextStyle,
  monthtoString,
  datetoShortDate,
  stringtoDate,
} from "../index.import";

//https://api.covid19api.com/live/country/south-africa

export default function GeneralHistogram({ params, ...rest }) {
  const ref = createRef();

  // useEffect(() => {
  //     var ctx = ref.current.getContext("2d");

  //     downloadData(params).then((res) => {
  //         const data = res;
  //         new Chart(ctx, {
  //             // The type of chart we want to create
  //             type: params.type,

  //             // The data for our dataset
  //             data: {
  //               labels: params.label,
  //               datasets: [
  //                 {
  //                   label: params.title,
  //                   data: data.bars,
  //                   backgroundColor: params.backgroundColor,
  //                   borderColor: params.borderColor,
  //                   borderWidth: 1,
  //                 },
  //               ],
  //             },
  //             options: {
  //               responsive: params.responsive,
  //               tooltips: {
  //                 enabled: params.tooltips.enabled,
  //                 intersect: params.tooltips.intersect,
  //                 callbacks: {
  //                   title: function (tooltipItems) {
  //                     //Return value for title
  //                     return datetoShortDate(tooltipItems[0].xLabel);
  //                   },
  //                   label: function (tooltipItems) {
  //                     //Return value for label
  //                     return params.status + ": " + tooltipItems.yLabel;
  //                   },
  //                 },
  //               },
  //               scales: {
  //                 y: {
  //                     beginAtZero: true
  //                 }
  //               },
  //             },
  //           });
  //         });
  //       }, []);
  return <canvas id="customizeChart" ref={ref}></canvas>;
}

import ApexCharts from "apexcharts";

import allValues from "./allValues.json";
import filteredValues from "./filteredValues.json";

const series1 = allValues.map((value) => [value.time, value.pressure]);
const series2 = filteredValues.map((value) => [value.time, value.pressure]);

var options = {
  series: [
    {
      name: "Data 1",
      data: series1,
    },
    {
      name: "Data 2",
      data: series2,
    },
  ],
  chart: {
    type: "area",
    stacked: false,
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: false,
    },
    toolbar: {
      autoSelected: "zoom",
    },
  },
  dataLabels: {
    enabled: true,
  },
  markers: {
    size: 1,
  },
  title: {
    text: "Mapa pressão-tempo",
    align: "left",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  stroke: {
    width: [3, 2],
    dashArray: [0, 5],
    curve: "straight",
  },
  yaxis: {
    title: {
      text: "Pressão",
    },
  },
  xaxis: {
    type: "numeric",
    text: "Tempo",
    tickPlacement: "on",
    tickAmount: 50,
    labels: {
      showDuplicates: false,
      formatter: function (val: number) {
        return val.toFixed(0);
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

export {};

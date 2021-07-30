import React from "react";
import Chart from "react-apexcharts";
import "./chart.css";

const ChartBar = () => {
  const data = {
    series: [
      {
        name: "Expenses",
        data: [
          "5000",
          "8000",
          "6000",
          "2000",
          "8000",
          "6000",
          "5000",
          "6000",
          "5000",
          "6000",
          "5000",
          "8000",
        ],
      },
    ],
    options: {
      chart: {
        height: 250,
        type: "bar",
        // background: "#f4f4f4",
        foreColor: "#333"
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },
      },
      title: {
        text: "Income Expense",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };
  return (
    <div className="chart">
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default ChartBar;

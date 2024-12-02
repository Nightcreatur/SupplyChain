import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler,
} from "chart.js";
import Button from "../Buttons/Button";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import ThreeDots from "../../assets/icons/ThreeDots";
import UpwardArrowIcon from "../../assets/icons/UpwardArrowIcon";
import { useEffect, useRef, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler
);

const LineChart = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.canvas.getContext("2d");
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFill.addColorStop(0, "rgba(17, 73, 255, 1)"); // Solid blue at the top
      gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)"); // Transparent at the bottom
      setGradient(gradientFill);
    }
  }, [chartRef]);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Units Sold",
        data: [0, 150, 300, 250, 600, 500, 450, 516, 650, 750, 1000, 900],
        backgroundColor: gradient,
        borderColor: "#003dff",
        pointBorderWidth: 2,
        pointBackgroundColor: function (context) {
          const index = context.dataIndex;
          if ([4, 7, 10].includes(index)) {
            return "#003dff"; // Blue inner color
          }
          return "rgba(0, 0, 0, 0)"; // Transparent for others
        },
        pointBorderColor: function (context) {
          const index = context.dataIndex;
          if ([4, 7, 10].includes(index)) {
            return "#ffffff"; // White border color
          }
          return "rgba(0, 0, 0, 0)"; // Transparent for others
        },
        fill: true,
        borderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#3F83F8",
        tension: 0.4,
        pointRadius: function (context) {
          return (
            [4, null, null, null, 4, null, null, 4, null, null, 4, null][
              context.dataIndex
            ] || 0
          );
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        mode: "nearest",
        intersect: false,
        external: function (context) {
          const { chart, tooltip } = context;
          const ctx = chart.ctx;

          if (tooltip.opacity === 0) {
            chart.update();
            return;
          }

          const x = tooltip.caretX;
          const topY = chart.scales.y.top;
          const bottomY = chart.scales.y.bottom;

          const dataIndex = tooltip.dataPoints?.[0]?.dataIndex;

          if ([4, 7, 10].includes(dataIndex)) {
            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.stroke();
            ctx.restore();
          }
        },
      },
    },
    layout: {
      padding: {
        left: -3,
        right: 0,
        top: 20,
        bottom: 10,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: true,
          font: {
            size: 9,
            weight: 400,
          },
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        ticks: {
          display: true,
          font: {
            size: 9,
            weight: "normal",
          },
          beginAtZero: true,
          stepSize: 200,
          min: 0,
          max: 1000,
        },
        drawBorder: false,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex bg-[#f0f0f0] px-4 py-4 justify-between items-center">
        <h2 className="text-black text-lg font-medium">Sales Trend</h2>
        <div className="flex gap-2">
          <Button
            textColor="text-gray-300"
            bgColor="#f7f7f7"
            text="Monthly"
            size="12px"
            weight="600"
            icon={<DownArrowIcon />}
          />
          <button
            style={{ backgroundColor: "#f7f7f7" }}
            className="shadow-lg px-2 rounded-md"
          >
            <ThreeDots />
          </button>
        </div>
      </div>
      <div className="px-4 py-6">
        <p className="text-4xl font-semibold mb-2">9920 Units</p>
        <div className="flex items-center justify-between mb-4 max-w-xs">
          <p className="text-gray-500 text-xs">vs Last year</p>
          <p
            className="text-[10px] bg-[#dff3d2] rounded-xl px-2 text-[#87d259] font-medium flex items-center gap-2"
          >
            +9.3%
            <UpwardArrowIcon />
          </p>
        </div>
        <div className="w-full h-[190px]">
          <Line ref={chartRef} data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;

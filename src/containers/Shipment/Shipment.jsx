import { Line } from "react-chartjs-2";
import Button from "../../components/Buttons/Button";
import DashboardTabs from "../../components/Tabs/DashboardTab";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import ThreeDots from "../../assets/icons/ThreeDots";
import UpwardArrowIcon from "../../assets/icons/UpwardArrowIcon";
import UpwardCountryIcon from "../../assets/icons/UpwardCountryIcon";
import DownwardCountryIcon from "../../assets/icons/DownwardCountryIcon";
import Table from "../../components/Table/Table";
import AddShipmentModal from "./NewShipmentModal";
import { useState } from "react";

const Shipment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    { label: "Order Id", accessor: "orderId" },
    { label: "Category", accessor: "category" },
    { label: "Delivery Time", accessor: "deliveryTime" },
    { label: "Destination", accessor: "destination" },
    { label: "Fee", accessor: "fee" },
    { label: "Status", accessor: "status" },
  ];

  const shipmentData = [
    {
      orderId: "ABC2429Z",
      category: "Electronics",
      deliveryTime: "22/09/2024",
      destination: "USA",
      fee: "$1000",
      status: "Delivered",
    },
    {
      orderId: "ALX0007P",
      category: "Furniture",
      deliveryTime: "22/09/2024",
      destination: "Canada",
      fee: "$1290",
      status: "Pending",
    },
    {
      orderId: "ACW1239L",
      category: "Clothing",
      deliveryTime: "22/09/2024",
      destination: "Nepal",
      fee: "$2500",
      status: "Shipping",
    },
  ];
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Success Rate",
        data: [
          5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 63, 66, 69, 72, 75, 78,
          81, 84, 87, 90, 93, 95, 96, 97, 98, 99, 100, 100,
        ],
        borderColor: "#8bd35e",
        fill: false,
        borderWidth: 2,
      },
      {
        label: "Efficiency",
        data: [
          8, 12, 18, 24, 30, 36, 42, 48, 54, 58, 62, 66, 69, 71, 73, 75, 77, 79,
          81, 83, 85, 87, 89, 91, 92, 93, 94, 95, 96, 97,
        ],
        borderColor: "#26a5ff",
        fill: false,
        borderWidth: 2,
      },
      {
        label: "Delay Rate",
        data: [
          20, 19, 18, 18, 18, 17, 16, 15, 14, 14, 14, 13, 13, 13, 12, 12, 12,
          11, 11, 11, 10, 10, 10, 9, 9, 9, 9, 9, 8, 8,
        ],
        borderColor: "#ff0000",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 35,
          font: {
            size: 9,
            weight: "normal",
            color: "#969696",
          },
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return datasets.map((dataset, i) => ({
              text: dataset.label,
              fillStyle: dataset.borderColor, // Match legend box color with line color
              strokeStyle: dataset.borderColor,
              hidden: !chart.isDatasetVisible(i),
              lineCap: dataset.borderCapStyle,
              lineDash: dataset.borderDash,
              lineDashOffset: dataset.borderDashOffset,
              lineJoin: dataset.borderJoinStyle,
              pointStyle: 'rect', // Sets point style to rectangle
            }));
          },
        },
      },
    },
    layout: {
      padding: {
        left: -3,
        right: 10,
        top: 20,
        bottom: 10,
      },
    },
    scales: {
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
          beginAtZero: true,
          stepSize: 20,
          font: {
            size: 10,
            weight: 400,
          },
          min: 0,
          max: 100,
          callback: function (value) {
            return value + "%";
          },
        },
        drawBorder: false,
      },
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
          beginAtZero: true,
          font: {
            size: 10,
            weight: 400,
          },
          min: 0,
          max: 30,
          stepSize: 1,
          callback: function (value) {
            const validTicks = [1, 3, 5, 7, 10, 13, 15, 17, 20, 23, 25, 27, 30];
            return validTicks.includes(value) ? value : "";
          },
        },
        drawBorder: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0,
      },
    },
  };
  
  const topCountries = [
    { country: "Bharain", sales: "12.50k", trend: "up" },
    { country: "USA", sales: "9.25k", trend: "up" },
    { country: "India", sales: "8.92k", trend: "down" },
    { country: "Canada", sales: "8.92k", trend: "down" },
    { country: "France", sales: "7.20k", trend: "up" },
    { country: "Brazil", sales: "6.12k", trend: "down" },
  ];

  return (
    <div className="bg-body-color w-full h-screen flex flex-col ps-2 pe-6 py-4 mt-16">
      <div className="flex justify-between mb-6">
        <DashboardTabs />
        <div className="rightButtons flex items-center gap-2">
          <Button
            text="Week"
            bgColor="white"
            weight="500"
            textColor="gray"
            icon={<DownArrowIcon />}
          />
          <button
            className="bg-[#003DFF] text-white rounded-md shadow-lg px-4 py-2"
            onClick={() => setIsModalOpen(true)}
          >
            + New Shipment
          </button>{" "}
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="w-2/3 bg-white shadow-md rounded-lg">
          <div className="flex items-center justify-between mb-4 bg-[#f5f5f5] px-4 py-4">
            <h2 className="text-xl font-medium">Shipment Performance</h2>
            <div className="flex gap-2">
              <Button
                textColor="grey"
                bgColor="white"
                text="Monthly"
                size="12px"
                weight="600"
                icon={<DownArrowIcon />}
              />
              <button
                style={{ backgroundColor: "white" }}
                className="shadow-lg px-2 rounded-md"
              >
                <ThreeDots />
              </button>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-normal">93.2%</h3>
            </div>
            <div className="flex w-[11.3vw] items-center justify-between mb-4 mt-[-15px]">
              <p className="text-gray-500 text-xs">vs Last month</p>
              <p
                className={`text-[10px] ${"bg-[#dff3d2] rounded-xl px-2 text-[#87d259] font-medium flex items-center gap-2"}`}
              >
                {`+${+12.3}%`}
                {<UpwardArrowIcon />}
              </p>
            </div>
            <div className="h-[300px]">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>

        <div className="w-1/3 bg-white shadow-md rounded-lg p-3">
          <h2 className="text-xl font-medium mb-1">Top Countries by Sales</h2>
          <div className="flex flex-col">
            <div className="mb-4">
              <hr className="border-t border-gray-300" />
            </div>
          </div>
          <div className="px-2">
            <div className="text-3xl mb-4 flex justify-between">
              34.89k
              <p className="text-gray-500 text-xs mt-4">Since Last Week</p>
            </div>
            <ul>
              {topCountries.map((country, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 my-4 last:border-none"
                >
                  <span className="flex items-center">
                    <img
                      src={`https://flagcdn.com/w20/${country.country
                        .toLowerCase()
                        .slice(0, 2)}.png`}
                      alt={country.country}
                      className="mr-2 rounded-full w-6 h-6"
                    />
                    {country.country}
                  </span>
                  <span
                    className={`ml-2 ${
                      country.trend === "up" ? (
                        <UpwardCountryIcon />
                      ) : (
                        <DownwardCountryIcon />
                      )
                    }`}
                  >
                    {country.trend === "up" ? (
                      <UpwardCountryIcon />
                    ) : (
                      <DownwardCountryIcon />
                    )}
                  </span>
                  <span className="flex items-center text-sm">
                    {country.sales}
                    <span
                      className={`ml-2 ${
                        country.trend === "up"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    ></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[50px]">
        <Table
          columns={columns}
          data={shipmentData}
          title="Shipment Tracking"
        />
      </div>{" "}
      <AddShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Shipment;

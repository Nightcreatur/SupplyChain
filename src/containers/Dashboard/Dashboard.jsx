import { useState } from "react";
import Button from "../../components/Buttons/Button";
import DashboardCard from "../../components/Cards/DashboardCards";
import DashboardTabs from "../../components/Tabs/DashboardTab";
import ShippingIcon from "../../assets/icons/ShippingIcon";
import PackageIcon from "../../assets/icons/PackageIcon";
import PaymentIcon from "../../assets/icons/PaymentIcon";
import CheckCircle from "../../assets/icons/CheckCiricle";
import LineChart from "../../components/Charts/LineChart";
import BarChartGraph from "../../components/Charts/BarChart";
import Table from "../../components/Table/Table";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import AddShipmentModal from "../Shipment/NewShipmentModal";

const Dashboard = () => {
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
    {
      orderId: "TRX1129P",
      category: "Auto Parts",
      deliveryTime: "22/09/2024",
      destination: "China",
      fee: "$3200",
      status: "Pending",
    },
    {
      orderId: "LLP9920Z",
      category: "Walmart Supply",
      deliveryTime: "22/09/2024",
      destination: "India",
      fee: "$1990",
      status: "Delivered",
    },
    {
      orderId: "TCA1192R",
      category: "Shoes",
      deliveryTime: "22/09/2024",
      destination: "France",
      fee: "$2725",
      status: "Shipping",
    },
    {
      orderId: "ACW1239L",
      category: "Electronics",
      deliveryTime: "22/09/2024",
      destination: "Korea",
      fee: "$8920",
      status: "Delivered",
    },
  ];

  return (
    <div className="bg-body-color w-full h-screen flex flex-col p-4 lg:p-6 mt-20">
      <div className="flex flex-wrap justify-between items-center">
        <DashboardTabs />
        <div className="flex gap-2 mt-4 lg:mt-0">
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
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <DashboardCard
          title="Total Shipments"
          value="71.21"
          subtitle="vs Last week"
          trend={-3.2}
          icon={ShippingIcon}
        />
        <DashboardCard
          title="Total Orders"
          value="92"
          subtitle="vs Last week"
          trend={9.3}
          icon={PackageIcon}
        />
        <DashboardCard
          title="Revenue"
          value="$ 13.71K"
          subtitle="vs Last week"
          trend={-1.7}
          icon={PaymentIcon}
        />
        <DashboardCard
          title="Delivered"
          value="140"
          subtitle="vs Last week"
          trend={4.7}
          icon={CheckCircle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="w-full">
          <BarChartGraph />
        </div>
        <div className="w-full h-auto overflow-hidden">
          <LineChart />
        </div>
      </div>

      <div className="mt-6">
        <Table
          columns={columns}
          data={shipmentData}
          title="Shipment Tracking"
        />
      </div>

      <AddShipmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Dashboard;

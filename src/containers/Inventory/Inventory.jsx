import { useState } from "react";
import Button from "../../components/Buttons/Button";
import MetricCard from "../../components/Cards/MetricCard";
import StockAvailabilityChart from "../../components/Charts/StockAvailabilityChart";
import AddShipmentModal from "../Shipment/NewShipmentModal";

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inventoryData, setInventoryData] = useState([
    {
      id: "1",
      Product: "Nike Airforce 1",
      SKU: "LK-200192",
      "On-hand": 1290,
      "Units-to-Reorder": 2500,
      Cost: "$ 12,200",
      Action: "Add to Order",
    },
    {
      id: "2",
      Product: "MacBook Pro 14",
      SKU: "LK-119928",
      "On-hand": 90,
      "Units-to-Reorder": 200,
      Cost: "$ 122,200",
      Action: "Order Added",
    },
    {
      id: "3",
      Product: "Kitchen Supply",
      SKU: "LT-190283",
      "On-hand": 1900,
      "Units-to-Reorder": 2500,
      Cost: "$ 14,200",
      Action: "Add to Order",
    },
    {
      id: "4",
      Product: "Auto Parts",
      SKU: "LT-229102",
      "On-hand": 990,
      "Units-to-Reorder": 1550,
      Cost: "$ 20,000",
      Action: "Add to Order",
    },
    {
      id: "5",
      Product: "Walmart Supply",
      SKU: "LT-009218",
      "On-hand": 880,
      "Units-to-Reorder": 9050,
      Cost: "$ 12,000",
      Action: "Order Added",
    },
    {
      id: "6",
      Product: "Shoes",
      SKU: "LT-119203",
      "On-hand": 1110,
      "Units-to-Reorder": 2250,
      Cost: "$ 12,200",
      Action: "Add to Order",
    },
  ]);

  const columns = [
    { label: "Product", accessor: "Product" },
    { label: "SKU", accessor: "SKU" },
    { label: "On Hand", accessor: "On-hand" },
    { label: "Units to Reorder", accessor: "Units-to-Reorder" },
    { label: "Cost", accessor: "Cost" },
    { label: "Action", accessor: "Action" },
  ];

  const handleStatusChange = (id) => {
    setInventoryData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, Action: item.Action === "Add to Order" ? "Order Added" : "Add to Order" }
          : item
      )
    );
  };

  return (
    <div className="bg-body-color w-full min-h-screen flex flex-col px-4 py-4 mt-16">
      <div className="flex flex-wrap justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <Button text="Week" bgColor="white" textColor="text-gray-700" />
          <button
            className="bg-[#003DFF] text-white rounded-md shadow-lg px-4 py-2"
            onClick={() => setIsModalOpen(true)}
          >
            + New Shipment
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 col-span-2 md:col-span-2 lg:col-span-3">
            <MetricCard title="Total Inventory" value="$ 520,000" />
            <MetricCard title="Units on Hand" value="1,200" />
            <MetricCard title="Units on Order" value="3,000" />
            <MetricCard title="Units to Reorder" value="500" />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <StockAvailabilityChart />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr>
              {columns.map((col) => (
                <th key={col.accessor} className="py-3 px-4 text-left border-b text-xs sm:text-sm">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-xs sm:text-sm">{item.Product}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{item.SKU}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{item["On-hand"]}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{item["Units-to-Reorder"]}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{item.Cost}</td>
                <td className="py-3 px-4">
                  <span
                    onClick={() => handleStatusChange(item.id)}
                    className={`cursor-pointer inline-block px-3 py-1 rounded-sm text-xs font-medium text-center ${
                      item.Action === "Add to Order"
                        ? "bg-[#BDBDBD] text-white"
                        : "bg-[#5EC320] text-white"
                    }`}
                  >
                    {item.Action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Shipment Modal */}
      <AddShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Inventory;

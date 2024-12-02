import { useState } from "react";
import FilterIcon from "../../assets/icons/FilterIcon";
import ThreeDots from "../../assets/icons/ThreeDots";

const orders = [
  {
    id: "ABC2429Z",
    category: "Electronics",
    deliveryTime: "22/09/2024",
    destination: "USA",
    fee: "$1000",
    status: "Delivered",
  },
  {
    id: "ALX0007P",
    category: "Furniture",
    deliveryTime: "22/09/2024",
    destination: "Canada",
    fee: "$1290",
    status: "Pending",
  },
  {
    id: "ACW1239L",
    category: "Clothing",
    deliveryTime: "22/09/2024",
    destination: "Nepal",
    fee: "$2500",
    status: "Shipping",
  },
  {
    id: "TRX1129P",
    category: "Auto Parts",
    deliveryTime: "22/09/2024",
    destination: "China",
    fee: "$3200",
    status: "Pending",
  },
  {
    id: "LLP9920Z",
    category: "Walmart Supply",
    deliveryTime: "22/09/2024",
    destination: "India",
    fee: "$1990",
    status: "Delivered",
  },
  {
    id: "TCA1192R",
    category: "Shoes",
    deliveryTime: "22/09/2024",
    destination: "France",
    fee: "$2725",
    status: "Shipping",
  },
  {
    id: "ACW1239L",
    category: "Electronics",
    deliveryTime: "22/09/2024",
    destination: "Korea",
    fee: "$8920",
    status: "Delivered",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-table-green text-txt-green";
    case "Pending":
      return "bg-yellow-100 text-txt-yellow";
    case "Shipping":
      return "bg-table-blue text-txt-blue";
    default:
      return "";
  }
};

const OrdersTable = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [tableData, setTableData] = useState(orders); // State to handle table data updates

  // Handle row checkbox change
  const handleRowSelect = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  // Handle "select all" checkbox change
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((order) => order.id));
    }
    setSelectAll(!selectAll);
  };

  // Determine if a row is selected
  const isRowSelected = (orderId) => selectedOrders.includes(orderId);

  // Handle status click to change the value
  const handleStatusClick = (orderId) => {
    const updatedData = [...tableData];
    const orderIndex = updatedData.findIndex((order) => order.id === orderId);
    const currentStatus = updatedData[orderIndex].status;

    if (currentStatus === "Delivered") {
      updatedData[orderIndex].status = "Pending";
    } else if (currentStatus === "Pending") {
      updatedData[orderIndex].status = "Shipping";
    } else if (currentStatus === "Shipping") {
      updatedData[orderIndex].status = "Delivered";
    }

    setTableData(updatedData); // Update the table data with the new status
  };

  return (
    <div className="p-4">
      <div className="space-x-4 text-gray-600 mt-2 ml-1">
        <button className="text-blue border-b border-blue font-semibold">
          All
        </button>
        <button>Unfulfilled</button>
        <button>Unpaid</button>
        <button>In Transit</button>
        <button>Completed</button>
        <button>Cancelled</button>
      </div>
      <div className="mb-4 ml-1">
        <hr className="border-t border-gray-300" />
      </div>
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-between border-b p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Order..."
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 15L21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="buttons flex gap-2">
            <button className="bg-gray rounded-md shadow-lg px-4 py-2 flex items-center">
              <FilterIcon />
              <span className="ms-2 font-normal">Filter</span>
            </button>
            <button className="bg-gray rounded-md shadow-lg px-2 py-2 flex items-center">
              <ThreeDots />
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <table className="min-w-full bg-white">
          <thead className="border-gray-300">
            <tr>
              <th className="py-3 px-4 text-left">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="rounded-sm"
                />
              </th>
              <th className="py-3 px-4 text-left">Order Id</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Delivery Time</th>
              <th className="py-3 px-4 text-left">Destination</th>
              <th className="py-3 px-4 text-left">Fee</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((order) => (
              <tr
                key={order.id}
                className={`border-b hover:bg-gray-50 ${isRowSelected(order.id) ? "bg-gray-200" : ""}`}
              >
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={isRowSelected(order.id)}
                    onChange={() => handleRowSelect(order.id)}
                    className="rounded-sm"
                  />
                </td>
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.category}</td>
                <td className="py-3 px-4">{order.deliveryTime}</td>
                <td className="py-3 px-4">{order.destination}</td>
                <td className="py-3 px-4">{order.fee}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-sm text-xs font-medium text-center ${getStatusStyle(
                      order.status
                    )} max-w-full truncate cursor-pointer`}
                    onClick={() => handleStatusClick(order.id)} 
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;

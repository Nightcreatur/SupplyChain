import { useState } from "react";
import DashboardCard from "../../components/Cards/DashboardCards";
import Cross from "../../assets/images/cross.png";
import CustomerImage from "../../assets/images/customer.png";
import FilterIcon from "../../assets/icons/FilterIcon";
import ThreeDots from "../../assets/icons/ThreeDots";
import ExportIcon from "../../assets/icons/ExportIcon";

const Customer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = Array(10).fill({
    customerId: "CUS123456",
    name: "John Doe",
    customerType: "Wholesale",
    email: "johndoe21@gmail.com",
    contact: "+977-9129394567",
    address: "Kathmandu, Nepal",
  });

  const orderHistory = [
    {
      id: "ABC2429Z",
      order: "Electronics",
      date: "22/09/2024",
      payment: "Credit Card",
      fee: "$1000",
      status: "Shipping",
    },
    {
      id: "ALX0007P",
      order: "Furniture",
      date: "22/09/2024",
      payment: "Cheque",
      fee: "$1290",
      status: "Delivered",
    },
    {
      id: "TRX1129P",
      order: "Auto Parts",
      date: "22/09/2024",
      payment: "Bank Transfer",
      fee: "$3200",
      status: "Delivered",
    },
  ];

  const openPopup = (customer) => {
    setSelectedCustomer(customer);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsOrderHistoryOpen(false);
  };

  const openOrderHistory = () => {
    setIsPopupOpen(false);
    setIsOrderHistoryOpen(true);
  };

  const closeOrderHistory = () => {
    setIsOrderHistoryOpen(false);
    setIsPopupOpen(true); // Reopen the customer details popup
  };

  const handleOrderSelect = (orderId) => {
    setSelectedOrders(
      (prevSelected) =>
        prevSelected.includes(orderId)
          ? prevSelected.filter((id) => id !== orderId) // Deselect if already selected
          : [...prevSelected, orderId] // Select the order
    );
  };

  // Handle "Select All" checkbox click
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedOrders([]); // Deselect all
    } else {
      setSelectedOrders(orderHistory.map((order) => order.id)); // Select all
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="bg-body-color w-full h-screen flex flex-col ps-2 pe-6 py-4 mt-12">
      <div className="grid grid-cols-4 gap-4 mt-8">
        <DashboardCard
          title="Total Customers"
          value="239"
          subtitle="vs Last week"
          trend={+1.3}
        />
        <DashboardCard
          title="Customer Satisfaction"
          value="94%"
          subtitle="vs Last week"
          trend={+0.92}
        />
        <DashboardCard
          title="Average Retention"
          value="89%"
          subtitle="vs Last week"
          trend={-1.7}
        />
        <DashboardCard
          title="Open Support Ticket"
          value="12"
          subtitle="vs Last week"
          trend={-9.02}
        />
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Customer ID
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Customer Type
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Contact
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.customerId}
                </td>
                <td
                  className="px-6 py-4 border-b border-gray-200 cursor-pointer"
                  onClick={() => openPopup(row)}
                >
                  {row.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.customerType}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-blue-600">
                  <a href={`mailto:${row.email}`}>{row.email}</a>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.contact}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.address}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-1/3 p-6">
            <div className="flex bg-[#f5f5f5] pt-2 px-4 py-3 mt-[-24px] mx-[-24px] items-center rounded justify-between">
              <h2 className="text-xl font-bold">Customer Preview</h2>
              <button
                className="text-white rounded me-[-10px]"
                onClick={closePopup}
              >
                <img
                  src={Cross}
                  alt="cross"
                  className="rounded"
                  height={10}
                  width={45}
                />
              </button>
            </div>
            <div className="px-5 border border-gray-300 rounded-xl mt-8 mx-[-24px]">
              <div className="flex items-center justify-center gap-2 mt-4 mb-8">
                <img src={CustomerImage} alt="" />
                {selectedCustomer.name}
              </div>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Customer Id
                </strong>{" "}
                {selectedCustomer.customerId}
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Name
                </strong>{" "}
                {selectedCustomer.name}
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Customer Type
                </strong>{" "}
                {selectedCustomer.customerType}
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Email
                </strong>{" "}
                <a href={`mailto:${selectedCustomer.email}`}>
                  {selectedCustomer.email}
                </a>
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Contact
                </strong>{" "}
                {selectedCustomer.contact}
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Address
                </strong>{" "}
                {selectedCustomer.address}
              </p>
            </div>
            <div className="flex justify-center  items-center">
              <button
                className="mt-4 text-blue py-2 px-4 rounded underline"
                onClick={openOrderHistory}
              >
                View Customer Order History
              </button>
            </div>
          </div>
        </div>
      )}

      {isOrderHistoryOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[1017px]">
            <div className="flex justify-between items-center py-6 px-6">
              <h2 className="text-xl font-semibold mb-4">
                Order History for {selectedCustomer.name}
              </h2>
              <div className="buttons flex gap-2 mt-[-20px]">
                <button className="bg-gray rounded-md shadow-lg px-4 py-2 flex items-center">
                  <FilterIcon />
                  <span className="ms-2 font-normal">Filter</span>
                </button>
                <button className="bg-gray rounded-md shadow-lg px-4 py-2 flex items-center">
                  <ExportIcon />
                  <span className="ms-2 font-normal">Export</span>
                </button>
                <button className="bg-gray rounded-md shadow-lg px-2 py-2 flex items-center">
                  <ThreeDots />
                </button>
                <button onClick={closeOrderHistory}>
                  <img src={Cross} alt="" />
                </button>
              </div>
            </div>
            <table className="min-w-full border-collapse border border-gray-200 mb-8">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border-b">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="form-checkbox ms-[-10px]"
                    />
                  </th>
                  <th className="py-2 border-b ">Order ID</th>
                  <th className="py-2 border-b">Order</th>
                  <th className="py-2 border-b">Delivery Date</th>
                  <th className="py-2 border-b">Payment</th>
                  <th className="py-2 border-b">Delivery Fee</th>
                  <th className="py-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => {
                  const isSelected = selectedOrders.includes(order.id);
                  return (
                    <tr
                      key={order.id}
                      className={`hover:bg-gray-50 ${
                        isSelected ? "bg-gray-100" : ""
                      }`} // Change background color when selected
                    >
                      <td className="px-4 py-2 border-b">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleOrderSelect(order.id)}
                          className="form-checkbox"
                        />
                      </td>
                      <td className="px-4 py-2 border-b">{order.id}</td>
                      <td className="px-4 py-2 border-b">{order.order}</td>
                      <td className="px-4 py-2 border-b">{order.date}</td>
                      <td className="px-4 py-2 border-b">{order.payment}</td>
                      <td className="px-4 py-2 border-b">{order.fee}</td>
                      <td className="px-4 py-2 border-b">
                        <span
                          className={`px-2 py-1 rounded text-sm  ${
                            order.status === "Delivered"
                              ? "bg-table-green text-txt-green"
                              : "bg-table-blue text-txt-blue"
                          }`}
                        >
                         {order.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;

import { useState } from "react"; 
import ExportIcon from "../../assets/icons/ExportIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import ThreeDots from "../../assets/icons/ThreeDots";

/* eslint-disable react/prop-types */
const Table = ({ columns, data, title }) => {
  // State to manage the checkbox status (checked or unchecked)
  const [isChecked, setIsChecked] = useState(false); // Select-all checkbox state
  const [selectedRows, setSelectedRows] = useState(new Set()); // Track selected rows
  const [tableData, setTableData] = useState(data); // Data state to update on status change

  // Handle checkbox toggle (select/unselect all)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      // Select all rows
      const allRowIds = new Set(tableData.map((_, index) => index));
      setSelectedRows(allRowIds);
    } else {
      // Deselect all rows
      setSelectedRows(new Set());
    }
  };

  // Handle individual row checkbox click
  const handleRowCheckboxChange = (index) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(index)) {
      newSelectedRows.delete(index); 
    } else {
      newSelectedRows.add(index); 
    }
    setSelectedRows(newSelectedRows);
  };

  // Check if all rows are selected
  const isAllRowsSelected = selectedRows.size === tableData.length;

  // Handle status click to change the value
  const handleStatusClick = (index) => {
    const newData = [...tableData];
    const currentStatus = newData[index].status;

    if (currentStatus === "Delivered") {
      newData[index].status = "Pending";
    } else if (currentStatus === "Pending") {
      newData[index].status = "Shipping";
    } else if (currentStatus === "Shipping") {
      newData[index].status = "Delivered";
    }

    setTableData(newData); // Update the data with the new status
  };

  return (
    <div className="overflow-x-auto mt-4">
      <div className="pre-headings flex justify-between bg-white px-6 py-2">
        <h2 className="font-medium mt-2" style={{ fontSize: "1.2rem" }}>
          {title}
        </h2>
        <div className="buttons flex gap-2">
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
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
            {/* Select All checkbox */}
            <th className="py-3 px-6 text-left">
              <input
                type="checkbox"
                checked={isAllRowsSelected}
                onChange={handleCheckboxChange}
              />
            </th>

            {columns.map((column, index) => (
              <th key={index} className="py-3 px-6 text-left">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-gray-600 text-sm font-semibold">
          {tableData.map((item, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 hover:bg-gray-100 ${
                selectedRows.has(index) ? "bg-gray-200" : ""
              }`}
            >
              {/* Checkbox in each row */}
              <td className="py-3 px-6 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.has(index)}
                  onChange={() => handleRowCheckboxChange(index)}
                />
              </td>

              {/* Render other data cells */}
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-3 px-6 text-left">
                  {/* Conditionally style 'status' column */}
                  {column.accessor === "status" ? (
                    <span
                      className={`py-1 px-6 rounded-sm text-xs cursor-pointer ${ 
                        item[column.accessor] === "Delivered"
                          ? "bg-table-green text-txt-green"
                          : item[column.accessor] === "Pending"
                          ? "bg-table-yellow text-txt-yellow"
                          : item[column.accessor] === "Shipping"
                          ? "bg-table-blue text-txt-blue "
                          : "bg-gray-100 text-gray-600"
                      }`}
                      onClick={() => handleStatusClick(index)} 
                    >
                      {item[column.accessor]}
                    </span>
                  ) : (
                    item[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

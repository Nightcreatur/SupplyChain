const StockAvailabilityChart = () => (
  <div className="bg-white shadow p-4 rounded-lg h-full flex flex-col shadow-lg">
    <div className="flex justify-between items-center mt-[-16px] mx-[-16px] bg-gray-100 px-4 py-2">
      <h2 className="text-black  text-[18px] font-medium">
        Stock Availability
      </h2>
      <button
        className="px-1 py-1 bg-white text-black rounded flex items-center font-bold shadow-lg"
        style={{ letterSpacing: "0.1em" }}
      >
        <span className="mt-[-10px]">...</span>
      </button>
    </div>
    <div className="ps-2 pe-1">
      <div className="text-[28px] font-normal mt-4">2400</div>
      <p className="text-xs text-gray-500 mt-[-4px] mb-[10px]">Total Stock</p>
      <div className="flex items-center space-x-4">
        <div className="flex-1 bg-gray-200 h-6 relative overflow-hidden rounded">
          <div
            className="absolute left-0 h-full bg-[#26a5ff]"
            style={{ width: "70%" }}
          ></div>
          <div
            className="absolute left-[70%] h-full bg-[#ffa500]"
            style={{ width: "20%" }}
          ></div>
          <div
            className="absolute left-[90%] h-full bg-[#ff0000]"
            style={{ width: "10%" }}
          ></div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2 flex justify-between">
        <p className="flex items-center">
          <span className="w-3 h-3 bg-[#26a5ff] inline-block mr-2 rounded-sm"></span>{" "}
          Available
        </p>
        <p className="flex items-center me-4">
          <span className="w-3 h-3 bg-[#ffa500] inline-block mr-2 rounded-sm"></span>{" "}
          Low Stock
        </p>
        <p className="flex items-center me-16">
          <span className="w-3 h-3 bg-[#ff0000] inline-block mr-2 rounded-sm"></span>{" "}
          Out of Stock
        </p>
      </div>

      {/* Low Stock List */}
      <div className="mt-4 text-sm text-gray-600">
        <p className="text-gray-500 text-xs">Low Stock</p>
        <table className="text-black text-xs">
          <tbody>
            <tr>
              <td className="pe-10">
                <span className="w-1.5 h-4 bg-[#ffa500] inline-block mr-2"></span>{" "}
                MacBook Pro 14-inch
              </td>
              <td className="px-10">22</td>
              <td className="px-10">Apple Inc</td>
            </tr>
            <tr>
            <td className="pe-10">
                <span className="w-1.5 h-4 bg-[#ffa500] inline-block mr-2"></span>{" "}
                Dell Inspiron              </td>
              <td className="px-10">12</td>
              <td className="px-10">Dell Inc</td>
            </tr>
            <tr>
            <td className="pe-10">
                <span className="w-1.5 h-4 bg-[#ffa500] inline-block mr-2"></span>{" "}
                HP Spectre 360             </td>
              <td className="px-10">19</td>
              <td className="px-10">HP Inc</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default StockAvailabilityChart;

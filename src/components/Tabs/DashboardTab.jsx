import { useNavigate, useLocation } from "react-router-dom";

const OverviewTabs = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location (URL path)
  
  // Determine the active tab based on the current URL path
  const activeTab = location.pathname === "/shipment/tracking" ? "tracking" : "shipment";

  const handleTabClick = (tab) => {
    if (tab === "shipment") {
      navigate("/shipment"); // Navigate to the Shipment page
    } else if (tab === "tracking") {
      navigate("/shipment/tracking"); // Navigate to the Tracking page
    }
  };

  return (
    <div className="flex space-x-4 bg-[#f0f0f0] py-1 px-2 rounded-lg w-60">
      {/* Overview Tab */}
      <button
        className={`${
          activeTab === "shipment"
            ? "py-1 px-4 bg-white text-gray-700 font-medium rounded-lg shadow"
            : "py-1 px-4 text-gray-700 font-medium"
        }`}
        onClick={() => handleTabClick("shipment")}
      >
        Overview
      </button>

      {/* Tracking Tab */}
      <button
        className={`${
          activeTab === "tracking"
            ? "py-1 px-4 bg-white text-gray-700 font-medium rounded-lg shadow"
            : "py-1 px-4 text-gray-700 font-medium"
        }`}
        onClick={() => handleTabClick("tracking")}
      >
        Tracking
      </button>
    </div>
  );
};

export default OverviewTabs;


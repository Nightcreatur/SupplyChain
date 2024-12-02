import DashboardTabs from "../../components/Tabs/DashboardTab";
import Button from "../../components/Buttons/Button";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import CheckCiricle from "../../assets/icons/CheckCiricle";
import Map from "../../assets/images/Map.png";
import DottedArrowLine from "../../assets/icons/DottedArrowLine";
import Truck from "../../assets/images/truck.png";

import TrackingTimeline from "./TrackingStatus";
import AddShipmentModal from "./NewShipmentModal";
import { useState } from "react";

const ShipmentTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <TrackingTimeline />

      {/* Main Content */}
      <div className="flex space-x-6 mt-4">
        {/* Left Column */}
        <div className="flex flex-col space-y-6 w-1/2">
          {/* Shipper Details */}
          <div className="bg-white rounded-lg shadow-md px-6 pb-2">
            <h2 className="text-lg font-medium mb-4 mt-2">Shipper Details</h2>
            <div className="space-y-3">
              <p className="flex justify-between">
                <span className="font-normal text-gray-400 text-sm">
                  Shipment Code
                </span>{" "}
                <span className="text-sm">12345678</span>
              </p>
              <p className="flex justify-between">
                <span className="font-normal text-gray-400 text-sm">
                  Shipper Name
                </span>
                <span className="text-sm">Mike Johnson</span>
              </p>
              <p className="flex justify-between">
                <span className="font-normal text-gray-400 text-sm">
                  Phone Number
                </span>
                <span className="text-sm"> +122-1238437110</span>
              </p>
              <p className="flex justify-between">
                <span className="font-normal text-gray-400 text-sm">Email</span>{" "}
                <span className="text-sm"> mikej12@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium mb-4">Shipping Details</h2>
            <div className="flex items-center bg-green-100 text-green-700 p-3 rounded-md mb-4">
              <CheckCiricle />
              <span className="ms-1 font-normal text-sm">
                Estimated Order Delivery
              </span>
              <span className="font-normal text-sm ms-32">
                September 24th, 2024
              </span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <div className="grid">
                <span className="text-sm font-medium text-black">From</span>
                <span className="font-normal text-xs">Location</span>
              </div>
              <div className="mt-3 ms-8">
                <DottedArrowLine />
              </div>
              <div className="grid">
                <span className="text-sm font-medium text-black">To</span>
                <span className="font-normal text-xs">Location</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={Truck} alt="truck" className="mt-[-18vh]" />
              <div>
                <h3 className="font-semibold">Freighliner Cascadia</h3>
                <p className="text-sm text-gray-500 mb-4">Truck - 4F299LX2</p>
                <div className="mt-2 ms-[-3.5vw] space-y-2">
                  {/* In Transit */}
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col items-center">
                      <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                      <div className="h-5 border-l-2 border-red-500 mt-1 rounded"></div>
                    </div>
                    <div className="flex justify-between w-[30vw]">
                      <div className="grid font-normal text-sm text-black ms-4">
                        <span>In Transit</span>
                        <span className="text-xs text-gray-500">
                          Location of the transit
                        </span>
                      </div>
                      <div className="grid font-normal text-sm text-black ms-4">
                        <span>10 Sept, 2024</span>
                        <span className="text-xs text-gray-500">07:00 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col items-center">
                      <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                      <div className="h-5 border-l-2 border-dotted border-gray-500 mt-2"></div>
                    </div>
                    <div className="flex justify-between w-[30vw]">
                      <div className="grid font-normal text-sm text-black ms-4">
                        <span>Delivery</span>
                        <span className="text-xs text-gray-500">
                          Location of the Delivery starts.
                        </span>
                      </div>
                      <div className="grid font-normal text-sm text-black ms-4">
                        <span>10 Sept, 2024</span>
                        <span className="text-xs text-gray-500">07:00 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Delivered */}
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-500 w-3 h-3 rounded-full mt-[-20px]"></div>
                    </div>
                    <div className="flex justify-between w-[30vw]">
                      <div className="grid font-normal text-sm text-black ms-4">
                        <span>Order Delivered</span>
                        <span className="text-xs text-gray-500">
                          Location of the Delivery Address.
                        </span>
                      </div>
                      <div className="grid font-normal text-sm text-black">
                        <span className="font-bold">--- --- ---</span>
                        <span className="text-xs text-gray-500">-- : --</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map Overview */}
        <div className="w-1/2 bg-white px-6 rounded-lg shadow-md relative">
          <h2 className="text-lg font-medium mb-4 bg-[#f5f5f5] mx-[-24px] px-4 pt-2 pb-2">
            Map Overview
          </h2>
          <div className="absolute top-11 left-0 right-0 bottom-0 w-full bg-gray-200 rounded-lg">
            <img src={Map} alt="Map" />
          </div>
        </div>
      </div>
      <AddShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ShipmentTracker;

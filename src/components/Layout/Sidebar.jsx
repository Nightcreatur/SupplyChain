import NavLogo from "../../assets/images/Nav-mainlogo.svg";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import { NavLink } from "react-router-dom";
import ShipmentIcon from "../../assets/icons/ShipmentIcon";
import InventoryIcon from "../../assets/icons/InventoryIcon";
import OrdersIcon from "../../assets/icons/OrdersIcons";
import CustomersIcon from "../../assets/icons/CustomersIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";

const Sidebar = () => {
  return (
    <div className="bg-white-900 text-black h-screen p-6 space-y-5 w-[276px] sm:w-[64px] md:w-[276px] lg-w-[276px] fixed left-0 top-0 z-10">
      <div className="frame112">
        <img src={NavLogo} alt="Logo" className="w-[15vw] h-auto mb-20" />
        <nav className="space-y-2 w-[212px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
            }
          >
            <DashboardIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            {/* Hide text on small screens */}
            <span className="ml-5 font-normal text-sm hidden md:block">
              Dashboard
            </span>
          </NavLink>

          <NavLink
            to="/shipment"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
            }
          >
            <ShipmentIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm hidden md:block">
              Shipment
            </span>
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
            }
          >
            <InventoryIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm hidden md:block">
              Inventory
            </span>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
            }
          >
            <OrdersIcon className="w-6 h-6" style={{ fill: "currentColor" }} />
            <span className="ml-5 font-normal text-sm hidden md:block">
              Orders
            </span>
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
            }
          >
            <CustomersIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm hidden md:block">
              Customers
            </span>
          </NavLink>
          <div className="flex flex-col">
            <div className="mt-12">
              <hr className="border-t border-gray-300" />
            </div>
          </div>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
            }
          >
            <SupportIcon className="w-6 h-6" style={{ fill: "currentColor" }} />
            <span className="ml-5 font-normal text-sm hidden md:block">
              Help and Support
            </span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
            }
          >
            <SettingsIcon
              className="w-6 h-6"
              style={{ fill: "currentColor" }}
            />
            <span className="ml-5 font-normal text-sm hidden md:block">
              Settings
            </span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

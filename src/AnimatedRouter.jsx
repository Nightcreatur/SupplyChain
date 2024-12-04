import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./containers/Dashboard/Dashboard";
import Header from "./components/Layout/Header";
import Inventory from "./containers/Inventory/Inventory";
import Shipment from "./containers/Shipment/Shipment";
import Order from "./containers/Orders/Order";
import Customer from "./containers/Customers/Customer";
import ShipmentTracker from "./containers/Shipment/Tracking";
import NoPageAvailable from "./containers/PageNotFound";
import LoginForm from "./components/Auth/Login/LoginPanel";
import Stepper from "./components/Stepper";
import ForgetStepper from "./components/Auth/ForgetPassword/Stepper";
import ResetSuccess from "./components/Auth/ForgetPassword/ResetSuccess";
import { AnimatePresence } from "framer-motion";
import Successful from "./components/Auth/SignUp/Succesfull";

const AnimatedRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* Route for Login */}
                <Route path="/login" element={<LoginForm />} />
                <Route path="/forget/*" element={<ForgetStepper />} />
                <Route path="/signup/*" element={<Stepper />} /> {/* Updated */}
                <Route path="/resetSuccesful" element={<ResetSuccess />} />
                <Route path="/success" element={<Successful />} />

                {/* Default Route Redirect */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Routes with Layout */}
                <Route
                    path="/*"
                    element={
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 flex flex-col ml-[20vw]">
                                <Header />
                                <div className="content">
                                    <Routes>
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/inventory" element={<Inventory />} />
                                        <Route path="/shipment" element={<Shipment />} />
                                        <Route path="/orders" element={<Order />} />
                                        <Route path="/customers" element={<Customer />} />
                                        <Route path="/shipment/tracking" element={<ShipmentTracker />} />
                                        <Route path="/support" element={<NoPageAvailable />} />
                                        <Route path="/settings" element={<NoPageAvailable />} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRouter;

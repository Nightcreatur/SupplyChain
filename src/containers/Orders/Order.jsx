import DashboardCard from "../../components/Cards/DashboardCards";
import OrdersTable from "../../components/Table/OrdersTable";

const Order = () => {
  return (
    <div className="bg-body-color w-full h-screen flex flex-col ps-2 pe-6 py-4 mt-12">
      <div className="grid grid-cols-4 gap-4 mt-8">
        <DashboardCard
          title="Total Orders"
          value="512"
          subtitle="vs Last week"
          trend={+2.11}
        />
        <DashboardCard
          title="Order Fulfilled"
          value="92%"
          subtitle="vs Last week"
          trend={-1.7}
        />
        <DashboardCard
          title="Order Delivered"
          value="98%"
          subtitle="vs Last week"
          trend={+1.12}
        />
        <DashboardCard
          title="Order Cancelled"
          value="2%"
          subtitle="vs Last week"
          trend={-0.27}
        />
      </div>
      <div className="h-[50px]">
        <OrdersTable />
      </div>
    </div>
  );
};

export default Order;

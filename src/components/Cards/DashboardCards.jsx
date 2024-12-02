import DownwardFallingIcon from "../../assets/icons/DownwardFallingIcon";
import UpwardArrowIcon from "../../assets/icons/UpwardArrowIcon";

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ title, value, subtitle, trend, icon: Icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg px-6 pt-5 pb-6 w-full flex items-center justify-between">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">{title}</h2>
          {Icon && (  // Conditionally render icon if Icon is passed
            <div className="text-[#6187ff] bg-white shadow p-1 rounded-md mt-[-10px] me-[-10px]">
              <Icon className="w-6 h-6" />
            </div>
          )}
        </div>
        <p className="text-3xl font-semibold mb-2">{value}</p>
        <div className="flex w-full items-center justify-between">
          <p className="text-gray-500 text-xs">{subtitle}</p>
          <p
            className={`text-[10px] ${
              trend > 0
                ? "bg-[#dff3d2] rounded-xl px-2 text-[#87d259] font-medium flex items-center gap-2"
                : "bg-[#ffcccc] rounded-xl px-2 text-[#ff3c3c] font-medium flex items-center gap-2"
            }`}
            >
            {trend > 0 ? `+${trend}%` : `${trend}%`}
            {trend > 0 ? <UpwardArrowIcon/>:  <DownwardFallingIcon/>  }
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

// eslint-disable-next-line react/prop-types
const MetricCard = ({ title, value }) => (
    <div className="bg-white shadow p-4 rounded-lg shadow-lg">
      <h2 className="text-black font-medium text-[18px] ms-2 mt-2 mb-3">{title}</h2>
      <div className="text-[26px] font-semibold ms-2">{value}</div>
    </div>
  );

  export default MetricCard;
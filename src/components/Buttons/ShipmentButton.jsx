// eslint-disable-next-line react/prop-types
const ShipmentButton = ({ text, bgColor, textColor, onClick, icon, ...props }) => {
    return (
      <button
        onClick={onClick}
        // eslint-disable-next-line react/prop-types
        className={`flex items-center ${bgColor} ${textColor} py-2 px-4 rounded-md shadow-lg ${props.className}`}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
    );
  };
  
  export default ShipmentButton;
  
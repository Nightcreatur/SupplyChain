// eslint-disable-next-line react/prop-types
const Button = ({ text, bgColor, textColor, icon, size,weight }) => {
  return (
    <button
      className={` text-${textColor}  rounded-md shadow-lg px-4 py-2 flex items-center`}
      style={{backgroundColor: bgColor,fontSize: size,fontWeight:weight }}
    >
      <span></span>
      {text} <span className="ml-2">{icon}</span>
    </button>
  );
};

export default Button;

import React from "react";

interface Icon {
  icon: string;
  label: string;
}

const Icon: React.FC<Icon> = ({ icon, label }) => {
  return (
    <div className="icon">
      <img src={icon} alt="icon" />
      <label>{label}</label>
    </div>
  );
};

export default Icon;

import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full text-sm font-medium transition-colors duration-200"
    >
      {label}
    </button>
  );
};

export default Pill;

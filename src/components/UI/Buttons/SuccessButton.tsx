import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const SuccessBtn: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 `}
    >
      {title}
    </button>
  );
};

export default SuccessBtn;

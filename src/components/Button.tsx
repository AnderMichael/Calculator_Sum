import React from 'react';

interface ButtonProps {
  id: string;
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ id, label, onClick }) => {
  return (
    <button
      id={id}
      data-testid={id}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

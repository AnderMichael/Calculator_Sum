import React from "react";

interface InputProps {
  id: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <input
        id={id}
        data-testid={id}
        className="border border-gray-300 p-2 rounded-md w-full"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Calculator: React.FC = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const numericButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

  const handleButtonClick = (value: string) => {
    if (operator) {
      setSecondNumber((prevSecondNumber) => prevSecondNumber + value);
    } else {
      setFirstNumber((prevFirstNumber) => prevFirstNumber + value);
    }
  };

  const handleSign = () => {
    if (operator) {
      setSecondNumber((prevSecondNumber) => sign(prevSecondNumber));
    } else {
      setFirstNumber((prevFirstNumber) => sign(prevFirstNumber));
    }
  };

  const sign = (number: string) => {
    if (number.charAt(0) !== "+" && number.charAt(0) !== "-") {
      return "-" + number;
    } else {
      if (number[0] === "+") {
        return number.replace("+", "-");
      } else {
        return number.replace("-", "+");
      }
    }
  };

  const handleOperatorClick = (op: string) => {
    setOperator(op);
  };

  const handleClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("");
  };

  const handleDelete = () => {
    if (operator) {
      if (secondNumber.length !== 0) {
        setSecondNumber((prevSecondNumber) =>
          prevSecondNumber.slice(0, prevSecondNumber.length - 1)
        );
      } else {
        setOperator("");
      }
    } else {
      setFirstNumber((prevFirstNumber) =>
        prevFirstNumber.slice(0, prevFirstNumber.length - 1)
      );
    }
  };

  const handleCalculate = () => {
    if (firstNumber && secondNumber && operator) {
      try {
        const calculatedResult = eval(
          `(${firstNumber}) ${operator} (${secondNumber})`
        );
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult("Introduce valid numbers");
      }
    } else {
      setResult("");
    }
  };

  return (
    <div className="flex flex-col w-[45%] mx-auto mt-8 p-4 border border-gray-300 rounded-md space-y-4">
      <h1 className="text-center text-amber-50 text-xl font-bold">
        Calculator to Paul
      </h1>
      <div className="flex space-x-5">
        <div className="flex flex-col w-[70%] space-y-4">
          <Input
            id="firstNumber"
            value={firstNumber}
            onChange={setFirstNumber}
            placeholder="First Number"
          />
          <Input
            id="secondNumber"
            value={secondNumber}
            onChange={setSecondNumber}
            placeholder="Second Number"
          />
        </div>
        <div
          id="sign"
          data-testid="sign"
          className="flex w-[25%] text-7xl justify-center"
        >
          {operator ? operator : "?"}
        </div>
      </div>
      <Input
        id="result"
        value={result}
        onChange={() => {}}
        placeholder="Result"
      />
      <div className="buttons grid grid-cols-3 gap-2 mt-2">
        {numericButtons.map((number) => (
          <Button
            id={number}
            label={number}
            onClick={() => handleButtonClick(number)}
          />
        ))}
        <Button id="+/-" label="+/-" onClick={handleSign} />
        <Button id="0" label="0" onClick={() => handleButtonClick("0")} />
        <Button id="dot" label="." onClick={() => handleButtonClick(".")} />
      </div>
      <div className="operators grid grid-cols-2 gap-2 mt-2">
        <Button id="clear" label="Clear" onClick={handleClear} />
        <Button id="delete" label="Delete" onClick={handleDelete} />
        <Button
          id="addition"
          label="+"
          onClick={() => handleOperatorClick("+")}
        />
        <Button
          id="subtraction"
          label="-"
          onClick={() => handleOperatorClick("-")}
        />
        <Button
          id="multiplication"
          label="*"
          onClick={() => handleOperatorClick("*")}
        />
        <Button
          id="division"
          label="/"
          onClick={() => handleOperatorClick("/")}
        />
      </div>
      <Button id="calculate" label="=" onClick={handleCalculate} />
    </div>
  );
};

export default Calculator;

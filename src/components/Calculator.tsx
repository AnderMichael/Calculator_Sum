import { useState } from "react";
import { useForm } from "react-hook-form";
import { stringSumConversor } from "../helpers/stringSumConversor";

const Calculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const { num1, num2 } = data;
    setResult(`${stringSumConversor(num1, num2)}`);
  };

  const [result, setResult] = useState("Nada aún");

  return (
    <div className="w-[25%] mx-auto mt-5 p-4 bg-lime-600 flex flex-col">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Súper Dúper Calculadora pa Sumar
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">
        <h1 className="text-sm font-semibold my-2">Número 1</h1>
        <input
          id="num1"
          type="text"
          placeholder="Ingresa el número 1"
          className={`p-2 border rounded text-center ${
            errors.num1 ? "border-red-500" : ""
          }`}
          {...register("num1", {
            required: "Ingresa un número",
            pattern: {
              value: /^[+-]?\d+(\.\d+)?$/,
              message: "Ingresa un número válido",
            },
          })}
        />
        <p className="text-red-500 my-2" id="en1">
          {errors?.num1 && <>{errors.num1.message}</>}
        </p>
        <h1 className="text-sm font-semibold my-2">Número 2</h1>
        <input
          id="num2"
          type="text"
          placeholder="Ingresa el número 2"
          className={`p-2 border rounded text-center ${
            errors.num2 ? "border-red-500" : ""
          }`}
          {...register("num2", {
            required: "Ingresa un número",
            pattern: {
              value: /^[+-]?\d+(\.\d+)?$/,
              message: "Ingresa un número válido",
            },
          })}
        />
        <p className="text-red-500 my-2" id="en2">
          {errors?.num2 && <>{errors.num2.message}</>}
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          data-testid="sum"
          id="sum"
        >
          Sumar
        </button>
      </form>
      <div className="mt-4 font-bold justify-center flex">
        Resultado:
        <span
          className="text-white bg-orange-700 font-bold px-1 rounded-md"
          data-testid="result"
          id="result"
        >
          {result}
        </span>
      </div>
    </div>
  );
};

export default Calculator;

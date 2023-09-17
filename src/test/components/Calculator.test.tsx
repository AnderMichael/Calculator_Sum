//import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Calculator from "../../components/Calculator";

test("Initial State Calculator Component", () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(
    <Calculator />
  );

  // Check if the component's title is rendered
  expect(getByText("Calculator to Paul")).toBeInTheDocument();

  // Check if the input placeholders are rendered
  expect(getByPlaceholderText("First Number")).toBeInTheDocument();
  expect(getByPlaceholderText("Second Number")).toBeInTheDocument();

  // Check if the "Sum" button is rendered
  expect(getByTestId("result").textContent).toEqual("");
}, 20000);

test("Typing the first number", async () => {
  const { getByTestId } = render(<Calculator />);

  const number0 = getByTestId("0");
  const number1 = getByTestId("1");
  const number2 = getByTestId("2");
  const number3 = getByTestId("3");
  const number4 = getByTestId("4");
  const number5 = getByTestId("5");
  const number6 = getByTestId("6");
  const number7 = getByTestId("7");
  const number8 = getByTestId("8");
  const number9 = getByTestId("9");

  const input1 = getByTestId("firstNumber");
  const result = getByTestId("result");

  //const equal = getByTestId("calculate");

  // Click the "Sum" button
  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(number4);
  await userEvent.click(number5);
  await userEvent.click(number6);
  await userEvent.click(number7);
  await userEvent.click(number8);
  await userEvent.click(number9);
  await userEvent.click(number0);

  //await userEvent.click(equal);
  // Check if the result is displayed correctly
  expect(input1).toHaveValue("1234567890");
  expect(result.textContent).toEqual("");
}, 20000);

test("Typing the second number", async () => {
  const { getByTestId } = render(<Calculator />);

  const number0 = getByTestId("0");
  const number1 = getByTestId("1");
  const number2 = getByTestId("2");
  const number3 = getByTestId("3");
  const number4 = getByTestId("4");
  const number5 = getByTestId("5");
  const number6 = getByTestId("6");
  const number7 = getByTestId("7");
  const number8 = getByTestId("8");
  const number9 = getByTestId("9");

  const input1 = getByTestId("firstNumber");
  const input2 = getByTestId("secondNumber");

  const plus = getByTestId("addition");

  const result = getByTestId("result");

  //const equal = getByTestId("calculate");

  // Click the "Sum" button
  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(number4);
  await userEvent.click(number5);
  await userEvent.click(number6);
  await userEvent.click(number7);
  await userEvent.click(number8);
  await userEvent.click(number9);
  await userEvent.click(number0);
  await userEvent.click(plus);

  //await userEvent.click(equal);
  // Check if the result is displayed correctly
  expect(input1).toHaveValue("1234567890");
  expect(getByTestId("sign").textContent).toEqual("+");
  expect(result.textContent).toEqual("");

  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(number4);
  await userEvent.click(number5);
  await userEvent.click(number6);
  await userEvent.click(number7);
  await userEvent.click(number8);
  await userEvent.click(number9);
  await userEvent.click(number0);

  expect(input2).toHaveValue("1234567890");
  expect(getByTestId("sign").textContent).toEqual("+");
  expect(result.textContent).toEqual("");
}, 20000);

test("Typing a sum, rest, mult and division", async () => {
  const { getByTestId } = render(<Calculator />);

  const number1 = getByTestId("1");
  const number2 = getByTestId("2");
  const number3 = getByTestId("3");

  const input1 = getByTestId("firstNumber");
  const input2 = getByTestId("secondNumber");

  const plus = getByTestId("addition");

  const result = getByTestId("result");

  //const equal = getByTestId("calculate");

  // Click the "Sum" button
  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(plus);

  //await userEvent.click(equal);
  // Check if the result is displayed correctly
  expect(input1).toHaveValue("123");
  expect(getByTestId("sign").textContent).toEqual("+");
  expect(result.textContent).toEqual("");

  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);

  expect(input2).toHaveValue("123");
  expect(getByTestId("sign").textContent).toEqual("+");
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("246");

  const subtraction = getByTestId("subtraction");
  await userEvent.click(subtraction);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("0");

  const multiplication = getByTestId("multiplication");
  await userEvent.click(multiplication);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("15129");

  const division = getByTestId("division");
  await userEvent.click(division);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("1");
}, 20000);

test("Typing a float sum, rest, mult and division", async () => {
  const { getByTestId } = render(<Calculator />);

  const number1 = getByTestId("1");
  const number2 = getByTestId("2");
  const number3 = getByTestId("3");
  const point = getByTestId("dot");

  const input1 = getByTestId("firstNumber");
  const input2 = getByTestId("secondNumber");

  const plus = getByTestId("addition");

  const result = getByTestId("result");

  //const equal = getByTestId("calculate");

  // Click the "Sum" button
  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(point);
  await userEvent.click(number1);

  await userEvent.click(plus);

  //await userEvent.click(equal);
  // Check if the result is displayed correctly
  expect(input1).toHaveValue("123.1");
  expect(getByTestId("sign").textContent).toEqual("+");
  expect(result.textContent).toEqual("");

  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(point);
  await userEvent.click(number1);

  expect(input2).toHaveValue("123.1");
  expect(getByTestId("sign").textContent).toEqual("+");
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("246.2");

  const subtraction = getByTestId("subtraction");
  await userEvent.click(subtraction);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("0");

  const multiplication = getByTestId("multiplication");
  await userEvent.click(multiplication);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("15153.609999999999");

  const division = getByTestId("division");
  await userEvent.click(division);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("1");
}, 20000);

test("Typing a sum, rest, mult and division", async () => {
  const { getByTestId } = render(<Calculator />);

  const number1 = getByTestId("1");
  const number2 = getByTestId("2");
  const number3 = getByTestId("3");

  const input1 = getByTestId("firstNumber");
  const input2 = getByTestId("secondNumber");

  const plus = getByTestId("addition");

  const result = getByTestId("result");

  //const equal = getByTestId("calculate");

  // Click the "Sum" button
  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(plus);

  //await userEvent.click(equal);
  // Check if the result is displayed correctly
  expect(input1).toHaveValue("123");
  expect(getByTestId("sign").textContent).toEqual("+");
  expect(result.textContent).toEqual("");

  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);

  expect(input2).toHaveValue("123");
  expect(getByTestId("sign").textContent).toEqual("+");
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("246");

  const subtraction = getByTestId("subtraction");
  await userEvent.click(subtraction);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("0");

  const multiplication = getByTestId("multiplication");
  await userEvent.click(multiplication);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("15129");

  const division = getByTestId("division");
  await userEvent.click(division);
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("1");
}, 20000);

test("Typing a float sum, rest, mult and division", async () => {
  const { getByTestId } = render(<Calculator />);

  const number1 = getByTestId("1");
  const number2 = getByTestId("2");
  const number3 = getByTestId("3");
  const point = getByTestId("dot");

  const input1 = getByTestId("firstNumber");
  const input2 = getByTestId("secondNumber");

  const plus = getByTestId("addition");

  const result = getByTestId("result");

  //const equal = getByTestId("calculate");

  // Click the "Sum" button
  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(point);
  await userEvent.click(number1);

  await userEvent.click(plus);

  //await userEvent.click(equal);
  // Check if the result is displayed correctly
  expect(input1).toHaveValue("123.1");
  expect(getByTestId("sign").textContent).toEqual("+");
  expect(result.textContent).toEqual("");

  await userEvent.click(number1);
  await userEvent.click(number2);
  await userEvent.click(number3);
  await userEvent.click(point);
  await userEvent.click(point);


  expect(input2).toHaveValue("123..");
  expect(getByTestId("sign").textContent).toEqual("+");
  await userEvent.click(getByTestId("calculate"));
  expect(result).toHaveValue("Introduce valid numbers");
}, 20000);


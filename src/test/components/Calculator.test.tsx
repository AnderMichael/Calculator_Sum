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
  expect(getByText("Súper Dúper Calculadora pa Sumar")).toBeInTheDocument();

  // Check if the input placeholders are rendered
  expect(getByPlaceholderText("Ingresa el número 1")).toBeInTheDocument();
  expect(getByPlaceholderText("Ingresa el número 2")).toBeInTheDocument();

  // Check if the "Sum" button is rendered
  expect(getByTestId("result").textContent).toEqual("Nada aún");
});

test("Calculate the sum correctly", async () => {
  const { getByPlaceholderText, getByTestId, getByRole } = render(
    <Calculator />
  );

  const input1 = getByPlaceholderText("Ingresa el número 1");
  const input2 = getByPlaceholderText("Ingresa el número 2");
  const sumButton = getByRole("button", { name: "Sumar" });

  // Enter values into the input fields
  await userEvent.type(input1, "10");
  await userEvent.type(input2, "20");

  // Click the "Sum" button
  await userEvent.click(sumButton);
  // Check if the result is displayed correctly
  expect(getByTestId("result").textContent).toEqual("30");
}, 10000);

test("Calculate the sum correctly, positiveFloat + negativeFloat", async () => {
  const { getByPlaceholderText, getByTestId, getByRole } = render(
    <Calculator />
  );

  const input1 = getByPlaceholderText("Ingresa el número 1");
  const input2 = getByPlaceholderText("Ingresa el número 2");
  const sumButton = getByRole("button", { name: "Sumar" });

  // Enter values into the input fields
  await userEvent.type(input1, "10.5");
  await userEvent.type(input2, "-20.1");

  // Click the "Sum" button
  await userEvent.click(sumButton);
  // Check if the result is displayed correctly
  expect(getByTestId("result").textContent).toEqual("-9.600000000000001");
}, 10000);

test("Calculate the sum correctly, positive + negative", async () => {
  const { getByPlaceholderText, getByTestId, getByRole } = render(
    <Calculator />
  );

  const input1 = getByPlaceholderText("Ingresa el número 1");
  const input2 = getByPlaceholderText("Ingresa el número 2");
  const sumButton = getByRole("button", { name: "Sumar" });

  // Enter values into the input fields
  await userEvent.type(input1, "10");
  await userEvent.type(input2, "-20");

  // Click the "Sum" button
  await userEvent.click(sumButton);
  // Check if the result is displayed correctly
  expect(getByTestId("result").textContent).toEqual("-10");
}, 10000);

test("Calculate the sum correctly, negative + negative", async () => {
  const { getByPlaceholderText, getByTestId, getByRole } = render(
    <Calculator />
  );

  const input1 = getByPlaceholderText("Ingresa el número 1");
  const input2 = getByPlaceholderText("Ingresa el número 2");
  const sumButton = getByRole("button", { name: "Sumar" });

  // Enter values into the input fields
  await userEvent.type(input1, "-10");
  await userEvent.type(input2, "-20");

  // Click the "Sum" button
  await userEvent.click(sumButton);
  // Check if the result is displayed correctly
  expect(getByTestId("result").textContent).toEqual("-30");
}, 10000);

test("Empty inputs", async () => {
  const { getByRole, getAllByText } = render(<Calculator />);

  const sumButton = getByRole("button", { name: "Sumar" });

  // Click the "Sum" button
  await userEvent.click(sumButton);
  // Check if the result is displayed correctly
  getAllByText("Ingresa un número").forEach((text) =>
    expect(text).toBeInTheDocument()
  );
});

test("Incorrect inputs", async () => {
  const { getByRole, getAllByText, getByPlaceholderText } = render(
    <Calculator />
  );

  const input1 = getByPlaceholderText("Ingresa el número 1");
  const input2 = getByPlaceholderText("Ingresa el número 2");
  const sumButton = getByRole("button", { name: "Sumar" });

  // Enter values into the input fields
  await userEvent.type(input1, "attstd");
  await userEvent.type(input2, "tetwuu");
  await userEvent.click(sumButton);

  // Check if the result is displayed correctly
  getAllByText("Ingresa un número válido").forEach((text) =>
    expect(text).toBeInTheDocument()
  );
}, 10000);

test("Empty 1st input", async () => {
  const { getByRole, getByText, getByPlaceholderText } = render(<Calculator />);

  const sumButton = getByRole("button", { name: "Sumar" });
  const input2 = getByPlaceholderText("Ingresa el número 2");
  await userEvent.type(input2, "20");

  // Click the "Sum" button
  await userEvent.click(sumButton);
  // Check if the result is displayed correctly
  expect(getByText("Ingresa un número")).toBeInTheDocument();
}, 10000);

test("Empty 2nd input", async () => {
  const { getByRole, getByText, getByPlaceholderText } = render(<Calculator />);

  const sumButton = getByRole("button", { name: "Sumar" });
  const input1 = getByPlaceholderText("Ingresa el número 1");
  await userEvent.type(input1, "20");

  // Click the "Sum" button
  await userEvent.click(sumButton);
  // Check if the result is displayed correctly
  expect(getByText("Ingresa un número")).toBeInTheDocument();
}, 10000);

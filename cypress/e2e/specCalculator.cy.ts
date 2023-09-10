describe("Init Test Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Visit the page", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Click on the button", () => {
    cy.get("#sum").click();
    cy.get("#en1").contains("Ingresa un número");
    cy.get("#en2").contains("Ingresa un número");
    cy.get("#result").contains("Nada aún");
  });
});

describe("Setting Values Test Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Filling the blanks", () => {
    cy.get("#num1").type("20");
    cy.get("#num2").type("10");
  });

  it("Obtaining a result", () => {
    cy.get("#num1").type("20");
    cy.get("#num2").type("10");
    cy.get("#sum").click();
    cy.get("#result").contains("30");
  });

  it("Checking the last result", () => {
    cy.get("#num1").type("20.5");
    cy.get("#num2").type("10.5");
    cy.get("#sum").click();
    cy.get("#result").contains("31");
    cy.get("#num1").type("236");
    cy.get("#num2").type("567");
    cy.get("#result").contains("31");
  });

  it("Obtaining errors", () => {
    cy.get("#num1").type("++30");
    cy.get("#num2").type("1a0");
    cy.get("#sum").click();
    cy.get("#en1").contains("Ingresa un número válido");
    cy.get("#en2").contains("Ingresa un número válido");
    cy.get("#result").contains("Nada aún");
  });

  it("Obtaining errors and check the last result", () => {
    cy.get("#num1").type("20");
    cy.get("#num2").type("10");
    cy.get("#sum").click();
    cy.get("#result").contains("30");
    cy.get("#num1").type("236a");
    cy.get("#num2").type("567b");
    cy.get("#en1").contains("Ingresa un número válido");
    cy.get("#en2").contains("Ingresa un número válido");
    cy.get("#sum").click();
    cy.get("#en1").contains("Ingresa un número válido");
    cy.get("#en2").contains("Ingresa un número válido");
    cy.get("#result").contains("30");
  });

  it("Adding numbers and obtaining another result", () => {
    cy.get("#num1").type("20");
    cy.get("#num2").type("10");
    cy.get("#sum").click();
    cy.get("#result").contains("30");
    cy.get("#num1").type("236");
    cy.get("#num2").type("567");
    cy.get("#sum").click();
    cy.get("#result").contains("30803");
  });

  it("Refilling and obtaining another result", () => {
    cy.get("#num1").type("20");
    cy.get("#num2").type("10");
    cy.get("#sum").click();
    cy.get("#result").contains("30");
    cy.get("#num1").clear();
    cy.get("#num1").type("120");
    cy.get("#num2").clear();
    cy.get("#num2").type("-252");
    cy.get("#sum").click();
    cy.get("#result").contains("-132");
  });
});

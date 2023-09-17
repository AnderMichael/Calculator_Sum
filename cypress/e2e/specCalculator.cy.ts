describe("Init Test Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Visit the page", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Click on the button", () => {
    cy.get("#1").click();
    cy.get("#firstNumber").should('have.value', '1');
    cy.get("#secondNumber").should('have.value', '');
    cy.get("#result").should('have.value', '');
  });
});

describe("Setting Values Test Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Filling the blanks", () => {
    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#3").click();
    cy.get("#firstNumber").should('have.value', '123');

    cy.get("#addition").click();

    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#3").click();
    cy.get("#secondNumber").should('have.value', '123');

  });

  it("Obtaining a result", () => {
    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#3").click();
    cy.get("#firstNumber").should('have.value', '123');

    cy.get("#addition").click();

    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#3").click();
    cy.get("#secondNumber").should('have.value', '123');

    cy.get("#calculate").click();
    cy.get("#result").should('have.value', '246');
  });

  it("Obtaining errors", () => {
    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#3").click();
    cy.get("#dot").click();
    cy.get("#dot").click();

    cy.get("#firstNumber").should('have.value', '123..');

    cy.get("#addition").click();

    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#3").click();
    cy.get("#secondNumber").should('have.value', '123');

    cy.get("#calculate").click();
    cy.get("#result").should('have.value', 'Introduce valid numbers');
  });

  it("Adding numbers and obtaining another result", () => {
    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#3").click();
    
    cy.get("#addition").click();

    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#3").click();

    cy.get("#calculate").click();
    cy.get("#result").should('have.value', '246');

    cy.get("#0").click();
    cy.get("#0").click();
    cy.get("#0").click();
    cy.get("#calculate").click();
    cy.get("#result").should('have.value', '123123');

 
  });
});

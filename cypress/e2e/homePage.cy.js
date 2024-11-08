describe("Robbed store", () => {
  it("renders logo robbed.store", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testid="cypress-title"]').should("have.text", "Robbed.store");
  });
  it("renders category grid", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testid="0"]');
    cy.get('[data-testid="1"]');
    cy.get('[data-testid="2"]');
    cy.get('[data-testid="3"]');
  });
  it("renders cart", () => {
    cy.visit("http://localhost:5173");
    cy.get('button[aria-label="cart"]').click();
    cy.get("h2").should("have.text", "Cart");
  });
});

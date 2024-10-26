describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div").eq(0).contains("Email");

    // cy.get("div").eq(1).contains("Password");
  });
});

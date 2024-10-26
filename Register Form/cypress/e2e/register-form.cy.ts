describe("Filling out the registration form", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1440, 800);
  });

  it("the h1 contains the correct text", () => {
    cy.get("h1").contains("Create an Account");
  });

  it("the inputs tittle contains the correct text", () => {
    cy.get("[data-test='email-input']").contains("Email");
    cy.get("[data-test='password-input']").contains(/password/i);
    cy.get("[data-test='confirm-password-input']").contains(/confirm password/i);
    cy.get("[data-test='first-name-input']").contains(/first name/i);
    cy.get("[data-test='last-name-input']").contains(/last name/i);
    cy.getData("gender-select").contains(/gender/i);
  });

  //happy path
  it("allows users to enter correct data to email input", () => {
    cy.getData("email-input").type("test@gmail.com");
  });

  //unhappy path

  it("does not allow an invalid email address", () => {
    cy.getData("email-input").type("test");
    cy.getData("next-button").click();
    cy.get("#email").should("have.attr", "type", "email");
    // cy.get("input[name=email]").should("have.attr", "type", "email");
  });

  it.only("Filling out the register form with correct data", () => {
    cy.getData("email-input").type("testowy@gmail.com");
    cy.getData("password-input").type("Test1234!");
    cy.getData("confirm-password-input").type("Test1234!");
    cy.getData("first-name-input").type("Test");
    cy.getData("last-name-input").type("Test");
    // cy.get("#gender").select("Male");
    cy.getData("gender-select").find("select").select("Male")
    //find 3 select
    // cy.getData("gender-select").find("select").eq(3).select("Male");
    cy.getData("next-button").click();

    //url testing 
    //cy.location("pathname").should("equal", "/testing-foundations")

  });
});

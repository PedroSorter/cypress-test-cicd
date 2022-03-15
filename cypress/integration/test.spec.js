/// <reference types = "cypress" /> 

describe("Test form fields in create complaint", () => {

    it("Test create complaint form as john.doe", () => {
      cy.visit("https://www.google.com/");
      cy.viewport(1920, 1080);
      cy.get('.gLFyf').click().type("Cruzeiro");
      cy.get('body').should('contain', 'Pesquisa Google').click();
    });
});
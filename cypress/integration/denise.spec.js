/// <reference types = "cypress" /> 

describe("TESTE DENISE", () => {

    it("Test create complaint form as john.doe", () => {
      cy.visit({ url: "https://www.bet365.com/", failOnStatusCode: false });
      cy.get('.hm-MainHeaderCentreWide_Link hm-HeaderMenuItem ').should('contain', 'Esportes');
    });
});
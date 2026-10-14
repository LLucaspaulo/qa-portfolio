/// <reference types="cypress" />

/**
 * Exemplo de spec para portfólio QA.
 * Site alvo: https://demoqa.com (formulário de prática).
 * Requer: npm install cypress --save-dev && npx cypress open
 */
describe('DemoQA - Text Box (smoke)', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
  });

  it('preenche formulário e valida mensagem de sucesso', () => {
    cy.get('#userName').type('Lucas Paulo');
    cy.get('#userEmail').type('lucas.qa.portfolio@example.com');
    cy.get('#currentAddress').type('Portfólio QA - teste automatizado');
    cy.get('#submit').click();
    cy.get('#output').should('be.visible');
    cy.get('#name').should('contain', 'Lucas Paulo');
  });
});

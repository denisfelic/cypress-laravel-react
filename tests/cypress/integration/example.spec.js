/// <reference types="cypress" />

it('works', () => {
  cy.visit('/').contains('Environment: Acceptance');
});

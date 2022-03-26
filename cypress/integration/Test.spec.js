/// <reference types="cypress" />

it('works', () => {
    console.log('hello world!');
    cy.visit('/').contains('Environment: Acceptance')
})
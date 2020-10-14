// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should have working number buttons', () => {
            cy.get('#number2').click();
            cy.get('.display').should('contain', '2')
        }),

        it('should update display with results of arithmetical operations', () => {
            cy.get('#number2').click();
            cy.get('#operator_add').click();
            cy.get('#number2').click();
            cy.get('#operator_equals').click();
            cy.get('.display').should('contain', '4')
        }),

        it('should be able to chain multiple operations together', () => {
            cy.get('#number2').click();
            cy.get('#operator_add').click();
            cy.get('#number2').click();
            cy.get('#operator_add').click();
            cy.get('#number2').click();
            cy.get('#operator_equals').click();
            cy.get('.display').should('contain', '6')
        }),

        it('output as expected for a range of numbers', () => {
            cy.get('#number1').click();
            cy.get('#number0').click();
            cy.get('#operator_subtract').click();
            cy.get('#number1').click();
            cy.get('#number1').click();
            cy.get('#operator_add').click();
            cy.get('.display').should('contain', '-1')
        }),

        it('exceptional circumstances test', () => {
            cy.get('#number1').click();
            cy.get('#operator_divide').click();
            cy.get('#number0').click();
            cy.get('#operator_equals').click();
            cy.get('.display').should('contain', '000')
        })
})
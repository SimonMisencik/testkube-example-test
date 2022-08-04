/// <reference types="cypress" />

describe('check main page of nginx', () => {
    beforeEach(() => {
        // cy.visit('krakend.default.svc.cluster.local')
        cy.visit('krakend:80')
    })

    it('Check title of the main page', () => {
        cy.title().should('eq', 'Welcome to nginx!')
    })
})

/// <reference types="cypress" />

describe('check main page of nginx', () => {
    beforeEach(() => {
        // cy.visit('nginx.testkube.svc.cluster.local')
        cy.visit('http://nginx:80/')
    })

    it('Check title of the main page', () => {
        cy.title().should('eq', 'Welcome to nginx!')
    })
})

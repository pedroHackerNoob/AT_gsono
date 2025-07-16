import {url} from '../enviroment'
//
describe('show error component message', () => {
    beforeEach(() => {
        cy.visit(url)
    })
    // component
    it.only('Should show error',()=>{
        cy.get('#submit').click()
        cy.get('#nameLabel   > .text-red-600').should('be.visible')
        cy.get('#nameLabel   > .text-red-600').should('have.text', 'nombre requerido')
        // logo
        cy.get('#logoLabel   > .text-red-600').should('be.visible')
        cy.get('#logoLabel   > .text-red-600').should('have.text', 'logo requerido')
        // location
        cy.get('#locationLabel   > .text-red-600').should('be.visible')
        cy.get('#locationLabel   > .text-red-600').should('have.text', 'localizacion requerido')
        // // face
        cy.get('#faceLabel   > .text-red-600').should('be.visible')
        cy.get('#faceLabel   > .text-red-600').should('have.text', 'facebook requerido')
        // // insta
        cy.get('#instaLabel   > .text-red-600').should('be.visible')
        cy.get('#instaLabel   > .text-red-600').should('have.text', 'instagram requerido')
        // // description
        cy.get('#descriptionLabel   > .text-red-600').should('be.visible')
        cy.get('#descriptionLabel   > .text-red-600').should('have.text', 'descripcion requerido')
    })
})
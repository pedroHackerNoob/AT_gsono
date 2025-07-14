import {url} from '../enviroment'
//
describe('show error component message', () => {
    beforeEach(() => {
        cy.visit(url)
    })
    // component
    it.only('Should show error',()=>{
        cy.get('#submit').click()
        cy.get('#nameLabel > div > .text-red-600').should('be.visible')
        cy.get('#nameLabel > div > .text-red-600').should('have.text', 'nombre requerido')
        // logo
        cy.get('#logoLabel > div > .text-red-600').should('be.visible')
        cy.get('#logoLabel > div > .text-red-600').should('have.text', 'logo requerido')
        // location
        cy.get('#locationLabel > div > .text-red-600').should('be.visible')
        cy.get('#locationLabel > div > .text-red-600').should('have.text', 'localizacion requerido')
        // // face
        cy.get('#faceLabel > div > .text-red-600').should('be.visible')
        cy.get('#faceLabel > div > .text-red-600').should('have.text', 'facebook requerido')
        // // insta
        cy.get('#instaLabel > div > .text-red-600').should('be.visible')
        cy.get('#instaLabel > div > .text-red-600').should('have.text', 'instagram requerido')
        // // description
        cy.get('#descriptionLabel > div > .text-red-600').should('be.visible')
        cy.get('#descriptionLabel > div > .text-red-600').should('have.text', 'descripcion requerido')
    })
})
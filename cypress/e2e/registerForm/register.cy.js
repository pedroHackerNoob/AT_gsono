import {url,name,logo,location,face,insta,desk, chain} from "../enviroment";
describe('Register', () => {
    beforeEach(() => {
        cy.visit(url)
    })
    // fill reegister
    it.only('Should register bussines',()=>{
        // nombre
        cy.get('#name').type(name)
        cy.get('#name').should('have.value', name)
        // logo
        cy.get('#logo').type(logo)
        cy.get('#logo').should('have.value', logo)
        // location
        cy.get('#location').type(location)
        cy.get('#location').should('have.value', location)
        // face
        cy.get('#social').type(face)
        cy.get('#social').should('have.value', face)
        //social0
        cy.get('#social0').type(insta)
        cy.get('#social0').should('have.value', insta)
        // description
        cy.get('#description').type(desk)
        cy.get('#description').should('have.value', desk)
        // combo
        cy.get('#chain').select(chain)
        cy.get('#chain').select(chain)


        cy.get('#submit').click()
    })

})
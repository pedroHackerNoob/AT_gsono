const url = 'http://localhost:5173/register'
const name = "troyano";
const logo = "https://example.com/"
const location = "https://example.com/"
const face = "https://example.com/"
const insta = "https://example.com/"
const desk = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum."
//
describe('Register', () => {
    beforeEach(() => {
        cy.visit(url)
    })
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
        cy.get('#face').type(face)
        cy.get('#face').should('have.value', face)
        //insta
        cy.get('#insta').type(insta)
        cy.get('#insta').should('have.value', insta)
        // description
        cy.get('#description').type(desk)
        cy.get('#description').should('have.value', desk)
        cy.get('#chain').select('servicio')


    })
    it('Should select combo box',()=>{
        cy.get('#chain').select('servicio')

    })
})
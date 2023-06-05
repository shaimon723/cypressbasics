
describe('custom commands', ()=> {
/*
We can create custom commands to allow us to run certain repetitive tests without having to write 
the same code over and over again, also we can overrite an existing command to test certain components
 */
it('handling links', ()=>{

    cy.visit('https://demo.nopcommerce.com/')

//we pass label instead of css selector with our custom command and we are able to access the link for it
    cy.clickLink('Build your own computer')

//after our command runs it should open the link for the element and below we assert the label matches what we want
    cy.get("div[class='product-name'] h1").should('have.text', 'Build your own computer')


})

it('overwriting an existing command',()=>{

    cy.visit('https://demo.nopcommerce.com/')

//
    cy.clickLink('Build your own computer')

//after our command runs it should open the link for the element and below we assert the label matches what we want
    cy.get("div[class='product-name'] h1").should('have.text', 'Build your own computer')


})

it.only('New login command',()=>{

    cy.visit('https://demo.nopcommerce.com/')

    //use custom commands to open login pg
    cy.clickLink('Log in')


//will use new login command  below, reference ins commands file
cy.wait(3000)
    cy.loginapp('manny123@hotmail.com', 'manny123')

//assert that user was able to login

cy.get('.ico-account').should('have.text', 'My account')
})

})
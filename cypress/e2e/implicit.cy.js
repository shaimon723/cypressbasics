
// this page contains some examples of implicit cypress assertion methods, 'should" & 'and'

describe('Assertions', ()=> {


it('implicit assertions', ()=> {


    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
    //checks if url contains those words
    cy.url().should('contain','orangehrmlive.com')
  
    //similarly checks if words are part of url, different method
    cy.url().should('include','orangehrmlive.com')
   
    //checks if url is strictly equal to passed url 
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
    // always capture url before testing
})

it('tests url shortcut', ()=> {

    //instead of recapturin the url, we can instead add should methods to the first one as a shortcut

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    cy.url().should('contain','orangehrmlive.com')
    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
})



it('tests url with and', ()=> {
    
    // and allows you to run the same tests without needing to repeat should multiple times
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.url().should('contain','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .and('contain', 'orange')
       .and('not.contain', 'green')// .not checks negative assertions

    //tests that title is properly written
       cy.title().should('contain','Orange')
       .and('eq',"OrangeHRM")
       .and('include','Orange')

    //checks logo img on page
       cy.get('.orangehrm-login-branding > img').should('be.visible')//visibility
       .and('exist')//existence


    cy.xpath("//a").should('have.length', '5') //allows to check num of links w xpath

    

    cy.get("input[placeholder='Username']").type("Admin")// add value to input fld w css selector
    cy.get("input[placeholder='Username']").should("have.value","Admin")//tests that values presence



})








})


/*Implicit Assertions 

Should & and
use as methods"
eq
contain
include
exist
have.length
have.value

ect

Explicit assertions

Behavior Driven Dev - expect

Test Drive Dev - Assert

*/


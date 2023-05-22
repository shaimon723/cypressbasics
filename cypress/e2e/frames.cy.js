//third opt after downloading plugin you import it
import 'cypress-iframe'



/* There is no method to direclty interact with an iframe on cypress,
 instead we need to find the right tag/attr to interact with inside the iframe's
 body */



describe('handle frames',() => {

it.skip('first approach', ()=> {


cy.visit('https://the-internet.herokuapp.com/iframe');

//id of frame
//.its() allows us to grab a property
//basically we then wrap the iframe into a var
let iframe = cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')// grabs body of iframe
    .should("be.visible")
    .then(cy.wrap); //wraps it inside variable

iframe.clear()// clears iframe
    .type(' Melina no se bana {cmd+a}', ) // {cmda + a} selects all text

   
    // element not inside frame so we can get attr + value an use as selector
cy.get('[aria-label="Bold"]').click()

})


/* 
A second approach is to create a cust command in support/commands/js
this would allow us to reuse that piece of code as much as needed.
*/


it.skip('custom command/2nd apprch', () => {



    cy.visit('https://the-internet.herokuapp.com/iframe');

//use new command u created that runs a default func to grab txt bar 

cy.getIframe('#mce_0_ifr').clear().type('welcome back boy {cmda + a}')

cy.get('[aria-label="Bold"]').click()
})


/* 
Third approach uses cypress iframe plugin


*/



/* 
Downloaded plugin and imported on top
uses plugins commands*/
it('iframe plugin ', () => {


cy.visit('https://the-internet.herokuapp.com/iframe');

//loads frame using locator, doesnt interact with it
cy.frameLoaded('#mce_0_ifr') 

// lets us interact with frame
cy.iframe('#mce_0_ifr').clear().type('Klk wawawa rochyyyy {cmd+a}')// selects all txt

cy.get('[aria-label="Bold"]').click()//bolds

})

})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

/// <reference types="@cypress/xpath" />

/* adds a new customer command 
takes command name as 1st parameter
takes locator as 2nd parameter 

uses locator and created func to return the frame
wrapped

*/


import 'cypress-file-upload';

Cypress.Commands.add('getIframe', (iframe)=> {
return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)


})



/*
we use cypress.commands.add to create a new command,
first parameter is the command name and second parameter is
what we are passing into the commands function, or in this example
we are writting a command that will click on all the links in a page
and assert that the correct text is visible, by passing the label of the
product instead of the css tag
*/

Cypress.Commands.add('clickLink', (label) => {

//get all the links with anchor tag, check if they contain the label we pass and then we click    
    cy.get('a').contains(label).click()
})

/* we can overwrite commands like contains with tthe overwrite tag see below,
we pass commands as first parameter and specify all of its parameters as  second parameters followed 
by an arrow function and inside, we override.

In this case we will overrride contains to be able to 
*/

/*Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options = {})=> {
/*etermine if a filter argument was passed 
default function has matchcase value as true, we change to false

    if (typeof text === 'object') {
        options = text
        text = filter
        filter = undefined

    }   
        options.matchCase = false

        return originalFn(subject, filter, text, options)

}) */
/*
create a login custom command, pass  command name as (1st para)
then the parametes that will be passed into command as second para,
followed by a function

*/
Cypress.Commands.add('loginapp', (email, password) =>{

cy.get('#Email').type(email);
cy.get('#Password').type(password);
cy.get("button[class='button-1 login-button']").click()

})
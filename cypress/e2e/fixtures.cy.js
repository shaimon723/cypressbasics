/* we can use the fixture folder to create mock data like username and password and uste them
to test websites we just need to call cy.fixture before doing so. */

describe("fixtures and data driven testing", ()=> {


it.skip('fixtures part 1', ()=> {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    /* 
    if we use the json file we have to create a js function that would grab the data from 
    the json file and then pass it as text in this case to test the user name and password
    check below using then, and capturing inside a variable in this case I will name it data
    remember that we can only assert inside the function in order to be able to use the data*/



    //below we see how to use json data from fixture file with a simple js function
    cy.fixture('example.json').then( (data)=> {

        cy.get("input[placeholder='Username']").type(data.name);

        cy.get("input[placeholder='Password']").type(data.password);

        cy.get("button[type='submit']").click()

        cy.get('.oxd-topbar-header-title').should('exist');//assert that user got to the dashboard

    })

})


/*using fixture file to create a hook or before/before each command'
again we need to create a function to */

//we define a var outside to be able to be reused on all it blocks inside test suite

let userData;
/*
inside before hook we use the same js function to capture the data from the json file.
The only diference is that we assign the data inside the variable to a global variable defined outside
in this case the data is captured locally inside the data var, and is then stored globally 
inside the userData global variable.
*/
before( ()=> {
    cy.fixture('example.json').then( (data)=> {
        userData = data;
    })
})




it('testing using hook and fixture', ()=> {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //below we render data from global variable and use it to test
    cy.get("input[placeholder='Username']").type(userData.name);

        cy.get("input[placeholder='Password']").type(userData.password);

        cy.get("button[type='submit']").click()

        cy.get('.oxd-topbar-header-title').should('exist');

})

})
describe('test suite', ()=> {

    /*
another way of data driven testing is to use different sets of data inside a json file
to test the functionality of a specific component. in the json file I added mult username 
and pws to test the login page. Below is how we test it:
    */
it('data driven tests', ()=> {


    cy.fixture('example2.json').then( (data)=> {

 /*
 first capture json files data inside data variable, then the foreach loop
 captures each object inside the userData variable and we can loop through all
 the sets of data and use them to test

 */       
data.forEach(userData => {

    


    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


        cy.get("input[placeholder='Username']").type(userData.name);

        cy.get("input[placeholder='Password']").type(userData.password);

        cy.get("button[type='submit']").click();

/*
now in order to better test this we use a if statement to assert if dashboard screen 
is visible only if correct data is passed
*/

    if(userData.name=='admin' && userData.password=='admin123'){

        cy.get('.oxd-topbar-header-title').should('exist');
        cy.get('.oxd-userdropdown-tab').click();
        cy.get('.oxd-userdropdown-tab > .oxd-userdropdown-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    }
    else{

        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', 'Invalid credentials')
       
    }
        

});
    })
})

})
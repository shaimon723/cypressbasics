//learn how to handle alerts and pop ups

/*cypress automatically handles alerts, however depending on the alert type we can
write functions to automate how alerts are handled.

we can validate, by triggering events to validate alerts


types or alerts:

-js alert : some text and ok btn

- js confirm alert: text, ok and cancel button

- js prompt alert: text and textbx along with ok btn

- authentication alert: needs to authenticate by adding loing info ect.

*/

describe('handling alerts', ()=> {


it.skip('jsbasicalert',()=> {

    //test page to use
cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

//chooses the button we want to test
cy.get("button[onclick='jsAlert()']").should("be.visible").click()

//on event captures and verifies what event says
//alerts passes as var t
//cypress auto closes alert
cy.on("windows:alert", (t)=> {


    expect(t).to.contain('I am a JS Alert');
})
//validates that cypress auto closes alert window
cy.get("#result").should('have.text',"You successfully clicked an alert")
})

 







//cypress automatically closes alert by triggering ok but we can override with cancel button


//it.only excecutes that it block only

it.skip('jsconfirmalert',() => {

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

cy.get("button[onclick='jsConfirm()']").click();

//event used for confirm alerts

cy.on("windows:confirm", (t)=> {

 expect(t).to.contain('I am a JS confirm');
})

cy.get("#result").should('have.text',"You clicked: Ok")
}
)


//using cancel instead of the automated ok by cypress

it.skip('jsconfirmalert',() => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
    cy.get("button[onclick='jsConfirm()']").click();
    
    //event used for confirm alerts
    
    cy.on("window:confirm", (t)=> {
    
     expect(t).to.contain('I am a JS Confirm');
    })
    cy.on('window:confirm', ()=> false);//cypress will use cancel to close window
    
    cy.get("#result").should('have.text',"You clicked: Cancel")
    }
    )





it('jspropmt alert', ()=> {


cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

/* 
Before clicking on button, we need to capture the window using cy.window then
 we need to pass an arrow func  that passes window to it, specifices the type of windoes on
 second parameter and passes the value using returns method
*/
cy.window().then((win)=>{


    cy.stub(win, 'prompt').returns('welcome')
})
//clicks on element
cy.get("button[onclick='jsPrompt()']").click();
//cypress then automatically closes window clicking ok as default

// to trigger cancel again:
//.................................. will investigate


//validates text entered
cy.get("#result").should('have.text',"You entered: welcome")
})




//2 ways of testing this

it('authorizationalert', ()=> {

//can pass username and pw along w url as parameters
//use auth and pass info as json file inside curly braces
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:
     {username:'admin', password:'admin'}})


     //this validates text that comes up after entering credentials
    cy.get("div[class='example'] p").should('contain.text', 'Congratulations')
})













})
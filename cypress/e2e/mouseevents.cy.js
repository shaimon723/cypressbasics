import 'cypress-iframe'

describe("Mouse operations", ()=> {


    it.skip("mouseHover", ()=> {

        cy.visit('https://demo.opencart.com/')

        //asserts dropdsown is not visible

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link')
        .should("not.be.visible")


        // we use mouseover and click to trigger the over an element that shows elements that would appear when its triggered

        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1)')
        .trigger('mouseover').click();

        //asserts that dropdown menu element is visible
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link')
        .should("be.visible")


    });


    it.skip("right click", ()=> {

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        
        //approach 1, uses trigger method 

        //cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")

        //asserts that copy button is visible on right click
        //cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should("be.visible")
        


            //second approach
        //right click action is built to ssystem, we can use instead

        cy.get(".context-menu-one.btn.btn-neutral").rightclick()

        //asserts that copy button is visible on right click
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should("be.visible")

       
    });




    it.skip("double click", ()=> {


         // visit site ( might not load lol)
 // this is first approach using trigger ( longer)


cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");

//load iframe

cy.frameLoaded("#iframeResult");

//search through the frame use find to find button with that tag and trigger a double click

    cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")



// in our example double click triggers a text to copy from field 1 to field 2 and be visible on both
// below we find field 2 and validate that the desired text shows
    cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!');


//2nd approach, cypress has a built in dblclick method

// you dont need to use trigger, it wil automatically do a dbl click
    cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
    cy.iframe("#iframeResult").find("#field2").should('contain.value','Hello World!');


    });



    it.skip("drag and drop", ()=> {

         /* for this we need to install npm pkg and require on top of the page
 we use plugin and syntax to grab element and drag it then drop it on other element, using both
 elements' css tags */
 
cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

/* we get source element and use drag to drop on target element,
get(source).drag(target)

css property sometimes might show hidden, we can force the test by adding a paramenter:
{force:true} it forces element to be tested even if its hidden.
cy.get('#box6').drag('#box106') */

    cy.get('#box6').drag('#box106',{force:true});
    
});


    it("scrolling", ()=> {



         //we can scroll down and up a page to test certain elements

cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

//get element then use scrollintoview to get there scrolling, can pass a dur para to slow down scrolling

cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:3000})

//assert visibility

cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should("be.visible")


//go to another element(flags)

cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000})

cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should("be.visible")
// go to footer

cy.get("#footer").scrollIntoView()
    });












})
//Child elements

/*
By default cypress doesnt handle child elements/child apps

We can handle by changing the atribute of the child element
ex:
href shows the url, but target decides where it will be opened
target="_blank" opens link in a new tab.
using the DOM we can remove target and when opening link url it will stay within same window/tab

or we can use the invoke atrribute instead
 
 > this means that the element on the left is a parent of element on the right
 
 
 */
 
 describe("handle child element", () => {
 
 
    it.skip('approach 1', ()=>{
    
    //visit page
    cy.visit("https://the-internet.herokuapp.com/windows")
   
   
   // anchor is a child of .example class
    
   /* we use the invoke method, then add action we want 'remove Attr'
    and the attr to be removed 'target'
    now this will open child window within same window*/
    
   
    cy.get('.example > a').invoke('removeAttr', 'target').click()
    
    
    //now test that child window(page) is present
    // this tests the url is the new url
    
    cy.url('').should('include', 'https://the-internet.herokuapp.com/windows/new')
    
    
    //run some code ...........
    
    
    
    //allows you to go back to parent page/window
    cy.wait(5000);
    
    cy.go('back');
    
    
     })
    
    
    
    it("approach 2", () => {
    
    
    
    cy.visit("https://the-internet.herokuapp.com/windows")
    
    /*
   second approach uses a function to capture the herf property of the element
   which is the url for the second page.
   
   However thi approach only works if the child element has same domain name as parent element.
   If domain changes it wont work.
   
    */
    cy.get('.example > a').then((x)=> {
    
    let url = x.prop('href')
    
    //then we visit the page
    
    cy.visit(url);
    
    })
    //after running that code, same tests
    
    //test that you are at the right window
     cy.url('').should('include', 'https://the-internet.herokuapp.com/windows/new')
    
    
     //wait a little
      cy.wait(5000);
    
    
    // go back to main page
     cy.go('back');
    
    
    
    })
    }) 
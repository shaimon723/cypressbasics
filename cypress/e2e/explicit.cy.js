//this page contains explicit assertions


//BDD assertion, tests login 
describe("explicit assertions", ()=> {

  it("test login", ()=> {

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") //renders page
cy.get("input[placeholder='Username']").type("Admin") //adds value to uname
cy.get("input[placeholder='Password']").type("admin123") // adds value to pw

cy.get("button[type='submit']").click() // clicks submit button


//js func to check if name val matches 

let ranName = "Prasadk singh"; //created name val


//async func gets css selector then passes its text to a variable
cy.get(".oxd-userdropdown-name").then((x) => {


let desired = x.text()
    
   expect(ranName).to.equal(desired) //BDD
   assert.equal(desired,ranName) //TDD

})

})

})


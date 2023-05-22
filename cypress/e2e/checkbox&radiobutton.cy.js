


describe('testing radio buttons and checkbox', ()=> {


it('test radio buttons',()=> {

//visit website
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    
 //verifies existince of elements using input and id tag
    cy.get("input#female").should("exist").and("be.visible")
    cy.get("input#male").should("exist").and("be.visible")

/*check mark element using check then tests that it was checked
 & and verifies that second element is not checked*/

    cy.get("input#female").check().should("be.checked")
    cy.get("input#male").should("not.be.checked")

})


it('test checkboxes', ()=> {

//visit website
cy.visit("https://itera-qa.azurewebsites.net/home/automation")

//verifies existince of elements using input and id tag
cy.get("input#monday").should("exist").and("be.visible")
cy.get("input#friday").should("exist").and("be.visible")

//grab type.class[attribut of element] use as selector

//verifies all elements with those tags(whole checkbox)
cy.get("input.form-check-input[type=checkbox]").should("be.visible")

//checks all elements and verifies they are checked
cy.get("input.form-check-input[type=checkbox]").check().should("be.checked")
//unchecks all the elements and verifies theyre not checked
cy.get("input.form-check-input[type=checkbox]").uncheck().should("not.be.checked")

//checks first element
cy.get("input.form-check-input[type=checkbox]").first().check().should("be.checked")

// checks last element
cy.get("input.form-check-input[type=checkbox]").last().check().should("be.checked")
})
})
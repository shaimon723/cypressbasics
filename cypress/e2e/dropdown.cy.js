/// <reference types="cypress" />

describe("test different types of dropdowns", ()=> {



it.skip("trational dropdown w selector", ()=> {

    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    
    cy.get("#zcf_address_country") //id for dropdown container
    .should('exist') //verifies existence
    .select("Italy")//select tag selects a value
    .should("have.value","Italy")// asserts value selected matches


})






it.skip("bootsrap dropdown or no selector",()=> {

cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

//clicks on dropdown to open inputfield
//inspected dropdown element and used id
cy.get("#select2-billing_country-container").click() 

//used class for input field tht opens after clicking dropdown
//types country name, then uses enter
//type("enter") triggers enter
cy.get(".select2-search__field").type("Italy").type("{enter}")

//selects dropdown after input, then asserts it matches  users input
cy.get("#select2-billing_country-container")
.should("have.text", "Italy")
})



//dropdown that displays an auto sugestion but always same values
it.skip("auto suggestion dropdown/ static",()=> {


    //visit page
    cy.visit("https://www.wikipedia.org/")

    //grabs searchbar ID and types
    cy.get("#searchInput").type("dominica")

    //grabs suggestions,verifies it contains desired search and clicks on it
    cy.get(".suggestion-title").contains("Dominican Republic").click()
})



// test dynamic dropdown with dynamic values rendering
it("auto suggestion dropdown/ dynamic",()=> {


    //visit page
    cy.visit("https://www.google.com/")

    //grabs searchbar using input and attribute
    cy.get("#APjFqb").type("golden state")

    //triggers a wait of 4 seconds to allow search to go through, throws error if not added
    cy.wait(3000)


    cy.get("div.wM6W7d>span").should("have.length", 12)
    //used div tag . class inside it >(greater element) span
    //contains and click might not work
    //better to write a each iterator func instead

    /* 
    each iterator func takes 3 parameters:
    1- is the element
    2 - index representing element
    3- array of all elements listed

    */
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
    
        /* evaluates if any of elements text from returned array is equal
         to desired search using if statement, if it evaluates to true runs other code
         retreiving elements text and comparing it
        */
        if($el.text()== 'Golden State Warriors'){

            /*wraps element into $element then clicks on it, no need to use else
            else, we need it to cumplete everytime
            */
        cy.wrap($el).click()
}
//verifies that searchbar shows the desired selection as the searched element
cy.get("#APjFqb").should("have.value","golden state warriors")
    })






})





})

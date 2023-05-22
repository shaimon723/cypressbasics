//this page goes through basic usage of css selectors to test
describe('CSS locators', () => {

it('cssLocators', () => {

cy.visit("http://automationpractice.pl/index.php") //visits website

cy.get("#search_query_top").type("T-shirts") // uses css locator(ID) to find an element in the DOM and types the type value

cy.get("[name='submit_search']").click() //uses css locator (name attribute) to submit search by clicking search button

cy.get(".lighter").contains("T-shirts") //uses class location of search result output then assert that it matches our input

})

})
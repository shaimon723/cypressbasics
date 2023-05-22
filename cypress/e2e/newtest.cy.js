
describe('descibes test suite name', () => {

    it('tests title', () => {
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.title().should('eq', 'OrangeHRM')
})
// visits website and tests the title of the website, with "eq" should pass

it('tests title', () => {

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.title().should('eq', 'OrangedfsfHRM')
    })
// visits website and tests the title of the website, with "eq" should fail

})
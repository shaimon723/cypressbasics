//this goes over how to use xpath instead of the css selector to reference an element and test it


describe("xpath", () =>{

    it('find no. of products', () =>{
        
        cy.visit("http://automationpractice.pl/index.php")
    
        cy.xpath("//ul[@id='blockbestsellers']/li").should("have.length", 6)
    })

   //visits website then uses xpaath/element path and uses .should to check num of elements inside that block

})
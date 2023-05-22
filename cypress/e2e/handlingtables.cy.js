/*
we will use before each code to login to application,
go to main menu, then go to table
it seems like these before each scripts are known as hooks in cypress

*/

describe('Handling tables',()=> {

// before-each/hook first
beforeEach("login", ()=>  {
cy.visit("https://demo.opencart.com/admin/") //visits admin pg

//caputes un and pw and logs in
cy.get("#input-username").type('demo');
cy.get("#input-password").type("demo");
cy.get("[type='submit']").click()

// chooses x button and closes second pop up
cy.get(".btn-close").click()

//go to table

// uses li id tag to go to customer menu on menu
// then anchor tag >a child element to collapse menu and provide all opts
cy.get('#menu-customer>a').click()


// first child of of ul li is element path to click
//menu-customer is parent of ul that is parent of lis we want first child li element
cy.get('#menu-customer>ul>li:first-child').click()



})



//it blocks beloq    
it.skip('Check num of row and colummn', ()=> {


//table el [class inside it to isolate that 1 table]> means inside (tbody) > inside all the trs
// we are asserting or validating the amount of elements inside this table
cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length", "10")

//same deal here, we are  asserting the ammount of colummns, which have td tag
cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length", "7")






})



it.skip('Check cell data from specific row and colummn', ()=> {

   //inside table class tag, inside body we can use tr:nth-child(specific row)
   //then inside(> ) the table data using td:nth-child(specific td) to get thereßß
    cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains("princetrainings4@gmail.com")

 

})

it.skip('read all rows and columns data in 1st page', ()=> {


// we need to create a loop to iterate through all the rows and all the cells within those rows and grab that information.

//we grab the table data using the selector

//each loops using $element, its index and the list that its part of as parameters/ jquery func
   cy.get("table[class='table table-bordered table-hover']>tbody>tr")
   .each(($row, index, $rows) =>{

    /*we then need to wrap the row var/element with all the tds/columns data we get from within
    the element, so we run another each to iterate through all the columns inside row and log 
    the text data from each hehe I know this shit makes no sense*/
    cy.wrap($row).within( ()=> {
        cy.get("td").each( ($col, index, $cols)=> {
            //this will log each column within a particular row
            cy.log($col.text());
        })
    })
   }





   )
})




/*pagination is tricky because the number of pages displayed is dynamic,
therefore we need to use a js func to get the num of pages as a string
then use the substring method to capture the values of the pages
 via their index, pretty coool
 */
it.skip('Pagination/ navigate through diff pages', ()=> {


   // we need to define total outside

    let totalPages;
    
    /*extract text from element using then, passes element as para, inside returning el
it's text inside a variable */


cy.get(".col-sm-6.text-end").then((e)=> {
    
   let element = e.text(); //Showing 1 to 10 of 12514 (1252 Pages)

    /*
    Below we use substring method on elemenet, then inside we use index of to bring back values,
     first parameter '(' + 1 index will bring back 1 second parameter Pages - 1 
     will bring back number 2 that way we can capture dynamic values using js*/
    totalPages = element.substring(element.indexOf("(")+1, element.indexOf("Pages")-1);
    cy.log(totalPages)
})


})



it('pagination contiued/ reading through specific pages', ()=> {

//definte total pgs you want to read from
let totalPages = 5;


//create a for loop that will go through each page, from 1 to 5 automatically 


for (let i = 1; i <= totalPages; i++) {
   
//then we create if statement, if the amt of pages is bigger than one we run som logix    

if(totalPages > 1)
{

//the i element represents the active pg
cy.log("active page is==="+i)


/* 
we can pass a variable / value paramter to css selector or xpath by adding:
+element+ wrapping it that way.

Here we want to get each page 1 by 1, so we get css selector and pass itetator i's index
and pass as parameter on nth-child(+ELEMENT+) it grabs the current page and clicks on next page
automatically under the hood mayve second symbol selects next*/

cy.get("ul[class=pagination]>li:nth-child("+i+")").click();

cy.wait(3000);


/*get element you want to check(email column), use css selector for table,
then, followed by each loop, tht goes through each row
*/
cy.get("table[class='table table-bordered table-hover']>tbody>tr") //capture every row
   .each(($row, index, $rows)=> {     // read every row

/*inside we wrap row element and grab data within the row eelement
we use css selector within row selector to get data */

    cy.wrap($row).within(()=> {              //wrap each you and go inside it

                        cy.get('td:nth-child(3)')   //go to 3rd child of each row
                                            .then((e)=> {
                                                cy.log(e.text()) // log txt from each
                                                        })
           
                            })
   
   
                             })




}   

}

})


})






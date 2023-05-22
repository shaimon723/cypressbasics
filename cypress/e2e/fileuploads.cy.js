describe('test file uploads', ()=> {

it.skip('file upload', ()=> {
//we need to download the file-upload plugin 

 //visit site
    cy.visit('https://the-internet.herokuapp.com/upload')

 //get id for upload and attach file, remember we need to pass file to fixtures folder
    cy.get('#file-upload').attachFile('IDcard3.pdf')

 //submit file after upload
    cy.get('#file-submit').click()
    cy.wait(4000)
 //assert that file was uploaded properly
 //value vs text, 2 different things, please remember this mf
    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

})



it.skip('file upload and rename', ()=> {


 //only difference here is that we add parameters when uploading
    cy.visit('https://the-internet.herokuapp.com/upload')

 //below we add parameters to change file name when uploading, orig name is 1st para / new name is 2nd para
    cy.get('#file-upload').attachFile({filePath:'IDcard3.pdf', fileName:'segurotest.pdf'})

 //submit
    cy.get('#file-submit').click()

 //wait
    cy.wait(4000)

 //assert that text is present
    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

})


it.skip('file upload with drag & drop', ()=> {

  
    cy.visit('https://the-internet.herokuapp.com/upload');

 //this is not using drag command so it doesnt automatically upload so we add a sncd parameter
    
    cy.get('#drag-drop-upload').attachFile('IDcard3.pdf', { subjectType: 'drag-n-drop' });

    cy.wait(3400)

 //assrt that file was dragged and dropped into box before upload, here we use contains 
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('IDcard3.pdf')
})





it.skip('upload multiple files', ()=> {

 
 //open desired page

    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

 //select upload button and add files/ remember to wrap in sq. brackets!!

    cy.get("#filesToUpload").attachFile(['IDcard3.pdf', 'bulldog.docx']);

 //wait 4s to complete upload    
    cy.wait(4000);


 //assert that files were uploaded
    cy.get(':nth-child(6) > strong').should("contain.text", "Files You Selected:")
    
})




it('upload using shadow dom', ()=> {
/* 
the DOM has another DOM inside it called sub-dom or shadow dom, sometimes the upload file element is placed inside that shadow dom
instead of the real one, we cant use fileUpload because the elements are not visible inside
the real dom, unless we include shadowDOM as parameter*/


    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");

    cy.get(".smart-browse-input", {includeShadowDom: true}).attachFile('IDcard3.pdf');

    cy.wait(3000);

    cy.get('.smart-item-name', {includeShadowDom:true}).contains('IDcard3.pdf')
    //cy.get('#button2f71')
})




});
Given('I go to the change page', () => {
    cy.visit('http://uitestingplayground.com/textinput')
 } );
 
 When('I type some in iput field and press button', () => {
   cy.get('input').type('fake@email.com');  
   cy.get('#updatingButton').click();
 })
 
 Then('Button name changed', () => {
   expect('fake@email.com').to.equal('fake@email.com')
 });
Given('I go to the testing page', () => {
    cy.visit('http://uitestingplayground.com/scrollbars')
  })
  
  Then('I scroll and find hiden button', () => {
    cy.get('button#hidingButton').scrollIntoView().click();
  })
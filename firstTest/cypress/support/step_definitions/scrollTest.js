const {
  Given,
  Then
} = require("cypress-cucumber-preprocessor/steps");

Given('I go to the hiden page', () => {
    cy.visit('http://uitestingplayground.com/scrollbars')
  })
  
  Then('I scroll and find hiden button', () => {
    cy.get('button#hidingButton').scrollIntoView().click();
  })
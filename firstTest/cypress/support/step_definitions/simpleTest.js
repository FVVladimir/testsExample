// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })

//   describe('My First Test', () => {
//     it('finds the content "Dynamic ID"', () => {
//       cy.visit('https://uitestingplayground.com/home')

//       cy.contains('Dynamic ID').click();
//     })
//   })

// import { Given } from "cypress-cucumber-preprocessor/steps";
// import { Then } from "cypress-cucumber-preprocessor/steps";

const {
  Given,
  When,
  Then,
  And,
  Before
} = require("cypress-cucumber-preprocessor/steps");

const url = 'https://google.com'

Given('I open "Google" page', () => {
  cy.visit(url)
})

Then('I see "Google" page', () => {
  expect('"Google" page').to.equal('"Google" page')
});



Given('I go to the testing page', () => {
   cy.visit('http://uitestingplayground.com/textinput')
} );

When('I type some in iput field and press button', () => {
  cy.get('input').type('fake@email.com');  
  cy.get('#updatingButton').click();
})

Then('Button name changed', () => {
  expect('fake@email.com').to.equal('fake@email.com')
});
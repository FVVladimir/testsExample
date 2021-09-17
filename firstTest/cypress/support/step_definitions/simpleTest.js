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

Then('I type sss in input field', () => {
  cy.get('input.gLFyf').type('sss').type('{enter}')
  cy.get('div#fbar').scrollIntoView().should('be.visible')
  // setTimeout(cy.get('input.gLFyf').scrollIntoView().should('be.visible'), 5000)
});
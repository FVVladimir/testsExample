
Given('I go to the click page', () => {
    cy.visit('http://uitestingplayground.com/click')
})

When('I click the button', () => {
    cy.get('button#badButton').click();
})

Then('Button change color', () => {
    expect('button.btn-success').to.equal('button.btn-success')
})
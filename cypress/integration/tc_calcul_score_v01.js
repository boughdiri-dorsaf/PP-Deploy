describe('Calculer Score V01', () => {

  it('Does not do much!', () => {
    cy.visit('http://localhost:4200/dashadminmaster/score');
    cy.viewport(1496, 664);
    cy.wait(4000);
    cy.get('#RED0').type('1');
    cy.get('tr:nth-child(2) #RED0').type('2');
    cy.get('tr:nth-child(3) #RED0').type('3');
    cy.get('tr:nth-child(4) #RED0').type('4');
    cy.get('tr:nth-child(5) #RED0').type('5');
    cy.get('#BNS').type('6');
    cy.get('#BM').type('4');
    cy.get('#BnM').type('5');
    cy.get('#Bien').type('6');
    cy.get('#TBien').type('7');
    cy.get('#BonusCredit').type('5');
    cy.get('#Cdm').type('5');
    cy.get('#sem5').type('2');
    cy.get('#PfeON').click();
    cy.get('#Pfescore').type('4');
    cy.get('#validateScore').click();
    cy.wait(2000);
    cy.get('.swal-text').should('contain','Score a été ajouté avec succés');
   cy.get('.swal-button--confirm').click();
   cy.visit('http://localhost:4200/dashadminmaster');
   cy.get('#score').should('contain','54.44');
  });
});

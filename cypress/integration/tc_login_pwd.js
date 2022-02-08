        describe('Login', () => {

        it('Authentication', () => {
            cy.visit('http://localhost:4200/auth');
            cy.viewport(1496, 664);
            cy.wait(2000);
            cy.get('#email').type('boughdiridorsaf12@gmail.com');
            cy.get('#pwd').type('Bdorsaf1234@');
            cy.wait(2000);
            cy.get('#connecter').click();
            cy.get('.alert').should('contain','Mot de passe erroné');
        });
        });

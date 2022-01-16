describe('test home', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    /*

    it('buy a phone', () => {
        cy.intercept({
            method: 'POST',
            url: '/phones/purchase/**'
        }).as('purchase');
        cy.get("[data-cy='purchase-button']:first").click()
        cy.wait('@purchase')
            .its('response.statusCode').should('eq', 200)
    });



    it('check card title', () => {
        cy.get("[data-cy='purchase-button']:first")
            .parent()
            .find("[data-cy=model-title] > h1")
            .invoke("text").then(data => {
                expect(data.length).to.be.gte(4)
            })
    });

    it('check phone info and edit phone info', () => {

        cy.get("[data-cy=img-details]:first").click();

        cy.get("[data-cy=edit-phone").click();

        cy.get("[data-cy=input-description]").type('Description done for testing');

        cy.get("[data-cy=input-price]").type('1234');

        cy.get("[data-cy=save-info-phone").click();


    });

    it('check phone info and delete phone', () => {
      
        cy.get("[data-cy=img-details]:first").click();

        cy.get("[data-cy=delete-phone]").click();

    });
    */
    
});
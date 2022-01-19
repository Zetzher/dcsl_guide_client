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

    it('add a phone', () => {
        cy.get("[data-cy=add-phone-drawer-button]").click()
 
        cy.get("[data-cy=input-model]").type('samsung test');
        cy.get("[data-cy=input-manufacturer]").type('samsung');
        cy.get("[data-cy=input-description]").type('a huge phone');
        cy.get("[data-cy=input-main-camera]").type('12 px');
        cy.get("[data-cy=input-selfie-camera]").type('13 px');
        cy.get("[data-cy=input-features-camera]").type('testing');
        cy.get("[data-cy=input-body]").type('12 kg');
        cy.get("[data-cy=input-memory]").type('14 gb');
        cy.get("[data-cy=input-chipset]").type('testing');
        cy.get("[data-cy=input-display]").type('test');
        cy.get("[data-cy=input-platform]").type('android');
        cy.get("[data-cy=input-price]").type('1234');
 
        cy.get("[data-cy=add-new-phone]").click();
    })
    */

});
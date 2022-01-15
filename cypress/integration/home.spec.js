//before => Se ejecuta una vez antes de ejecutar los tests

/*
beforeEach => Se ejecuta antes de cada test
 
beforeEach(() => {

    })
*/

//after => Se ejecuta una vez después de ejecutar los tests
//afterEach => Se ejecuta cada vez después de ejecutar un test
//describe => Acción que al ejecutar, se ejecutan todos los tests dentro del mismo

/*
it => Especificar un test

it('buy a phone', () => {

})
*/

/*
Para usar comandos de cypress, hay que utilizar cy junto a una propiedad.

cy.visit => Cypress visita la url que le indicamos
cy.get => Cypress obtiene el elemento que le estamos pasando, para ello otorgamos a nuestro elemento/componente
            en el código jsx una propiedad, como por ejemplo data-cy junto a un string, data-cy="button-purchase";
cy.intercept => Cypress intercepta una petición http

Métodos de cy.get{
    click() => Clicka en el elemento que hemos obtenido
    parent() => Selecciona el padre del elemento
    find() => Encuentra el elemento que pongamos dentro del paréntesis
    should() => Función que le indicamos lo que debe ocurrir
    invoke() => Crea una función sobre lo que hemos seleccionado
    type() => Escribir algo dentro de un input
}
*/

describe('test home', () => {
    beforeEach(() => {
        cy.visit('/');
    });


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

    {
        /*
            it('fill form', () => {
                cy.get("[data-cy='input-form-phone']:first")
                .type('esto es una prueba!')
            })
        */
    }


});
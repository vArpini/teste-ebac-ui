/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first().click()
        // .last() ele pega o ultimo da lista
        // .eq(2) ele pega o segundo da lista
    });
});
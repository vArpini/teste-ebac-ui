/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first().click()
        // .last() ele pega o ultimo da lista
        // .eq(2) ele pega a posição 2 da lista
        // .contains('Frankie Sweatshirt') ele pega o nome
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});
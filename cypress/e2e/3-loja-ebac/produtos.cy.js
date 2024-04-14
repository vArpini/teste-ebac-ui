/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Beaumont Summit Kit')
            cy.get('#tab-title-description > a').should('contain', 'Descricao')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Green', 5)
        cy.get('.woocommerce-message').should('contain', '5 × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
        
    });
});
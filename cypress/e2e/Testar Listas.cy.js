describe('Listas', () => {
    it('Criar uma lista', () => {
        cy.visit('http://127.0.0.1:5500/frontEnd/index.html')

        cy.get('#produtoID').type(4)
        cy.get('#mercadoID').type(4)
        cy.get('#adicionarLista > button').click()
        cy.get('[onclick="fazerRequisicaoLista()"]').click()
    });
});
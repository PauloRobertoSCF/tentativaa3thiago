describe('Produtos', () => {
    it('Criar um produto', () => {
        cy.visit('http://127.0.0.1:5500/frontEnd/index.html')

        cy.get('[onclick="fazerRequisicaoProduto()"]').click()

        cy.get('#nomeProduto').type("TESTE PRODUTO")
        cy.get('#quantidade').type(666)
        cy.get('#preco').type(222)
        cy.get('#adicionarProduto > button').click()
        cy.get('[onclick="fazerRequisicaoProduto()"]').click()
    });

    it('Deletar um produto', () => {
        cy.visit('http://127.0.0.1:5500/frontEnd/index.html')

        cy.get('[onclick="fazerRequisicaoProduto()"]').click()

        cy.get('[onclick="deletarProduto(1)"]').click()
        cy.get('[onclick="fazerRequisicaoProduto()"]').click()
    });

    it('Atualizar um produto', () => {
        cy.visit('http://127.0.0.1:5500/frontEnd/index.html')

        cy.get('[onclick="fazerRequisicaoProduto()"]').click()

        cy.get(':nth-child(4) > :nth-child(5) > center > [style="margin-left: 10px;"]').click()
        cy.get('#nomeProdutoatualizar').clear()
        cy.get('#nomeProdutoatualizar').type("ATUALIZAR TESTE PRODUTO")
        cy.get('#quantidadeatualizar').clear()
        cy.get('#quantidadeatualizar').type(1234)
        cy.get('#precoatualizar').clear()
        cy.get('#precoatualizar').type(5678)
        cy.get('#atualizarProduto > button').click()
        cy.get('[onclick="fazerRequisicaoProduto()"]').click()
    });
});
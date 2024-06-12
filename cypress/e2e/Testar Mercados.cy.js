describe('Mercados', () => {
    it('Criar um mercado', () => {
        cy.visit('http://127.0.0.1:5500/frontEnd/index.html')

        cy.contains('Fazer listagem de Mercados').click()

        cy.get('#nomeMercado').type("TESTE MERCADO")
        cy.get('#adicionarMercado > button').click()
        cy.get('[onclick="fazerRequisicaoMercado()"]').click()
    });

    it('Deletar um mercado', () => {
        cy.visit('http://127.0.0.1:5500/frontEnd/index.html')

        cy.get('[onclick="fazerRequisicaoMercado()"]').click()

        cy.get('[onclick="deletarMercado(1)"]').click()
        cy.get('[onclick="fazerRequisicaoMercado()"]').click()
    });

    it('Atualizar um mercado', () => {
        cy.visit('http://127.0.0.1:5500/frontEnd/index.html')

        cy.get('[onclick="fazerRequisicaoMercado()"]').click()

        cy.get(':nth-child(2) > :nth-child(3) > center > [style="margin-left: 10px;"]').click()
        cy.get('#nomeMercadoatualizar').clear()
        cy.get('#nomeMercadoatualizar').type("ATUALIZAR TESTE MERCADO")
        cy.get('#atualizarMercado > button').click()
        cy.get('[onclick="fazerRequisicaoMercado()"]').click()
    });
});
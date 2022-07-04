function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de R$${saldoFinal.toFixed(2)} reais`;
}

lista = [
	{
		preco: 2.99,
		nome: 'maçã',
	},
	{
		preco: 30.50,
		nome: 'roupa',
	},
	{
		preco: 25.99,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));
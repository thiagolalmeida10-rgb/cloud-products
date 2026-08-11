"use client"

const produtos = [
	{
		id: 1,
		nome: "Notebook",
		preco: 2500
	},
	{
		id: 2,
		nome: "Mouse",
		preco: 120
	},
	{
		id: 3,
		nome: "Teclado",
		preco: 250
	}
]

export default function Home() {
	return (
		<main>
			<h1>Cloud Products</h1>

			<h1>Catalogo de Produtos</h1>

			<button>Novo Produto</button>

			<section>
				{produtos.map((produto)=>(
					<div key={produto.id}>
						<h2>{produto.nome}</h2>

						<p>R${produto.preco}</p>
					</div>
				))}
			</section>
		</main>
	);
}

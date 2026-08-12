type Produto = {
  id: number;
  nome: string;
  preco: number;
};

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

export default async function Home() {

	const response = await fetch(
    "https://cloud-products.gustavosoftex.workers.dev/api/produtos",
    {
      cache: "no-store",
    }
  );

  const produtos: Produto[] = await response.json();

	return (
		<main style={{ padding: "40px" }}>
      <h1>Cloud Products</h1>

      <h2>Produtos</h2>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {produtos.map(
            (produto: {
              id: number;
              nome: string;
              preco: number;
            }) => (
              <li key={produto.id}>
                {produto.nome} - R$ {produto.preco}
              </li>
            )
          )}
        </ul>
      )}
    </main>
	);
}

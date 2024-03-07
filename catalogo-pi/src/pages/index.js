import Produto from "@/components/Produto";
import Menu from "@/components/Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";


export default function Home() {

  const [listaProduto, setListaProduto] = useState([]);
  const [ListaProdutoFiltrado, setListaProdutoFiltrado] = useState([]);
  const [listaPedido, setListaPedido] = useState([])
  function removerItemDoCarrinho(idproduto) {
    const novoCarrinho = listaPedido.filter(item => item.id !== idproduto);
    setListaPedido(novoCarrinho);
}

  useEffect(() => {
    axios.get('https://localhost:7111/api/Produto/ListaAsync').then((resp) => {
      setListaProduto(resp.data);
      setListaProdutoFiltrado(resp.data);
    })
  }, []);
  function handlePesquisa(filtro) {
    const valorFiltro = filtro.target.value

    const filtrado = listaProduto.filter((dado) =>
    dado.nome.toLowerCase().includes(valorFiltro.toLowerCase()))

    setListaProdutoFiltrado(filtrado)
  }
  return (

    <div className="marginsuperior">
      <Menu pesquisar={handlePesquisa} listaPedido={listaPedido} removerItemDoCarrinho={removerItemDoCarrinho} />
      <div className=" container-fluid mt-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {ListaProdutoFiltrado.map((dado, index) =>
            <Produto
              key={index}
              index={index}
              id={dado.id} 
              nome={dado.nome}
              imagem={dado.imagem}
              descricao={dado.descricao}
              disponivel={dado.disponivel}
              novidade={dado.novidade}
              preco={dado.preco}
              addItemPedido={setListaPedido} listaPedido={listaPedido}
            />)
          }
          <div className="margininferior">
            <Footer />
          </div>

        </div>
      </div>
    </div>

  );
}

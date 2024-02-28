import Produto from "@/components/Produto";
import Menu from "@/components/Menu";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  const [listaProduto, setListaProduto] = useState([])

  useEffect(() => {
    axios.get('https://localhost:7111/api/Produto/ListaAsync')
      .then(resp => setListaProduto(resp.data)
      )
  }, [])
  return (
    <div>
      <Menu/>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {
            listaProduto.map((dado, index) => <Produto
              key={index}
              nome={dado.nome}
              descricao={dado.descricao}
              disponivel={dado.disponivel}
              novidade={dado.novidade}
              preco={dado.preco}
            />)
          }


        </div>
      </div>
    </div>
  );
}

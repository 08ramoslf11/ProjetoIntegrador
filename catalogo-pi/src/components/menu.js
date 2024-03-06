import Image from "next/image";
import Link from "next/link";
import ItemPedido from "./ItemPedido";

export default function Menu(props) {
     console.log('menu',props.listaPedido)


    return (
        <nav className="fixo navbar bg-primary text-white" data-bs-theme="dark">

            <Link className="Menu ms-4" href="/">
                <h4>
                    Menu
                </h4>
            </Link>
            <Link className="Cadastro ms-4" href={"/cadastro"}>
                <h4>
                    Cadastro
                </h4>
            </Link>
            <a className="insta" href="https://www.instagram.com/ramoslf.11/">
                <Image alt="" src={"/assets/insta.png"} width={35} height={35} />
            </a>
            <div >
                <input type="text" className="form-control input"></input>
                <button className="ms-2">Busca</button>
            </div>
            <button className="carrinho me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <Image alt="" src={"/assets/carrinho.png"} width={35} height={35} />
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title " id="offcanvasExampleLabel">Seu Pedido </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                    {
                props.listaPedido.map((dado, index) => <ItemPedido
                key={index}
                nome={dado.nome}
                imagem={dado.imagem}
                preco={dado.preco} 
              />)
            }
                    </div>
                    <div className="dropdown text-center">
                        <button className="btn btn-secondary " type="button" data-bs-toggle="dropdown">
                            Finalizar pedido
                        </button>

                    </div>
                </div>
            </div>
        </nav>

    )
}
import Image from "next/image";

export default function ItemPedido(props) {

    return (
        <div className="Pedidocompra">
            <div className="card shadow-sm h-100">
                <div className="text-center card-body">
                    <img alt="" src={props.imagem} width={"auto"} height={200} className="larguraImg" />.
                    <h2>{props.nome}</h2>
                </div>
                <div className="text-body-secondary ">
                    <h3 className=" text-end">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.preco)}</h3>
                </div>
                <div className="remover p-2">
                    <button onClick={() => {
                        props.removerItemDoCarrinho(props.id);
                    }} className="Compra ">
                        <Image className="" src={"/assets/lixo.png "} width={50} height={35} />
                    </button>
                </div>
            </div>
        </div>

    )
}



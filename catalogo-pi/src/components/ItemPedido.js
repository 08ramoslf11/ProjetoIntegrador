export default function ItemPedido(props) {
    return (
        <div className="col-sm-6 col-md-4 col-xl-4">
            <div className="card shadow-sm p-4 h-100">
                <div className="text-center card-body">
                    <img alt="" src={props.imagem} width={"auto"} height={200} className="larguraImg" />.
                    <h2>{props.nome}</h2>
                </div>
                <div className="text-body-secondary mt-2">
                    <h3 className=" text-end">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.preco)}</h3>
                </div>
            </div>
        </div>

    )
}



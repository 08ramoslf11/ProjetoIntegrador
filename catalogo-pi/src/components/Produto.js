import Image from "next/image";


export default function Produto(props) {

    // function adicionar(){
    //     return(

    //     )
    // }
    return (

        <div className="col-sm-6 col-md-4 col-xl-4">
            <div className="card shadow-sm p-4">
                <div className="text-center ">
                    <img src={props.imagem} width={"auto"} height={200} />.
                    <h2>{props.nome}</h2>
                    <p>{props.descricao}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        {
                            props.disponivel == false
                                ? <span className="badge text-bg-secondary">Indisponivel</span>
                                : null
                        }
                        {
                            props.disponivel == true

                                ? < span className="badge text-bg-success">Novidade</span>
                                : null
                        }
                    </div>
                    <div className="text-body-secondary mt-2">
                        <h3 className=" text-end">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.preco)}</h3>

                        <button onClick="adicionar" className="Compra text-start">
                            <Image src={"/assets/carrinhobranco.png "} width={50} height={35} />
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}
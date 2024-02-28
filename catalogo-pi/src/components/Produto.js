import Image from "next/image";

export default function Produto(props) {
    return (

        <div className="col-3">
            <div className="card shadow-sm p-4">
                <div className="text-center ">
                    <Image src={"/assets/Air-Jordan-4.png"} width={250} height={150} />.
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
                    <div className="text-end">
                        <h3 className="text-body-secondary mt-2">{props.preco}</h3>
                    </div>
                </div>
            </div>
        </div >

    )
}
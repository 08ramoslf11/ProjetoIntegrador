import CustominputLabel from "@/components/CustominputLabel";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import handler from "./api/hello";
import axios, { Axios } from "axios";
import { useState } from "react";

export default function cadastro() {

    const [dadosProduto, setdadosProduto] = useState(())

function handlerSalvar()
{
    //enviaremos o post para a API
    axios.post("https://localhost:711/api/produto",dadosProduto)
    .then(res => console.log(res))
}

    return (
        <>
            <Menu />
            <div className="marginsuperior container-fluid">
                <div className="row">
                    <CustominputLabel id="nome" texto="Nome" col="8" />
                    <CustominputLabel id="preco" texto="Preço" col="8" />
                    <CustominputLabel id="descricao" texto="Descrição" col="12" />
                    <CustominputLabel id="imagem" texto="URL da Imagem" col="12" />
                    <CustominputLabel id="disponivel" texto="Disponivel" col="6" />
                    <CustominputLabel id="novidade" texto="Novidade" col="6" />
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <button className="btn btn-primary" onClick={handlerSalvar}>Salvar</button>
                    </div>
                </div>
            </div>
            <div className="margininferior">
                <Footer />
            </div>
        </>
    )
}
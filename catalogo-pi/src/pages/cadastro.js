import CustominputLabel from "@/components/CustominputLabel";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import handler from "./api/hello";
import axios, { Axios } from "axios";
import { useState } from "react";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import CustomCheckboxLabel from "@/components/CustomCheckboxLabel";

export default function cadastro() {

    const [dadosProduto, setdadosProduto] = useState({

        id: 0,
        nome: "",
        descricao: "",
        preco: 0,
        novidade: true,
        disponivel: true
    })


    function handlerSalvar() {
        console.log(dadosProduto)
        //enviaremos o post para a API
        axios.post("https://localhost:711/api/produto", dadosProduto)
            .then(res => console.log(res))
    }

    function handleChange(e) {
        console.log(e.target)
        // console,log(e.target.id)
        if (e.target.type == "checkbox") {
            dadosProduto[e.target.id] = e.target.checked
        } else {
            dadosProduto[e.target.id] = e.target.value
        }

        setdadosProduto(dadosProduto)

    }
    return (
        <div className="Cadastropage">
            <Menu />
            <div className="marginsuperior container-fluid">
                <div className="row">
                    <CustominputLabel id="nome" onChange={handleChange} texto="Nome" col="8" />
                    <CustominputLabel id="preco" onChange={handleChange} texto="Preço" col="8" />
                    <CustomTextAreaLabel id="descricao" onChange={handleChange} texto="Descrição" col="12" />
                    <CustominputLabel id="imagem" onChange={handleChange} texto="URL da Imagem" col="12" />
                    <CustomCheckboxLabel id="disponivel" onChange={handleChange} texto="Disponivel" col="6" />
                    <CustomCheckboxLabel id="novidade" onChange={handleChange} texto="Novidade" col="6" />
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
        </div>
    )
}
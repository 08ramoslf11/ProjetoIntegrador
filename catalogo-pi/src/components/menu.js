import Image from "next/image";
import Link from "next/link";

export default function Menu() {



    return (
        <nav className="fixo navbar bg-primary text-white" data-bs-theme="dark">

            <Link className="Menu ms-4" href="/">Menu</Link>
            <h2>Cadastro</h2>
            <a className="insta" href="https://www.instagram.com/ramoslf.11/">
                <Image src={"/assets/insta.png"} width={35} height={35} />
            </a>
            <div >
            <input type="text" className="form-control input"></input> 
            <button className="ms-2">Busca</button>
            </div>
            <button className="carrinho me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <Image src={"/assets/carrinho.png"} width={35} height={35} />
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title " id="offcanvasExampleLabel">Seu Pedido </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        {/*script sera chamado e vai puxar informações*/}
                    </div>
                    <div class="dropdown text-center">
                        <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown">
                           Finalizar pedido
                        </button>

                    </div>
                </div>
            </div>



        </nav>
    )
}
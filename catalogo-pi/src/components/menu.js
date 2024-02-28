import Image from "next/image";
import Link from "next/link";

export default function Menu() {



    return (
        <nav class="navbar bg-primary text-white" data-bs-theme="dark">

            <Link className="Menu" href="/">Menu</Link>
            <h2>Cadastro</h2>
            <a className="insta" href="https://www.instagram.com/ramoslf.11/">
                <Image src={"/assets/insta.png"} width={35} height={35} />
            </a>
            <button className="carrinho" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <Image src={"/assets/carrinho.png"} width={35} height={35} />
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        {/*script sera chamado e vai puxar informações*/}
                    </div>
                    <div class="dropdown mt-3">
                       {/*  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                           !!Finalizar pedido!!
                        </button>*/}

                    </div>
                </div>
            </div>
            <button>Busca</button>


        </nav>
    )
}
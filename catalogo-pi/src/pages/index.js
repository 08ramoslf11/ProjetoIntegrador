import Produto from "@/components/Produto";

export default function Home() {
  return (
   <Produto>
     <div className="Tenis">
            <div className="Jordan">
            <Image src={"/assets/Air-Jordan-4.png"} width={250} height={150} />
            </div>
            <div className="spawn">
                <Image src={"/assets/spawn-3.png"} width={250} height={200} />
            </div>
            <div className="kobe">
                <Image src={"/assets/kobe-5.png"} width={250} height={150} />
            </div>
        </div>
   </Produto>
  );
}

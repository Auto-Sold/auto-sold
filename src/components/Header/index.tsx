import { useContext } from "react";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { HeaderStyle } from "./styles";


const Header = () => {
    const { announceModal, setAnnounceModal } = useContext(AnnounceContext)

    return (
        <HeaderStyle>
            <div className="box">
                <div>
                    <h1>Velocidade e experiência em um lugar feito para você</h1>
                    <h2>Um ambiente feito para você explorar o seu melhor</h2>
                </div>
                <div className="divButton"><button>
                    <p>Carros</p>
                </button><button>
                        <p>Motos</p>
                    </button>
                    {/*⬇⬇⬇⬇BOTÃO PARA ANUNCIAR UM VEÍCULO⬇⬇⬇⬇⬇*/}
                    <button onClick={() => (
                        announceModal ?
                            setAnnounceModal(false) : setAnnounceModal(true)
                    )}>
                        Criar anúncio
                    </button>

                </div>

            </div>
        </HeaderStyle >
    )
}
export default Header
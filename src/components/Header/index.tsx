import { HeaderStyle } from "./styles";


const Header = () => {




    
    return(
        <HeaderStyle>
            <div className="box">
                <div>
                    <h1>Velocidade e experiência em um lugar feito para você</h1>
                    <h2>Um ambiente feito para você explorar o seu melhor</h2>
                </div>
                <div className="divButton"><button>
                    <p>carros</p>
                    </button><button>
                        <p>motos</p>
                        </button></div>
            </div>
        </HeaderStyle>
    )
}
export default Header
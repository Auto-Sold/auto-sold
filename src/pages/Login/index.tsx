
import NavBar from "../../components/NavBar"

import { StyledContainerButton, StyledContainerInput, StyledForm, StyledLogin, StyledMain, StyledRegisterUser } from "./styles"

export const Login = () => {
    return (<>
        
        <StyledMain>
            <NavBar />
            
            <StyledLogin>
                <h1>Login</h1>
                <StyledForm>
                    <StyledContainerInput>
                        <label htmlFor="user">Usuário</label>
                        <input type="text" placeholder="Digitar usuário" />
                    </StyledContainerInput>

                    <StyledContainerInput>
                        <label htmlFor="password">Senha</label>
                        <input type="text" placeholder="Digitar senha" />
                    </StyledContainerInput>

                    <StyledContainerButton>
                        <button className="buttonForgotPassword"> esquecir minha senha</button>
                        <button className="buttonOpen">Entrar</button>
                    </StyledContainerButton>

                    <StyledRegisterUser>
                        <p>Ainda não possui conta?</p>
                        <button>Cadastrar</button>
                   </StyledRegisterUser>
                    

                </StyledForm>
           </StyledLogin>
        </StyledMain>
        </>
    )
}

import NavBar from "../../components/NavBar"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { motion } from "framer-motion"

import { StyledContainerButton, StyledContainerInput, StyledForm, StyledLogin, StyledMain, StyledRegisterUser } from "./styles"

import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { API } from "../../api";
import {  useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {Register} from "../Register"
interface IOnSubmitFunctionProps {
    
    email?: string;
    password?: string;
    
  }
export const ResetPassword = () => {

    const { setObjUser, objUser, login } = useContext(userContext)
    const navigate = useNavigate();
    
    
    const loginSchema = yup.object().shape({
        password: yup
        .string()
        .required("Senha obrigatória."),
        passwordConfirm: yup
        .string()
        .required("O campo senha é obrigatório")
        .oneOf([yup.ref("password")], "A senhas não são iguais"),
        });

    const { register, handleSubmit, formState: { errors } } = useForm<IOnSubmitFunctionProps>({
        resolver: yupResolver(loginSchema)
    })
    
    const resetPassworda = async () => {
       
    }
    return (<>
        
        <StyledMain>
            <NavBar />
            
            <StyledLogin
                as={motion.main}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}>
                <h1>Login</h1>
                <StyledForm onSubmit={handleSubmit()}>

                    <StyledContainerInput>
                        <label >Senha</label>
                        <input type="password" placeholder="Digitar senha" {...register("password")} />
                        <span>{ errors.password?.message }</span>
                    </StyledContainerInput>

                    <StyledContainerInput>
                        <label >Senha</label>
                        <input type="passwordConfirm" placeholder="Confirme a senha" {...register("password")} />
                        <span>{ errors.password?.message }</span>
                    </StyledContainerInput>

                    <StyledContainerButton>
                        <button className="buttonForgotPassword"> esquecir minha senha</button>
                        <button className="buttonOpen" type="submit" >Entrar</button>
                    </StyledContainerButton>

                    <StyledRegisterUser>
                        <p>Ainda não possui conta?</p>
                        <button onClick={()=>navigate("/register")}>Cadastrar</button>
                   </StyledRegisterUser>
                    

                </StyledForm>
           </StyledLogin>
        </StyledMain>
        </>
    )
}
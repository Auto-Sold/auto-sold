
import NavBar from "../../components/NavBar"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { motion } from "framer-motion"

import { StyledContainerButton, StyledContainerInput, StyledForm, StyledLogin, StyledMain, StyledRegisterUser } from "./styles"

import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

import {  useNavigate } from "react-router-dom";

interface IOnSubmitFunctionProps {
    
    email?: string;
    password?: string;
    
  }
export const Login = () => {

    const { setObjUser, objUser, login } = useContext(userContext)
    const navigate = useNavigate();
    
    
    const loginSchema = yup.object().shape({
        email: yup.string().required("Email Obrigatório!").email(),
        password: yup.string().required("Senha obrigatória."),
        });

    const { register, handleSubmit, formState: { errors } } = useForm<IOnSubmitFunctionProps>({
        resolver: yupResolver(loginSchema)
    })
    
   
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
                <StyledForm onSubmit={handleSubmit(login)}>
                    <StyledContainerInput>
                        <label htmlFor="user">Email</label>
                        <input type="text" placeholder="Digitar email" {...register("email")} />
                        <span>{ errors.email?.message }</span>
                       
                    </StyledContainerInput>

                    <StyledContainerInput>
                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder="Digitar senha" {...register("password")} />
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
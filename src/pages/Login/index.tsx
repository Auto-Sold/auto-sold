
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
import { dropIn } from "../../components/AnnounceModal";

interface IOnSubmitFunctionProps {
    
    email?: string;
    password?: string;
    
  }
export const Login = () => {

    const { setObjUser, objUser } = useContext(userContext)
    const navigate = useNavigate();
    
    
    const loginSchema = yup.object().shape({
        email: yup.string().required("Email Obrigatório!").email(),
        password: yup.string().required("Senha obrigatória."),
        });

    const { register, handleSubmit, formState: { errors } } = useForm<IOnSubmitFunctionProps>({
        resolver: yupResolver(loginSchema)
    })
    
    const onSubmit = (data: object) => { 
        API.post("/login", data).then( (res) => {
           
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", res.data.token)

            const token = window.localStorage.getItem("@TOKEN")
            API.defaults.headers.common.Authorization = `Bearer ${token}`

            const decoded = jwtDecode(token!)
            const { id }: any = decoded
            window.localStorage.setItem("@ID", id)


            if (res.status == 200) {
                navigate("/")
           }

            
        }).catch((err) => {
            console.log(err);
        })
    }
    return (<>
        
        <StyledMain>
            <NavBar />
            
            <StyledLogin
                as={motion.form}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}>
                <h1>Login</h1>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
                        <button>Cadastrar</button>
                   </StyledRegisterUser>
                    

                </StyledForm>
           </StyledLogin>
        </StyledMain>
        </>
    )
}
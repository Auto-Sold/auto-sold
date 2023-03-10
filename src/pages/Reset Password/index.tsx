
import NavBar from "../../components/NavBar"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { motion } from "framer-motion"

import { StyledContainerButton, StyledContainerInput, StyledForm, StyledLogin, StyledMain, StyledRegisterUser } from "./styles"

import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { API } from "../../api";
import {  useNavigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {Register} from "../Register"
export interface IResetPassword {
    
    password: string;
    passwordConfirm: string;
  }
export const ResetPassword = () => {

    const { setObjUser, objUser, login, resetPassword } = useContext(userContext)
    const navigate = useNavigate();
    const {token} = useParams()
    console.log(token);
    
    const loginSchema = yup.object().shape({
        password: yup
        .string()
        .required("Senha obrigatória."),
        passwordConfirm: yup
        .string()
        .required("O campo senha é obrigatório")
        .oneOf([yup.ref("password")], "A senhas não são iguais"),
        });

    const { register, handleSubmit, formState: { errors } } = useForm<IResetPassword>({
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
                <h1>Defina uma nova senha</h1>
                <StyledForm onSubmit={handleSubmit((data)=>resetPassword(data, token))}>

                    <StyledContainerInput>
                        <label >Nova Senha</label>
                        <input type="password" placeholder="Digitar senha" {...register("password")} />
                        <span>{ errors.password?.message }</span>
                    </StyledContainerInput>

                    <StyledContainerInput>
                        <label >Confirme Nova Senha</label>
                        <input type="password" placeholder="Confirme a senha" {...register("passwordConfirm")} />
                        <span>{ errors.passwordConfirm?.message }</span>
                    </StyledContainerInput>

                    <StyledContainerButton>
                        <button className="buttonOpen" type="submit" >Mudar Senha</button>
                    </StyledContainerButton>                    

                </StyledForm>
           </StyledLogin>
        </StyledMain>
        </>
    )
}
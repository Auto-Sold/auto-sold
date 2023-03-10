
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
import { ISendResetPass } from "../../interface";



export const SendResetPassword = () => {

    const { setObjUser, objUser, login, sendResetPassword  } = useContext(userContext)
    const navigate = useNavigate();
    
    
    const loginSchema = yup.object().shape({
        email: yup
        .string()
        .required("Senha obrigatória.")
        });

    const { register, handleSubmit, formState: { errors } } = useForm<ISendResetPass>({
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
                <h1>Digite seu e-mail</h1>
                <StyledForm onSubmit={handleSubmit(sendResetPassword)}>

                    <StyledContainerInput>
                        <label >E-mail</label>
                        <input type="email" placeholder="Digitar e-mail" {...register("email")} />
                        <span>{ errors.email?.message }</span>
                    </StyledContainerInput>

                    
                    <StyledContainerButton>
                        <button className="buttonOpen" type="submit" >Enviar</button>
                    </StyledContainerButton>

                </StyledForm>
           </StyledLogin>
        </StyledMain>
        </>
    )
}
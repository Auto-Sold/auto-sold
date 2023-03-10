import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import {  StyledFormUpdateUser, StyledMainUser} from "./styles";
import { useContext, useState } from "react";
import { userContext } from "../../../contexts/userContext"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackDrop from "../../BackDrop";
import { ModalDeleteUser } from "../ModalDeleteUser";




export interface IOnSubmitFunction{
    
        completeName: string,
        email: string,
        cpf: string,
        telephone: string,
        dateBirth: string,
        bio: string,
        zipCode: string,
        state: string,
        city: string,
        street: string,
        number: number,
        complement: string,
        typeCount: string,
        isSeller: boolean,
        password: string,
        passwordConfirmation:string
        
        
    
}



export const EditPerfil = () => {
    const [typeCount, setTypeCount] = useState<string>("")
    const { setModalUpdateUser, updateUser, objUser, modalDeleteUserOpen, setModalDeleteUserOpen, open, close } = useContext(userContext)
    
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        completeName: yup.string().required("Nome completo necessário"),
        email: yup.string().required("Email necessário"),
        telephone: yup.string().required("Celular necessária"),
        dateBirth: yup.string().required("Data de aniversário necessária"),
        cpf: yup.string().required("Cpf necessária"),
        bio: yup.string().required("Bio necessária"),
        complement: yup.string().required("Complement necessária"),
        zipCode: yup.string().required("Cep necessária"), 
        number: yup.number().required("Numero necessária"),
        city: yup.string().required("Cidade necessária"),
        state: yup.string().required("Estado necessária"),
        street: yup.string().required("Rua necessária"),
        password: yup.string().required('Password is required'),
        passwordConfirmation: yup.string().required().oneOf([yup.ref('password')], 'Passwords must match'),
    })
           
    

    const { register, handleSubmit, formState: { errors } } = useForm<IOnSubmitFunction>({
        resolver: yupResolver(formSchema), defaultValues: {
            completeName: objUser.completeName,
            email: objUser.email,
            cpf: objUser.cpf,
            telephone: objUser.telephone,
            dateBirth: objUser.dateBirth,
            bio: objUser.bio,
            zipCode: objUser.zipCode,
            state: objUser.state,
            city: objUser.city,
            street: objUser.street,
            number: objUser.number,
            complement: objUser.complement,
            typeCount: objUser.typeCount,
            isSeller:objUser.isSeller,
            password: objUser.password,
            passwordConfirmation:objUser.passwordConfirmation
        }
    })
    const idUser = window.localStorage.getItem("@ID")
    
    const onSubmit = (data: IOnSubmitFunction) => {
        

        data['typeCount'] = typeCount
        const objUser = { ...data }      
        
         updateUser( objUser, idUser! )
        

    }
    
    return (
        <BackDrop setState={setModalUpdateUser}>  
            <StyledMainUser onClick={(e) => e.stopPropagation()}>
                <StyledFormUpdateUser onSubmit={handleSubmit(onSubmit)}
                    as={motion.form}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    transition={{ duration: 0.6 }}>
                        <h3 className="title_StyledForm">Cadastro</h3>
                        <h5 className="subtitle_StyledForm">Informações pessoais</h5>
                        <div>
                            <label htmlFor="completeName">Nome</label>
                            <input type="text" placeholder="Ex: Samuel Leão" {...register("completeName")} />
                            <span>{ errors.completeName?.message }</span>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Ex: samuel@kenzie.com.br" {...register("email")} />
                            <span>{ errors.email?.message }</span>
                            
                            <label htmlFor="cpf">Cpf</label>
                            <input type="text" placeholder="000.000.000-00" {...register("cpf")} />
                            <span>{errors.cpf?.message}</span>
                            
                            <label htmlFor="telephone">Celular</label>
                            <input type="text" placeholder="(DDD) 90000-0000" {...register("telephone")} />
                            <span>{errors.telephone?.message}</span>
                            
                            <label htmlFor="dateBirth">Data de nascimento</label>
                            <input type="text" placeholder="00/00/00" {...register("dateBirth")} />
                            <span>{ errors.dateBirth?.message }</span>

                            <label htmlFor="bio">Descrição</label>
                            <input type="text" placeholder="Digitar descrição" {...register("bio")} />
                            <span>{ errors.bio?.message }</span>
                                    
                        </div>
                            
                        <h5 className="subtitle_StyledForm">Informações de endereço</h5>
                        <div>
                            <label htmlFor="cep">Cep</label>
                            <input type="text" placeholder="00000.000" {...register("zipCode")} />
                            <span>{ errors.zipCode?.message }</span>
                            <div className="containerEstate_StyledForm">
                                <div>
                                    <label htmlFor="state">Estado</label>
                                    <input type="text" placeholder="Digitar Estado" {...register("state")} />
                                    <span>{ errors.state?.message }</span>
                                </div>
                                <div>
                                    <label htmlFor="city">Cidade</label>
                                    <input type="text"  placeholder="Digitar Cidade" {...register("city")} />
                                    <span>{ errors.city?.message }</span>
                                </div>
                            </div>
                            <label htmlFor="street">Rua</label>
                            <input type="text" placeholder="Digitar Rua" {...register("street")} />
                            <span>{ errors.street?.message }</span>
                            <div className="containerNumber_StyledForm">
                                <div>
                                    <label htmlFor="number">Número</label>
                                    <input type="number"  placeholder="Digitar número" {...register("number")} />
                                    <span>{ errors.number?.message }</span>
                                </div>
                                <div>
                                    <label htmlFor="complement">Complemento</label>
                                    <input  type="text" placeholder="Ex: apart 307" {...register("complement")} />
                                    <span>{ errors.complement?.message }</span>
                                </div>
                            </div>
                            <h5 className="subtitle_StyledForm">Tipo de conta</h5>
                            <div className="containerButton" >
                                <input type="button" value={"Comprador"} onClick={()=>{setTypeCount("Comprador")}} />
                                <input type="button" value={"Anunciante"} onClick={()=>{setTypeCount("Anunciante")}} />
                            </div>
                            
                            <label htmlFor="password">Senha</label>
                            <input type="text" placeholder="Digitar senha" {...register("password")} />
                            <span>{errors.password?.message}</span>
                            
                            <label  htmlFor="passwordConfirmation">Confirmar Senha</label>
                            <input type="text" placeholder="Digitar senha" {...register("passwordConfirmation")} />
                            <span>{ errors.passwordConfirmation?.message }</span>

                        </div>
                                
                    <button className="buttonRegister" type="submit" >Atualiza</button>
                    {modalDeleteUserOpen && <ModalDeleteUser titleHeader="Exluir usuário" paragraphBold="Tem certeza que deseja remover este anúncio?" paragraphNormal="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores." id={objUser.id!} />}
                    <button className="buttonDeleteUser" onClick={() => open()  }> Deletar minha conta </button>
                                
                    </StyledFormUpdateUser>
                </StyledMainUser>
               
        </BackDrop>
    )
}
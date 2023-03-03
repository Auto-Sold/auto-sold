import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm, StyledMain } from "./styles";
import NavBar from "../../components/NavBar";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



interface IOnSubmitFunction{
    
        completeName: string,
        email: "string",
        cpf: number,
        telephone: number,
        dateBirth: number,
        bio: string,
        cep: string,
        state: string,
        city: string,
        street: string,
        number: 0,
        complement: string,
        buyer: string,
        password: string,
        ConfirmPassword: string,
        advertiser: string
    
}
export const Register = () => {
    const { registerUser } = useContext(userContext)
    const navigate = useNavigate();
    

    const formSchema = yup.object().shape({
        announceType: yup.string().required("Tipo de anúncio necessário"),
        title: yup.string().required("Título necessário"),
        year: yup.string().required("Ano necessário"),
        km: yup.number().required("Quilometragem necessária"),
        price: yup.number().required("Preço necessário"),
        description: yup.string().required("Descrição necessária"),
        vehicleType: yup.string().required("Tipo de veículo necessário"),
        image: yup.string().required("Imagem necessária"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async (data:object) => {
        const statusCode = await registerUser(data)
        
        if (statusCode === 201) {
            navigate("/login")
        }
    }
    
    return (
        <StyledMain>  
            <NavBar/>
            <StyledForm onSubmit={handleSubmit(onSubmit)}
             as={motion.form}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0.5 }}
             transition={{ duration: 0.6 }}>
                    <h3 className="title_StyledForm">Cadastro</h3>
                    <h5 className="subtitle_StyledForm">Informações pessoais</h5>
                    <div>
                        <label>Nome</label>
                        <input placeholder="Ex: Samuel Leão" {...register("completeName")} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input placeholder="Ex: samuel@kenzie.com.br" {...register("email")} />
                    
                        <label>Cpf</label>
                        <input placeholder="000.000.000-00" {...register("cpf")} />
                    
                        <label>Celular</label>
                        <input placeholder="(DDD) 90000-0000" {...register("telephone")} />
                            
                        <label>Data de nascimento</label>
                        <input placeholder="00/00/00" {...register("dateBirth")} />
                    
                        <label>Descrição</label>
                        <input type="text" placeholder="Digitar descrição" {...register("bio")} />
                            
                    </div>
                    
                    <h5 className="subtitle_StyledForm">Informações de endereço</h5>
                    <div>
                        <label>Cep</label>
                        <input placeholder="00000.000" {...register("cep")} />
                        <div className="containerEstate_StyledForm">
                            <div>
                                <label>Estado</label>
                                <input placeholder="Digitar Estado" {...register("state")} />
                            </div>
                            <div>
                                <label>Cidade</label>
                                <input placeholder="Digitar Cidade" {...register("city")} />
                            </div>
                        </div>
                        <label>Rua</label>
                        <input placeholder="Digitar Rua" {...register("street")} />
                        <div className="containerNumber_StyledForm">
                            <div>
                                <label>Número</label>
                                <input placeholder="Digitar número" {...register("number")} />
                            </div>
                            <div>
                                <label>Complemento</label>
                                <input placeholder="Ex: apart 307" {...register("complement")} />
                            </div>
                        </div>
                        <h5 className="subtitle_StyledForm">Tipo de conta</h5>
                        <div className="containerButton" >
                        <input type="button" value={"Comprador"}  />
                        <input type="button" value={"Anunciante"} {...register("advertiser")} />
                        </div>
                    <label>Senha</label>
                    <input placeholder="Digitar senha" {...register("password")} />
                    <label>Confirmar Senha</label>
                    <input placeholder="Digitar senha" {...register("ConfirmPassword")} />
                
                    </div>
                        
                        <button className="buttonRegister" type="submit">Cadastrar</button>
                        
             </StyledForm>
        </StyledMain>
    )
}

 import {useForm} from "react-hook-form";
 import * as yup from "yup"
import { FormStyled, ContainerComment} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { IFormComment } from "../../interface";
import { useParams } from "react-router-dom";


const CreateComment = () => {
    const {idAnnounce} = useParams()
    
    const {postComments} = useContext(AnnounceContext)
    const formSchema = yup.object().shape({
        text: yup
        .string()
        .typeError("Insira um número válido")
        .required("Insira um comentário")
        .max(500),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormComment>({
        resolver: yupResolver(formSchema),
        defaultValues: {
            text: ""
        }
    });

    return(
        <div>
    <ContainerComment onSubmit={handleSubmit((data) =>postComments(idAnnounce, data))}>
        <label>
            <input type="text" placeholder={"Insira um comentário"}
            {...register("text")} />
            <span>{(errors.text?.message)}</span>
        </label>
      
        <button type="submit">Postar</button>
    </ContainerComment>
     
</div>
    );
}

export default CreateComment


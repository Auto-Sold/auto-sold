
 import {useForm} from "react-hook-form";
 import * as yup from "yup"
import { FormStyled } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { IFormComment } from "../../interface";


const CreateComment = (id: string) => {
    const {postComments} = useContext(AnnounceContext)
    const formSchema = yup.object().shape({
        textComent: yup
          .string()
          .typeError("Insira um número válido")
          .required("Insira um comentário")
          .length(500),
      });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormComment>({
        resolver: yupResolver(formSchema),
    });
    const onSubmitFunction = (data: IFormComment) => {
       
       const handleId = Object.values(id)[0];
       
       postComments(handleId, data )
        
       console.log(data);
      };
    return(
        <div>
    <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <label>
            <input type="text" placeholder={"Insira um comentário"}
            {...register("text")} />
            <span style={{ color: "red"}}>{(errors.text?.message)}</span>
        </label>
      
        <button type="submit">Postar</button>
    </FormStyled>
     
</div>
    );
}

export default CreateComment


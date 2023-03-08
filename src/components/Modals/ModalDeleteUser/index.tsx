import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../api";
import { userContext } from "../../../contexts/userContext";
import { IModalBase, ModalBase } from "../ModalBase";
import { StyledButtonCancel, StyledDeletdAd } from "../StyleButtonModal/styles";
import { StyledButtonDeleteUser } from "./style";

export const ModalDeleteUser = async ({ titleHeader, paragraphBold, paragraphNormal }: IModalBase, id: string) => {
    const { setModalDeleteUserOpen, modalDeleteUserOpen, close, open, deleteUserId } = useContext(userContext)
    const navigate = useNavigate();
    const statusCode = await deleteUserId(id)
    

    return (
        <ModalBase titleHeader={titleHeader} paragraphBold={paragraphBold}  paragraphNormal={paragraphNormal} setState={setModalDeleteUserOpen}>
             <StyledButtonCancel onClick={() => ( modalDeleteUserOpen == true ? close() : open())} >Cancelar</StyledButtonCancel>
            <StyledButtonDeleteUser onClick={() => { if(statusCode === 204){setModalDeleteUserOpen(true)} }  } >Excluir</StyledButtonDeleteUser>
        </ModalBase>
    )
}
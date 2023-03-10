import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../api";
import { userContext } from "../../../contexts/userContext";
import {  ModalBase } from "../ModalBase";
import { StyledButtonCancel, StyledDeletdAd } from "../StyleButtonModal/styles";
import { StyledButtonDeleteUser } from "./style";



export interface IModalUser {
    
    titleHeader: string;
    paragraphBold: string;
    paragraphNormal: string;  
    id: string;
    
}

export const ModalDeleteUser =  ({ titleHeader, paragraphBold, paragraphNormal,id }: IModalUser) => {
    const { setModalDeleteUserOpen, modalDeleteUserOpen, close, open, deleteUserId, setModalUpdateUser } = useContext(userContext)  

    return (
        <ModalBase titleHeader={titleHeader} paragraphBold={paragraphBold}  paragraphNormal={paragraphNormal} setState={setModalDeleteUserOpen}>
            <StyledButtonCancel onClick={() => ( modalDeleteUserOpen == true ? close() : open())} >Cancelar</StyledButtonCancel>
            <StyledButtonDeleteUser onClick={() =>  deleteUserId(id)} >Excluir</StyledButtonDeleteUser>
        </ModalBase>
    )
}
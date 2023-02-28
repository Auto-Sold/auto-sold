import { Dispatch, SetStateAction, useContext } from "react"
import { API } from "../../../api"
import { AnnounceContext } from "../../../contexts/AnnounceContext"
import { IModalBase, ModalBase } from "../ModalBase"
import { StyledButtonCancel, StyledDeletdAd } from "../StyleButtonModal/styles"

export const ModalDeleteAd = ({ titleHeader, paragraphBold, paragraphNormal }: IModalBase) => {
    const { modalDeleteAdOpen,setModalDeleteAdOpen, close, open } = useContext(AnnounceContext)
    return (
        <ModalBase titleHeader={titleHeader} paragraphBold={paragraphBold}  paragraphNormal={paragraphNormal} setState={setModalDeleteAdOpen}  >
            <StyledButtonCancel onClick={() => ( modalDeleteAdOpen == true ? close() : open())} >Cancelar</StyledButtonCancel>
            <StyledDeletdAd onClick={() => {API.delete(`/announce/:id`)}}>Sim, excluir anúncio</StyledDeletdAd>
        </ModalBase>
    )
} 
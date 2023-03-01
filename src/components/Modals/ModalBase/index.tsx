import { motion } from "framer-motion"
import { ReactNode, MouseEventHandler, useContext, Children, Dispatch, SetStateAction } from "react"
import { AnnounceContext } from "../../../contexts/AnnounceContext"
import { dropIn } from "../../AnnounceModal"
import BackDrop from "../../BackDrop"
import { StyledModal} from "./styles"

export interface IModalBase {
    
    titleHeader: string;
    paragraphBold: string;
    paragraphNormal: string;  
    
}

export interface IModalBasePrimary extends IModalBase{
    setState: Dispatch<SetStateAction<boolean>>;
    children?: any
}



export const ModalBase = ({titleHeader,paragraphBold,paragraphNormal, children, setState}:IModalBasePrimary) => {
    const { modalDeleteAdOpen, setModalDeleteAdOpen } = useContext(AnnounceContext)
    
    return (
    <BackDrop setState={setModalDeleteAdOpen}>
            <StyledModal
            as={motion.div}
                
             key="modalBase"
             variants={dropIn}
             onClick={(e) => e.stopPropagation()}
             initial= "hidden"
             animate= "visible"
             exit="exit">
                <div className="headerModal">
                <p>{titleHeader}</p>
                <button onClick={() =>setState(false) }>X</button>    
                </div>

                <div className="descriptionModal">
                    <p className="paragraphBoldModal">{paragraphBold}</p>
                    <p className="paragraphNormalModal">{paragraphNormal}</p>
                </div>
                <div className="buttonsModal">
                    {children}
                </div>
                
                
            </StyledModal>
        
    </BackDrop>
    )
}

// ( modalDeleteAdOpen == true ? close() : open())

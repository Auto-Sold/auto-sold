import { motion } from "framer-motion"
import { ReactNode, MouseEventHandler, useContext, Children } from "react"
import { AnnounceContext } from "../../../contexts/AnnounceContext"
import { dropIn } from "../../AnnounceModal"
import BackDrop from "../../BackDrop"
import { StyledModal} from "./styles"

interface IModalBase {
    
    titleHeader: string;
    paragraphBold: string;
    paragraphNormal: string;
    children: any
    
}



export const ModalBase = ({titleHeader,paragraphBold,paragraphNormal, children}:IModalBase) => {
    const { modalDeleteAdOpen, setModalDeleteAdOpen, close, open } = useContext(AnnounceContext)
    
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
                <button onClick={() => ( modalDeleteAdOpen == true ? close() : open())}>X</button>    
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


import { motion } from "framer-motion"
import { ReactNode, MouseEventHandler } from "react"
import { StyledModal} from "./styles"

interface IMessageModal {
    
    titleHeader: string,
    children: ReactNode,
    handClose: any


}

const dropIn = {
    hidden: {
        y:"-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transation: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 500,
        }
    },
    exit: {
        y:"100vh",
        opacity: 0,
    },
}
export const ModalBase = ({ titleHeader, children, handClose }: IMessageModal) => {
    
    return (
    <BackDrop onClick={handClose}>
        <motion.div
                variants={dropIn}
                onClick={(e) => e.stopPropagation()}
                className="modalBase"
                
        >
                
            <h3> { titleHeader }</h3>
            <button onClick={handClose} >X</button>
            {children}
        </motion.div>
        
    </BackDrop>
    )
}


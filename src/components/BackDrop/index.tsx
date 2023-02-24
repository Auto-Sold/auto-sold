import { motion } from "framer-motion"
import { Dispatch, ReactNode, SetStateAction } from "react"

export interface IBackDrop {
    children: ReactNode
    setState: Dispatch<SetStateAction<boolean>>;
}

const BackDrop = ({ children, setState }: IBackDrop) => {
    return (
        <motion.div className="backdrop"
            onClick={() => setState(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default BackDrop
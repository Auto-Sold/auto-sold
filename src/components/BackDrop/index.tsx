import { motion } from "framer-motion"
import { useContext } from "react"
import { AnnounceContext, IAnnounceProps } from "../../contexts/AnnounceContext"

const BackDrop = ({ children }: IAnnounceProps) => {
    const { setAnnounceModal } = useContext(AnnounceContext)

    return (
        <motion.div className="backdrop"
            onClick={() => setAnnounceModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default BackDrop
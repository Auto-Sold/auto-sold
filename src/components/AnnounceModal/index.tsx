import { motion } from "framer-motion"
import { useContext } from "react"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import BackDrop from "../BackDrop"

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

const AnnounceModal = () => {
    const { setAnnounceModal } = useContext(AnnounceContext)

    return (
        <BackDrop>
            <motion.div
                className="announce-modal"
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h1>testeeeee</h1>
                <h1>testeeeee</h1>
                <h1>testeeeee</h1>
                <h1>testeeeee</h1>
                <h1>testeeeee</h1>
            </motion.div>
        </BackDrop>
    )
}

export default AnnounceModal
import { motion } from "framer-motion"
import { useContext } from "react"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import BackDrop from "../BackDrop"
import * as yup from "yup"
import { IAnnounceData } from "../../interfaces"

export const dropIn = {
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
    const { postAnnouncement, setAnnounceModal } = useContext(AnnounceContext)

    const dados = {
        "announceType": "string2",
        "title": "string2",
        "year": "string2",
        "km": 50,
        "price": 20,
        "description": "string2",
        "vehicleType": "string2",
        "image": "string2"
    }

    const formSchema = yup.object().shape({
        // announceType: yup.string().required("Telefone necessário"),
        // title: yup.string().required("Telefone necessário"),
        // year: yup.string().required("Nome necessário")
    })

    const { register, handleSubmit, formState: { errors } } =
        useForm<IAnnounceData>({
            resolver: yupResolver(formSchema)
        })

    return (
        <BackDrop setState={setAnnounceModal}>
            <motion.div
                className="announce-modal"
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button onClick={
                    () => setAnnounceModal(false)}>X</button>
                <form onSubmit={handleSubmit(postAnnouncement)}>
                    <h1>testeeeee</h1>
                    <h1>testeeeee</h1>
                    <h1>testeeeee</h1>
                    <h1>testeeeee</h1>
                    <h1>testeeeee</h1>
                    <button type="submit">Criar</button>
                </form>
                {/* <button onClick={() => postAnnouncement(dados)}>aaaa</button> */}
            </motion.div>
        </BackDrop>
    )
}

export default AnnounceModal
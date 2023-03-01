import { motion } from "framer-motion"
import { useContext } from "react"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import BackDrop from "../BackDrop"
import * as yup from "yup"
import { IAnnounceData } from "../../interfaces"
import AnnounceFormStyle from "./styles"

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

    const formSchema = yup.object().shape({
        announceType: yup.string().required("Tipo de anúncio necessário"),
        title: yup.string().required("Título necessário"),
        year: yup.string().required("Ano necessário"),
        km: yup.number().required("Quilometragem necessária"),
        price: yup.number().required("Preço necessário"),
        description: yup.string().required("Descrição necessária"),
        vehicleType: yup.string().required("Tipo de veículo necessário"),
        image: yup.string().required("Imagem necessária"),
        galeryImage1: yup.string(),
        galeryImage2: yup.string(),
        galeryImage3: yup.string(),
        galeryImage4: yup.string(),
        galeryImage5: yup.string(),
        galeryImage6: yup.string()
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
                <div className="head">
                    <h4>Criar anuncio</h4>
                    <button onClick={
                        () => setAnnounceModal(false)}>X</button>
                </div>

                <AnnounceFormStyle onSubmit={handleSubmit(postAnnouncement)}>
                    <label>Tipo de anuncio</label>

                    <div className="announce-type">
                        <label className="sale">
                            <input id="sale-id" type="radio" value="Venda" {...register("announceType")} />
                            <label htmlFor="sale-id">Venda</label>
                        </label>
                        <label className="auction">
                            <input id="auction-id" type="radio" value="Leilão" {...register("announceType")} />
                            <label htmlFor="auction-id">Leilão</label>
                        </label>
                    </div>

                    <h5>Informações do veículo</h5>
                    <div>
                        <label>Título</label>
                        <input placeholder="Digitar título" {...register("title")} />
                    </div>
                    <div>
                        <label>Ano</label>
                        <input placeholder="Digitar ano" {...register("year")} />
                        <label>Quilometragem</label>
                        <input placeholder="0" {...register("km")} />
                        <label>Preço</label>
                        <input placeholder="Digitar preço" {...register("price")} />
                    </div>
                    <div>
                        <label>Descrição</label>
                        <input placeholder="Digitar descrição" {...register("description")} />
                    </div>
                    <label>Tipo de veículo</label>

                    <div className="announce-type">
                        <label className="car">
                            <input id="car-id" type="radio" value="Carro" {...register("vehicleType")} />
                            <label htmlFor="car-id">Carro</label>
                        </label>
                        <label className="bike">
                            <input id="bike-id" type="radio" value="Moto" {...register("vehicleType")} />
                            <label htmlFor="bike-id">Moto</label>
                        </label>
                    </div>

                    <div>
                        <label>Imagem da capa</label>
                        <input placeholder="Inserir URL da imagem" {...register("image")} />
                    </div>
                    <div>
                        <label>1° Imagem da galeria</label>
                        <input placeholder="Inserir URL da imagem" {...register("galeryImage1")} />
                        <label>2° Imagem da galeria</label>
                        <input placeholder="Inserir URL da imagem" {...register("galeryImage2")} />
                        <label>3° Imagem da galeria</label>
                        <input placeholder="Inserir URL da imagem" {...register("galeryImage3")} />
                        <label>4° Imagem da galeria</label>
                        <input placeholder="Inserir URL da imagem" {...register("galeryImage4")} />
                        <label>5° Imagem da galeria</label>
                        <input placeholder="Inserir URL da imagem" {...register("galeryImage5")} />
                        <label>6° Imagem da galeria</label>
                        <input placeholder="Inserir URL da imagem" {...register("galeryImage6")} />
                        {/* <button>Adicionar campo para imagem da galeria</button> */}
                    </div>
                    <span>{errors.title?.message}</span>
                    <div className="foot">
                        <button className="cancel" onClick={
                            () => setAnnounceModal(false)}>Cancelar</button>
                        <button className="create" type="submit">Cadastrar</button>
                    </div>

                </AnnounceFormStyle>
            </motion.div>
        </BackDrop>
    )
}

export default AnnounceModal
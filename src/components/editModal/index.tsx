import { motion } from "framer-motion";
import { useForm , FieldValues} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackDrop from "../BackDrop";
import * as yup from "yup";
import AnnounceFormStyle, { Header } from "./styles";
import { useContext, useState } from "react";
import { API } from "../../api";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { IAnnounceData } from "../../interface";
import { useNavigate } from "react-router-dom";

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
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
interface FormData {
  announceType: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicleType: string;
  image: string;
}

export const EditModal = (id:string) => {
  // const [open, setOpenEditModal] = useState(false);
  const {patchAnnounce,openEditModal, setOpenEditModal, uniqueVehicle} = useContext(AnnounceContext)
  const nav = useNavigate()
  const formSchema = yup.object().shape({
    announceType: yup.string().notRequired(),
    title: yup.string().notRequired(),
    year: yup.string().notRequired(),
    km: yup.number().notRequired(),
    price: yup.number().notRequired(),
    description: yup.string().notRequired(),
    vehicleType: yup.string().notRequired(),
    image: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      announceType: uniqueVehicle.announceType,
      title: uniqueVehicle.title,
      year: uniqueVehicle.year,
      km: uniqueVehicle.km,
      price: uniqueVehicle.price,
      description: uniqueVehicle.description,
      vehicleType: uniqueVehicle.vehicleType,
      image: uniqueVehicle.image,
    }
  });

  const token = window.localStorage.getItem("@TOKEN" as string)
  const handleId = Object.values(id)[0];

  const onSubmitFunction = (data: FieldValues) => {
    patchAnnounce(data, handleId)
  };

  return (
    <>
      <button onClick={() => setOpenEditModal(true)} className = "userPerfil">Editar an??ncio</button>
      {openEditModal && (
        <BackDrop setState={setOpenEditModal}>
          <motion.div
            className="announce-modal"
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Header className="head">
              <h4>Editar an??ncio</h4>
              <div className="button">
              <button onClick={() => setOpenEditModal(false)}>X</button>
              </div>
            </Header>

            <AnnounceFormStyle onSubmit={handleSubmit((data)=>patchAnnounce(data, handleId))}>
              <label>Tipo de anuncio</label>

              <div className="announce-type">
                <label className="sale">
                  <input
                    id="sale-id"
                    type="radio"
                    value="Venda"
                    {...register("announceType")}
                  />
                  <label htmlFor="sale-id">Venda</label>
                </label>
                <label className="auction">
                  <input
                    id="auction-id"
                    type="radio"
                    value="Leil??o"
                    {...register("announceType")}
                  />
                  <label htmlFor="auction-id">Leil??o</label>
                </label>
              </div>

              <h5>Informa????es do ve??culo</h5>
              <div>
                <label>T??tulo</label>
                <input placeholder="Digitar t??tulo" {...register("title")} />
              </div>
              <div>
                <label>Ano</label>
                <input placeholder="Digitar ano" {...register("year")} />
                <label>Quilometragem</label>
                <input placeholder="0" {...register("km")} />
                <label>Pre??o</label>
                <input placeholder="Digitar pre??o" {...register("price")} />
              </div>
              <div>
                <label>Descri????o</label>
                <input
                  placeholder="Digitar descri????o"
                  {...register("description")}
                />
              </div>
              <label>Tipo de ve??culo</label>

              <div className="announce-type">
                <label className="car">
                  <input
                    id="car-id"
                    type="radio"
                    value="Carro"
                    {...register("vehicleType")}
                  />
                  <label htmlFor="car-id">Carro</label>
                </label>
                <label className="bike">
                  <input
                    id="bike-id"
                    type="radio"
                    value="Moto"
                    {...register("vehicleType")}
                  />
                  <label htmlFor="bike-id">Moto</label>
                </label>
              </div>

              <div>
                <label>Imagem da capa</label>
                <input
                  placeholder="Inserir URL da imagem"
                  {...register("image")}
                />
              </div>
              {/*<span>{errors.title?.message}</span>*/}
              <div className="foot">
                <button className="cancel" onClick={() => setOpenEditModal(false)}>
                  Cancelar
                </button>
                <button className="create" type="submit">
                  Salvar
                </button>
              </div>
            </AnnounceFormStyle>
          </motion.div>
        </BackDrop>
      )}
    </>
  );
};
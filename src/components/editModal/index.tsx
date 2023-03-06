import { motion } from "framer-motion";
import { useForm , FieldValues} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackDrop from "../BackDrop";
import * as yup from "yup";
import AnnounceFormStyle from "./styles";
import { useContext, useState } from "react";
import { API } from "../../api";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { IAnnounceData } from "../../interface";

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
  const [open, setOpen] = useState(false);
  const {patchAnnounce} = useContext(AnnounceContext)

  const formSchema = yup.object().shape({
    announceType: yup.string(),
    title: yup.string(),
    year: yup.string(),
    km: yup.number(),
    price: yup.number(),
    description: yup.string(),
    vehicleType: yup.string(),
    image: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: FieldValues) => {
    const editData = {
      announceType: data.announceType,
      title: data.title,
      year: data.year,
      km: data.km,
      price: data.price,
      description: data.description,
      vehicleType: data.vehicleType,
      image: data.image,
    };
    const handleId = Object.values(id)[0];
   
   patchAnnounce(data, handleId)
    
   console.log(data);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className = "userPerfil">Editar anúncio</button>
      {open && (
        <BackDrop setState={setOpen}>
          <motion.div
            className="announce-modal"
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="head">
              <h4>Editar anúncio</h4>
              <button onClick={() => setOpen(false)}>X</button>
            </div>

            <AnnounceFormStyle onSubmit={handleSubmit(onSubmitFunction)}>
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
                    value="Leilão"
                    {...register("announceType")}
                  />
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
                <input
                  placeholder="Digitar descrição"
                  {...register("description")}
                />
              </div>
              <label>Tipo de veículo</label>

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
                <button className="cancel" onClick={() => setOpen(false)}>
                  Cancelar
                </button>
                <button className="create" type="submit">
                  Salvar alterações
                </button>
              </div>
            </AnnounceFormStyle>
          </motion.div>
        </BackDrop>
      )}
    </>
  );
};
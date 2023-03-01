import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackDrop from "../BackDrop";
import * as yup from "yup";
import AnnounceFormStyle from "./styles";
import { useState } from "react";
import { API } from "../../api";

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
  galleryImage1: string;
  galleryImage2: string;
}

const editModal = () => {
  const [open, setOpen] = useState(false);

  const formSchema = yup.object().shape({
    announceType: yup.string().required("Tipo de anúncio necessário"),
    title: yup.string().required("Título necessário"),
    year: yup.string().required("Ano necessário"),
    km: yup.number().required("Quilometragem necessária"),
    price: yup.number().required("Preço necessário"),
    description: yup.string().required("Descrição necessária"),
    vehicleType: yup.string().required("Tipo de veículo necessário"),
    image: yup.string().required("Imagem necessária"),
    galleryImage1: yup.string(),
    galleryImage2: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    const editData = {
      announceType: data.announceType,
      title: data.title,
      year: data.year,
      km: data.km,
      price: data.price,
      description: data.description,
      vehicleType: data.vehicleType,
      image: data.image,
      galleryImage1: data.galleryImage1,
      galleryImage2: data.galleryImage2,
    };

    API.patch("/editannounce", editData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });

    console.log(data);
  };

  return (
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
            <input placeholder="Inserir URL da imagem" {...register("image")} />
          </div>
          <div>
            <label>1° Imagem da galeria</label>
            <input
              placeholder="Inserir URL da imagem"
              {...register("galleryImage1")}
            />
            <label>2° Imagem da galeria</label>
            <input
              placeholder="Inserir URL da imagem"
              {...register("galleryImage2")}
            />
            <button>Adicionar campo para imagem da galeria</button>
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
  );
};

export default editModal;

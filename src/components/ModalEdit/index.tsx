import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm} from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  coverImage: string;
  galleryImage1: string;
  galleryImage2: string;
}

const schema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().positive().integer().required(),
  km: yup.number().positive().integer().required(),
  price: yup.number().positive().required(),
  description: yup.string().required(),
  coverImage: yup.string().required(),
  galleryImage1: yup.string(),
  galleryImage2: yup.string(),
});

function EditModal() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmitFunction = (data:FormData) => {
    const editData = {
      title: data.title,
      year: data.year,
      km: data.km,
      price: data.price,
      description: data.description,
      coverImage: data.coverImage,
      galleryImage1: data.galleryImage1,
      galleryImage2: data.galleryImage2,
    };

    axios.patch("http://localhost:3000", editData);

    console.log(data);
  };

  return (
    <>
      <button onClick={handleOpen}>Editar</button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.form
              className="modal"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleSubmit(onSubmitFunction)}
            >
              <h2>Editar Produto</h2>
              <label>
                Título:
                <input type="text" {...register("title")} />
                <span>{errors.title?.message}</span>
              </label>
              <label>
                Ano:
                <input type="number" {...register("year")} />
              </label>
              <label>
                Quilometragem:
                <input type="number" {...register("km")} />
              </label>
              <label>
                Preço:
                <input type="number" {...register("price")} />
              </label>
              <label>
                Descrição:
                <textarea {...register("description")} />

              </label>
              <label>
                Imagem da capa:
                <input type="text" {...register("coverImage")} />
              </label>
              <label>
                1 Imagem da galeria:
                <input type="text" {...register("galleryImage1")} />
              </label>
              <label>
                2 Imagem da galeria:
                <input type="text" {...register("galleryImage2")} />
              </label>
              <div className="modal-buttons">
                <button type="submit">Salvar</button>
                <button type="button" onClick={handleClose}>
                  Cancelar
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default EditModal;

import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm} from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { IAnnounceData } from "../../interfaces";


const schema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().positive().integer().required(),
  km: yup.number().positive().integer().required(),
  price: yup.number().positive().required(),
  description: yup.string().required(),
  image: yup.string().required(),
  galleryImage1: yup.string(),
  galleryImage2: yup.string(),
});

function EditModal(id:string) {
  const { register, handleSubmit, formState: { errors } } = useForm<IAnnounceData>({
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = useState(false);
  const {patchAnnounce} = useContext(AnnounceContext)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmitFunction = (data:IAnnounceData) => {
    patchAnnounce(data, id)
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
                <input type="text" {...register("image")} />
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

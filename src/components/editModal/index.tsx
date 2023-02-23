import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

function EditModal({ product }) {
  const { register, handleSubmit, setValue } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (data:any) => {
    console.log(data)
    setIsModalOpen(false);
  };

  const handleSaveAndClose = (data:any) => {
    handleSave(data);
    handleClose();
  };

  const onOpen = () => {
    setValue("title", product.title);
    setValue("year", product.year);
    setValue("mileage", product.mileage);
    setValue("price", product.price);
    setValue("description", product.description);
    setValue("coverImage", product.coverImage);
    setValue("galleryImage1", product.galleryImage1);
    setValue("galleryImage2", product.galleryImage2);
    setIsModalOpen(true);
  };

  return (
    <>
      <button onClick={onOpen}>Editar</button>
      <AnimatePresence>
        {isModalOpen && (
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
              onSubmit={handleSubmit(handleSaveAndClose)}
            >
              <h2>Editar Produto</h2>
              <label>
                Título:
                <input type="text" {...register("title")} />
              </label>
              <label>
                Ano:
                <input type="number" {...register("year")} />
              </label>
              <label>
                Quilometragem:
                <input type="number" {...register("mileage")} />
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

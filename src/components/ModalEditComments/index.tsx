import { useState } from "react";
import { motion } from "framer-motion";
import { API } from "../../api";
import { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";

function EditCommentModal({ comment }) {
  const [commentText, setCommentText] = useState(comment.text);
  const { isModalOpen, setIsModalOpen } = useContext(CommentsContext);

  const handleCommentTextChange = (event:any) => {
    setCommentText(event.target.value);
  };

  const handleSaveComment = async () => {
    console.log(`Comentário editado: ${commentText}`);

    const data = { text: commentText };
    await updateComment(comment.id, data);

    setIsModalOpen(false);
  };

  const updateComment = async (id:string, data:object) => {
    try {
      const response = await API.patch(`/comments/${id}`, data);
      console.log("Comentário atualizado com sucesso:", response.data);
    } catch (error) {
      console.error(error);
      console.log("Erro ao atualizar comentário:", error);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Editar Comentário
      </motion.button>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h2>Editar comentário:</h2>
            <textarea value={commentText} onChange={handleCommentTextChange} />
            <button onClick={handleSaveComment}>Salvar</button>
            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default EditCommentModal;

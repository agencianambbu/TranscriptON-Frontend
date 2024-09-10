import React, { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../../contexts/AppContext";
import { SecondaryButton } from "../SecondaryButton";
import { ModalContent } from "./styles";
import { FaTrash } from "react-icons/fa";
import { deleteWord } from "../../services/backendService";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

export const ModalDelete = () => {
  const {
    isModalDeleteActive,
    changeModalDeleteState,
    wordId,
    updateWordList,
  } = useContext(AppContext);


  const customStyles = {
    content: {
      top: "50%",
      left: "61%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: 0,
      borderRadius: "1rem",
      width: "365px",
    },
  };

  const handleDelete = async () => {
    await deleteWord(wordId);
    updateWordList();

    toast.success("Palavra removida com sucesso!");
    closeModalDelete()
  };

  const closeModalDelete = () => {
    changeModalDeleteState(false);
  };

  return (
    <Modal
      isOpen={isModalDeleteActive}
      onRequestClose={closeModalDelete}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <h3>Excluir</h3>
        <p>Você tem certeza que deseja excluir esta palavra?</p>

        <div>
          <SecondaryButton
            icon={<FaTrash color="red" />}
            onClick={handleDelete}
          >
            Sim
          </SecondaryButton>
          <SecondaryButton
            onClick={closeModalDelete}
          >
            Cancelar
          </SecondaryButton>
        </div>
      </ModalContent>
    </Modal>
  );
};

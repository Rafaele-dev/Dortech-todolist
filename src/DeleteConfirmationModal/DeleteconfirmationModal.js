import React from 'react';
import './DeleteConfirmationModal.css'
const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modaldelete">
      <div className="modal-contentdelete">
        <h2>Deseja realmente deletar essa tarefa?</h2>
        <div className="button-groupdelete">
          <button onClick={onCancel}>Não</button>
          <button onClick={onConfirm}>Sim</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

import React from 'react';
import './EditTaskModal.css'
const EditTaskSidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`edit-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="edit-sidebar-content">
      <h2>
          <span onClick={onClose}>X </span> Editar Tarefa
      </h2>
      <div className="form-group">
      <label htmlFor="editTaskTitle">Título:</label>
        <input type="text" id="editTaskTitle" name="editTaskTitle" />
        
      </div>
        <div className="form-group">
          <label htmlFor="editTaskDescription">Descrição:</label>
          <textarea id="editTaskDescription" name="editTaskDescription"></textarea>
        </div>
        <div className="button-group">
          <button>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskSidebar;    
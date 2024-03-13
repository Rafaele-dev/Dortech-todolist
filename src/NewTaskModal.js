import React from 'react';
import './App.css';
const NewTaskModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal show">
        <div className='modal'></div>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 className="modal-header">TO DO</h2>
          <form>
            <label htmlFor="taskTitle">Título da Tarefa:</label>
            <input type="text" id="taskTitle" name="taskTitle" className="input-field" placeholder="Digite o título" />
  
            <label htmlFor="taskDescription">Descrição da Tarefa:</label>
            <textarea id="taskDescription" name="taskDescription" className="input-field" placeholder="Digite a descrição"></textarea>
  
            <label htmlFor="taskType">Tipo da Tarefa:</label>
            <select id="taskType" name="taskType" className="input-field">
              <option value="trabalho">Trabalho</option>
              <option value="faculdade">Faculdade</option>
              <option value="pessoal">Pessoal</option>
            </select>
  
            <label htmlFor="taskPriority">Prioridade:</label>
            <select id="taskPriority" name="taskPriority" className="input-field">
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>
  
            <button type="button" className="save-button">
              Salvar Tarefa
            </button>
          </form>
        </div>
      </div>
    );
  };
  
export default NewTaskModal;
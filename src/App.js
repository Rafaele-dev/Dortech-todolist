import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { LiaListAlt } from 'react-icons/lia';
import { CiStar } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';
import { IoHourglassOutline } from 'react-icons/io5';
import { MdEditNote, MdDelete } from "react-icons/md";
import NewTaskModal from './NewTaskModal';
import EditTaskModal from './EditTaskModal/EditTaskModal.js';
import DeleteConfirmationModal from './DeleteConfirmationModal/DeleteconfirmationModal.js';

import './App.js';

function App() {
  
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [isContentShrunk, setIsContentShrunk] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const openNewTaskModal = () => {
    setIsNewTaskModalOpen(true);
  };

  const closeNewTaskModal = () => {
    setIsNewTaskModalOpen(false);
  };

  const openEditTaskModal = () => {
    setIsEditTaskModalOpen(true);
    setIsContentShrunk(true);
  };

  const closeEditTaskModal = () => {
    setIsEditTaskModalOpen(false);
    setIsContentShrunk(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleConfirmDelete = () => {
    
    closeDeleteModal();
  };

  return (
    <div className="App">
      <aside className="menu-vertical">
        <div className="logo">
          <span>TO DO</span>
        </div>
        <hr className="linha-fina" />
        <ul className="menu-opcoes">
          <li>
            <a href="">
              <LiaListAlt className="iconMenu" /> Todos
            </a>
          </li>
          <li>
            <a href="">
              <CiStar className="iconMenu" /> Hoje
            </a>
          </li>
          <li>
            <a href="">
              <CiCircleCheck className="iconMenu" /> Concluídas
            </a>
          </li>
          <li>
            <a href="">
              <IoHourglassOutline className="iconMenu" /> A Finalizar
            </a>
          </li>
        </ul>

        <div className="status-menu">
          <h3>Status</h3>
          <ul>
            <li>
              <a href="">Trabalho</a>
            </li>
            <li>
              <a href="">Faculdade</a>
            </li>
            <li>
              <a href="">Pessoal</a>
            </li>
          </ul>
        </div>
        <button className="botao-nova-tarefa" onClick={openNewTaskModal}>
          + Nova Tarefa
        </button>

        <NewTaskModal isOpen={isNewTaskModalOpen} onClose={closeNewTaskModal} />
        <EditTaskModal isOpen={isEditTaskModalOpen} onClose={closeEditTaskModal} />
      </aside>
      <hr className="linha-maior" />
      <div className={`conteudo ${isContentShrunk ? 'shrink' : ''}`}>
        <div className="search">
          <input type="text" placeholder="Pesquisar..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>

        <div className="container">
          <div className="round"></div>
          <div className="tasks-container">
            <h2>TODOS</h2>
            <ul className="task-list">
                <li className={`task-item ${isChecked ? 'checked' : ''}`}>
                  <div className="round">
                    <input type="checkbox" className="task-checkbox" id="task3" onChange={handleCheckboxChange} />
                    <label htmlFor="task3"></label>
                  </div>
                  <span className="task-title">Tarefa 3</span>
                  <div className="task-actions">
                    <button className="edit-button" onClick={openEditTaskModal}>
                      <MdEditNote />
                    </button>
                    <button className="delete-button" onClick={openDeleteModal}>
                      <MdDelete />
                    </button>
                  </div>
                </li>
            </ul>

          </div>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={closeDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Trash2, Edit2, PlusCircle, ArrowDown } from 'react-feather';
import { useApiContext } from '../../contexts/ApiContext';
import { User } from '../../utils/types';
import Modal from '../Modal';
import "../../styles/UserTable.scss";

const UsersList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { users, deleteUser, loading, error, editUser } = useApiContext();

  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  
  const startEditing = (user: User) => {
    setEditingUserId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  
  const confirmEdit = () => {
    if (editingUserId !== null) {
      editUser(editingUserId, editName, editEmail);
      resetEditingState();
    }
  };

  const resetEditingState = () => {
    setEditingUserId(null);
    setEditName('');
    setEditEmail('');
  };

  return (
    <>
      <div className='div-input'>
        <input type="text" placeholder="Ricerca un utente" className="custom-input" value={search} onChange={handleSearchChange} />
      </div>
      <div className="button-container">
        <button className='add-button' onClick={openModal}>
          <PlusCircle size={18}/>
          <p>Aggungi Utente</p>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <span>ID<ArrowDown size={10} /></span>
            </th>
            <th>
              <span>Nome e cognome<ArrowDown size={10} /></span>
            </th>
            <th>
              <span>Email<ArrowDown size={10} /></span>
            </th>
            <th>
              <span>Options<ArrowDown size={10} /></span>
            </th>
          </tr>
        </thead>
        <tbody>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <div className="name-avatar">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    <>
                      <img src="icons/profile_placeholder.png" alt="Avatar" className='name-image'/>
                      <span>{user.name}</span>
                    </>
                  )}
                </div>
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <>
                    <button style={{marginRight: "8px"}} onClick={confirmEdit}>Salva</button>
                    <button onClick={resetEditingState}>Cancella</button>
                  </>
                ) : (
                  <>
                    <button className="edit-btn" onClick={() => startEditing(user)}><Edit2 /></button>
                    <button className="delete-btn" onClick={() => deleteUser(user.id)}><Trash2 color='red'/></button>
                  </>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr><td colSpan={4} style={{textAlign: "center"}}>No utenti trovati</td></tr>
        )}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;

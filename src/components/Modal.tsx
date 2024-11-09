import React, { useState } from 'react';
import { useApiContext }from '../contexts/ApiContext';
import { X } from 'react-feather';
import { User } from '../utils/types';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddUserModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { addUser, users } = useApiContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<number | undefined>(undefined);
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lastId = users.length > 0 ? users[users.length - 1].id : 0;
    const newUser: User = {
      id: lastId + 1,
      name,
      email,
      phone: phone ?? 0,
      address
    };

    addUser(newUser);
    setName('');
    setEmail('');
    setPhone(undefined);
    setAddress('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <p>Inserisci i dati:</p>
          <X onClick={onClose} size={18} style={{cursor: "pointer"}}/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='input-div'>
            <label>Nome e Cognome</label>
            <input
              className='custom-input fwidth'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder='Nome'
            />
          </div>
          <div className='input-div'>
            <label>Email</label>
            <input
              className='custom-input fwidth'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='E-mail'
            />
          </div>
          <div className='input-div'>
            <label>Indirizzo</label>
            <input
              className='custom-input fwidth'
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder='Indirizzo'
            />
          </div>
          <div className='input-div'>
            <label>Telefono</label>
            <input
              className='custom-input fwidth'
              type="text"
              value={phone}
              onChange={(e) => setPhone(Number(e.target.value))}
              required
              placeholder='Telefono'
            />
          </div>
          <button type="submit" className='save-user'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;

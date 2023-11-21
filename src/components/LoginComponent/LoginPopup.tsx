// LoginPopup.tsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';

interface LoginPopupProps {
  onLogin: (username: string, password: string) => Promise<void>;
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onLogin(username, password);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <LoginForm onSubmit={handleSubmit} />
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;

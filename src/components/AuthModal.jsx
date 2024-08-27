import React from 'react';
import Auth from '../pages/Auth';// Import your existing Auth component

function AuthModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <button 
          onClick={onClose} 
          className="float-right text-gray-700 hover:text-gray-900"
        >
          ✕
        </button>
        <Auth onSuccessfulAuth={onClose} />
      </div>
    </div>
  );
}

export default AuthModal;
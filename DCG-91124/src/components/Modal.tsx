import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../hooks/useModal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  maxWidth = 'max-w-4xl'
}) => {
  useModal(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={`bg-[#1a1a1a] w-full ${maxWidth} relative border border-[#333] max-h-[90vh] overflow-y-auto rounded-sm`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#1a1a1a] border-b border-[#333] p-4 flex items-center justify-between">
          <h2 id="modal-title" className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-[#ff5500] transition-colors bg-[#333] p-1.5 rounded-sm"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
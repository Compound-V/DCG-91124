import React, { useEffect } from 'react';
import { X, Clock, MapPin, User, Tag } from 'lucide-react';

interface ScheduleEvent {
  id: number;
  time: string;
  title: string;
  speaker: string;
  location: string;
  type: 'keynote' | 'talk' | 'workshop' | 'panel' | 'break';
  description?: string;
  requirements?: string[];
  topics?: string[];
}

interface ScheduleEventModalProps {
  event: ScheduleEvent;
  onClose: () => void;
}

const getEventTypeDetails = (type: string) => {
  switch (type) {
    case 'keynote':
      return {
        color: '#ff5500',
        label: 'Keynote'
      };
    case 'talk':
      return {
        color: '#3b82f6',
        label: 'Talk'
      };
    case 'workshop':
      return {
        color: '#22c55e',
        label: 'Workshop'
      };
    case 'panel':
      return {
        color: '#a855f7',
        label: 'Panel'
      };
    default:
      return {
        color: '#6b7280',
        label: 'Break'
      };
  }
};

const ScheduleEventModal: React.FC<ScheduleEventModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const typeDetails = getEventTypeDetails(event.type);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-[#1a1a1a] w-full max-w-2xl relative border border-[#333] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-1" style={{ backgroundColor: typeDetails.color, height: '100%' }}></div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#ff5500] transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <span 
              className="text-sm uppercase tracking-wider px-3 py-1"
              style={{ color: typeDetails.color, backgroundColor: `${typeDetails.color}20` }}
            >
              {typeDetails.label}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-6">{event.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 text-[#999]">
              <Clock size={20} />
              <span>{event.time}</span>
            </div>
            
            <div className="flex items-center gap-3 text-[#999]">
              <MapPin size={20} />
              <span>{event.location}</span>
            </div>
            
            {event.speaker && (
              <div className="flex items-center gap-3 text-[#999]">
                <User size={20} />
                <span>{event.speaker}</span>
              </div>
            )}
          </div>

          {event.description && (
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">Description</h3>
              <p className="text-[#999] leading-relaxed">{event.description}</p>
            </div>
          )}

          {event.requirements && event.requirements.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {event.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#999]">
                    <span className="text-[#ff5500] mt-1">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.topics && event.topics.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mb-3">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {event.topics.map((topic, index) => (
                  <span 
                    key={index}
                    className="flex items-center gap-1.5 text-sm bg-[#333] text-white px-3 py-1"
                  >
                    <Tag size={14} />
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleEventModal;
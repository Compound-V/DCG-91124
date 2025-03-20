import React, { createContext, useContext, ReactNode } from 'react';
import { volunteerSections } from '../data/volunteers';
import { VolunteerSection } from '../types/volunteer';

interface TeamContextType {
  sections: VolunteerSection[];
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function useTeam() {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
}

interface TeamProviderProps {
  children: ReactNode;
}

export function TeamProvider({ children }: TeamProviderProps) {
  return (
    <TeamContext.Provider value={{ sections: volunteerSections }}>
      {children}
    </TeamContext.Provider>
  );
}
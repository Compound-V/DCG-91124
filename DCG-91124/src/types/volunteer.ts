export interface Volunteer {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  expertise?: string[];
  achievements?: string[];
  certifications?: string[];
  projects?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface VolunteerSection {
  id: string;
  title: string;
  description: string;
  members: Volunteer[];
}
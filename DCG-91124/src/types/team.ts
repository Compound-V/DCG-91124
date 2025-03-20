export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  expertise: string[];
  social?: {
    linkedin?: string;
  };
}

export interface TeamSection {
  id: string;
  title: string;
  members: TeamMember[];
}
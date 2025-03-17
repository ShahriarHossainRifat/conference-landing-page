export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  talkTitle?: string;
  tags?: string[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  speaker: string;
  description: string;
  location?: string;
  image?: string;
  tags?: string[];
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  ticketType: "standard" | "premium" | "vip";
}

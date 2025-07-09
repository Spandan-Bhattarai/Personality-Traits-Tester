export interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  reverse?: boolean;
}

export interface PersonalityType {
  code: string;
  name: string;
  description: string;
  traits: string[];
  strengths: string[];
  careers: string[];
  color: string;
  emoji: string;
}

export interface UserResponse {
  questionId: number;
  value: number; // 1-5 scale
}

export interface PersonalityResult {
  type: PersonalityType;
  scores: {
    EI: number; // Positive = Extraverted, Negative = Introverted
    SN: number; // Positive = Sensing, Negative = Intuitive
    TF: number; // Positive = Thinking, Negative = Feeling
    JP: number; // Positive = Judging, Negative = Perceiving
  };
}
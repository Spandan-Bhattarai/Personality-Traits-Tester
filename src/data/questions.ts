import { Question } from '../types/personality';

export const questions: Question[] = [
  // Extraversion vs Introversion
  { id: 1, text: "I feel energized when I'm around lots of people", dimension: 'EI' },
  { id: 2, text: "I prefer to think things through before speaking", dimension: 'EI', reverse: true },
  { id: 3, text: "I enjoy being the center of attention", dimension: 'EI' },
  { id: 4, text: "I need quiet time to recharge after social events", dimension: 'EI', reverse: true },
  { id: 5, text: "I make friends easily and quickly", dimension: 'EI' },
  { id: 6, text: "I prefer working alone rather than in groups", dimension: 'EI', reverse: true },
  { id: 7, text: "I speak up readily in group discussions", dimension: 'EI' },
  { id: 8, text: "I prefer intimate gatherings over large parties", dimension: 'EI', reverse: true },

  // Sensing vs Intuition
  { id: 9, text: "I focus on concrete facts and details", dimension: 'SN' },
  { id: 10, text: "I enjoy exploring possibilities and 'what if' scenarios", dimension: 'SN', reverse: true },
  { id: 11, text: "I prefer practical, proven solutions", dimension: 'SN' },
  { id: 12, text: "I get excited about new ideas and concepts", dimension: 'SN', reverse: true },
  { id: 13, text: "I notice small details that others miss", dimension: 'SN' },
  { id: 14, text: "I prefer to see the big picture rather than focus on details", dimension: 'SN', reverse: true },
  { id: 15, text: "I value tradition and established ways of doing things", dimension: 'SN' },
  { id: 16, text: "I enjoy brainstorming and generating new ideas", dimension: 'SN', reverse: true },

  // Thinking vs Feeling
  { id: 17, text: "I make decisions based on logic and objective analysis", dimension: 'TF' },
  { id: 18, text: "I consider how decisions will affect people's feelings", dimension: 'TF', reverse: true },
  { id: 19, text: "I value fairness and justice above all else", dimension: 'TF' },
  { id: 20, text: "I prefer harmony and avoid conflict when possible", dimension: 'TF', reverse: true },
  { id: 21, text: "I can easily critique ideas without taking it personally", dimension: 'TF' },
  { id: 22, text: "I make decisions based on personal values", dimension: 'TF', reverse: true },
  { id: 23, text: "I remain calm and objective in emotional situations", dimension: 'TF' },
  { id: 24, text: "I empathize deeply with others' emotions", dimension: 'TF', reverse: true },

  // Judging vs Perceiving
  { id: 25, text: "I prefer having a clear plan and schedule", dimension: 'JP' },
  { id: 26, text: "I enjoy keeping my options open and being spontaneous", dimension: 'JP', reverse: true },
  { id: 27, text: "I like to finish projects well before the deadline", dimension: 'JP' },
  { id: 28, text: "I work best under pressure and tight deadlines", dimension: 'JP', reverse: true },
  { id: 29, text: "I prefer organized, structured environments", dimension: 'JP' },
  { id: 30, text: "I adapt easily to unexpected changes", dimension: 'JP', reverse: true },
  { id: 31, text: "I make decisions quickly and stick to them", dimension: 'JP' },
  { id: 32, text: "I like to explore all options before making a decision", dimension: 'JP', reverse: true },
];
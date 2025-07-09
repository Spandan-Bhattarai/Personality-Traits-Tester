import { UserResponse, PersonalityResult } from '../types/personality';
import { questions } from '../data/questions';
import { personalityTypes } from '../data/personalityTypes';

export function calculatePersonalityType(responses: UserResponse[]): PersonalityResult {
  const scores = {
    EI: 0, // Positive = Extraverted, Negative = Introverted
    SN: 0, // Positive = Sensing, Negative = Intuitive
    TF: 0, // Positive = Thinking, Negative = Feeling
    JP: 0  // Positive = Judging, Negative = Perceiving
  };

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    // Convert 1-5 scale to -2 to +2 scale
    let score = response.value - 3;
    
    // Reverse scoring if needed
    if (question.reverse) {
      score = -score;
    }

    scores[question.dimension] += score;
  });

  // Determine personality type code
  const typeCode = 
    (scores.EI >= 0 ? 'E' : 'I') +
    (scores.SN >= 0 ? 'S' : 'N') +
    (scores.TF >= 0 ? 'T' : 'F') +
    (scores.JP >= 0 ? 'J' : 'P');

  const personalityType = personalityTypes.find(type => type.code === typeCode);
  
  if (!personalityType) {
    throw new Error(`Unknown personality type: ${typeCode}`);
  }

  return {
    type: personalityType,
    scores
  };
}
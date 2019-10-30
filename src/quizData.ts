export interface Answer {
  id: number;
  answer: string;
  correct: boolean;
}

export interface Questions {
  [code: string]: {
    question: string;
    answers: Answer[];
  };
}

export const quizData: Questions = {
  what: {
    question: 'What can you hold in your left hand but, not in your right hand?',
    answers: [
        {
        id: 1,
        answer: 'Air',
        correct: false,
        },
        {
        id: 2,
        answer: 'Darkness',
        correct: true,
        },
        {
        id: 3,
        answer: 'light',
        correct: false,
        },
    ],
  },
  what2: {
    question: 'The more there is, the less you see. What am I?',
    answers: [
        {
        id: 1,
        answer: 'right elbow',
        correct: true,
        },
        {
        id: 2,
        answer: 'left elbow',
        correct: false,
        },
        {
        id: 3,
        answer: 'head',
        correct: false,
        },
    ],
  },
};

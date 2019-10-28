export interface Answer {
  id: number;
  answer: string;
  correct: boolean;
}

export interface Questions {
  [code: string]: {
    title: string;
    question: string;
    answers: Answer[];
  };
}

export const quizData: Questions = {
  what: {
    title: 'What am I?' ,
    question: 'The more there is, the less you see. What am I?',
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
};

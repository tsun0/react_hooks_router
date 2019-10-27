import React, { FC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

import { Answer } from '../../quizData';

interface QuizListProps {
    question: string;
    answers: Answer[];
}

const QuizList: FC<QuizListProps> = ({
  question = '???',
  answers,
}) => (
  <>
    <Header as="h2">{question}</Header>
    <Item.Group>
      {answers.map(a => (
        <Item>
          <Icon name="question circle" size="large" />
          <Item.Content>
            <Item.Header>{a.id}. {a.answer}</Item.Header>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
);

export default QuizList;

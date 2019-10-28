import React, { FC } from 'react';
import { Header, Icon, Item, Checkbox } from 'semantic-ui-react';

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
    <Header as="h2"><Icon name="question circle" size="large" />{question}</Header>
    <Item.Group>
      {answers.map(a => (
        <Item>
          <Item.Content>
            <Checkbox radio label={{ children: a.id + '. ' + a.answer }}></Checkbox>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
);

export default QuizList;

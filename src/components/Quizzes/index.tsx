import React, {FC} from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { parse } from 'query-string';
import { Redirect } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import { quizData } from '../../quizData';
import Spinner from '../common/Spinner';
import QuizList from './QuizList';

type QuizzesProps = {} & RouteComponentProps<{ code: string }>;


const Quizzes: FC<QuizzesProps> = ({ history, location, match }) => {
  const codes = Object.keys(quizData);
  const targetCode = match.params.code;
  const isLoading = parse(location.search).loading === 'true';

  return codes.includes(targetCode) ? (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <QuizList
          question={quizData[targetCode].question}
          answers={quizData[targetCode].answers}
        />
      )}
      <Button
        basic
        color="grey"
        onClick={() => {
          history.push('/');
        }}
      >
        <Icon name="home" />
        ホームへ
      </Button>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Quizzes;

import React, {FC} from 'react'
import { Link } from 'react-router-dom';
import {List, Item, Header} from 'semantic-ui-react';

import { quizData } from '../../quizData';

import './index.css';

const codes = Object.keys(quizData);


const Home: FC<{}> = () => (
    <div className="container">
      <Header>Quiz</Header>
      <Item>
        <Item.Content>
          <List as="ul">
            {codes.map(code => (
              <List.Item as="li" key={code}>
              <Link to={`/quizzes/${code}`}>{quizData[code].question}</Link>
              </List.Item>
            ))}
            <List.Item as="li">
              <Link to={`/addition`}>足し算</Link>
            </List.Item>
          </List>
        </Item.Content>
      </Item>
    </div>
);

export default Home;

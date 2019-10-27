import React, {FC} from 'react'
import { Link } from 'react-router-dom';
import {List, Card} from 'semantic-ui-react';

import { quizData } from '../../quizData';

import './index.css';

const codes = Object.keys(quizData);


const Home: FC<{}> = () => (
    <div className="container">
        <Card>
        <Card.Content>
            <Card.Header>Quiz</Card.Header>
            <Card.Description>
            <List as="ul">
                {codes.map(code => (
                    <List.Item as="li" key={code}>
                    <Link to={`/quizzes/${code}`}>{quizData[code].title}</Link>
                    </List.Item>
                ))}
                <List.Item as="li">
                    <Link to={`/addition`}>足し算</Link>
                </List.Item>
            </List>
            </Card.Description>
        </Card.Content>
        </Card>
    </div>
);

export default Home;

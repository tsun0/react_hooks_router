import React, {FC} from 'react'
import { Link } from 'react-router-dom';
import {List, Card} from 'semantic-ui-react';
import './index.css';

const Home: FC<{}> = () => (
    <div className="container">
        <Card>
        <Card.Content>
            <Card.Header>Quiz</Card.Header>
            <Card.Description>
            <List as="ul">
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

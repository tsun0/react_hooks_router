import React, {FC} from 'react'
// import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react';


const Home: FC<{}> = () => (
    <div className="container">
        <Card>
        <Card.Content>
            <Card.Header>Quiz</Card.Header>
            <Card.Description>1+1=?</Card.Description>
        </Card.Content>
        </Card>
    </div>
);

export default Home;

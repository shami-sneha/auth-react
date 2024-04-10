import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TeamText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`;

const Team: React.FunctionComponent = () => {
    return (
        <Card style={{ width: '30rem', marginLeft: '250px',marginTop: '40px'}}>
            <Card.Img variant="top" src={require('./assets/webby1.jpg')}style={{ width: '500px', height: '200px' }}/> {/* Adjusted src attribute */}
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card style={{ width: '30rem', marginLeft: '250px',marginTop: '40px'}}></Card>
            <Card.Img variant="top" src={require('./assets/webby1.jpg')}style={{ width: '500px', height: '200px', }}/> {/* Adjusted src attribute */}
        </Card>
        
    );
};

export default Team;

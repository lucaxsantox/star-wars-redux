import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';
import CharacterWorld from './CharacterWorld';
import { Container, Row, Col } from 'reactstrap';
import Stars from './Stars';


function App() {
  return (
    <>
    
    <Container >
    <Stars/> 
      <Row className="pt-5" xs="3">
        <Col><CharacterList/></Col>
        <Col><CharacterProfile/></Col>
        <Col><CharacterWorld/></Col>
      </Row>
    </Container>
    </>
  );
}

export default App;

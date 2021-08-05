import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';
import CharacterWorld from './CharacterWorld';
import { Container, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';


function App() {
  return (
    <>
    <Container>
      <Row xs="3">
        <Col><CharacterList/></Col>
        <Col><CharacterProfile/></Col>
        <Col><CharacterWorld/></Col>
      </Row>
    </Container>
    <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
    </>
  );
}

export default App;

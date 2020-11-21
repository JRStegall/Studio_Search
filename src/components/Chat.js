import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Chat(){

    return(
        <div className="chatContainer">
            <Container>
      <Row>
        <Col className="col">
        <ul id="messages"></ul>
        <InputGroup className="form">
          <FormControl
            placeholder="Hit us up!"
            aria-label="Chat"
            aria-describedby="basic-addon2"
            action=""
          />
          <InputGroup.Append id="m" autocomplete="off">
            <Button variant="btn btn-primary">Send</Button>
          </InputGroup.Append>
        </InputGroup>
        </Col>
      </Row>

    </Container>
        
    {/* <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form> */}
    </div>
    );
}

export default Chat;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


function Search() {
  const [studios, setStudios] = useState(false)
  const [search, setSearch] = useState(false)

  function fetchStudios() {
    console.log(search);
    //replace route with set URL//
    fetch(`https://fathomless-mountain-98798.herokuapp.com/search=${search}`)
      .then(res => res.json())
      .then((results) => {
        console.log(results);
        setStudios([results]);
        console.log(studios);
      })
  }

  

  function handleChange(event){
    setSearch(event.target.value);
  }

  const items = []
  if (studios) {
    console.log(studios);
    studios.forEach( (item, index) => {
      console.log(item[index])

      if(item[index]) {
        items.push(
        <Card key={item[index].id} style={{ width: '16rem' }}>
          <Card.Img variant="top" src={item[index].image} />
          <Card.Body>
            <Card.Title>{item[index].name}</Card.Title>
            <Card.Text>
              {item[index].address}
              <br/>
              {item[index].city}, &nbsp;
              {item[index].state}
              <br/>
              {item[index].zip_code}
              <br/>
            <a href={item[index].map} target="_blank" rel="noreferrer">Map</a>
            <br />
            <a href={item[index].website} target="_blank" rel="noreferrer">{item[index].website}</a>
            <br/>
    <a href='tel:{item.phone_number}'>{item[index].phone_number}</a>
            </Card.Text>
            
          </Card.Body>
        </Card>
      )
        }
    })
  }


  return (
    <div className="body">
    <Container>
      <Row>
        <Col className="col">
        <InputGroup className="mb-3 mt-4">
          <FormControl
            placeholder="Search for Studios..."
            aria-label="Studio Search"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button onClick={fetchStudios} variant="btn btn-primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        </Col>
      </Row>

    <CardColumns>
      {items}
      </CardColumns>

    </Container>
    </div>
  );
}

export default Search;
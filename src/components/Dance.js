import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'



function DanceStudios(){

const [products, setProducts] = useState(false);

useEffect(() => {
  const apiUrl = `http://localhost:4000/dance_studios`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((product) => {
      setProducts({ product: product });
    });
}, [setProducts]);

console.log(products);

const items = []

if (products) {
  products.product.forEach((item) => {
    if( item.is_deleted !== true)
    items.push(
      
      <Col className="col-lg-3 col-xs-8">
      <Card key={item.id} style={{ width: '15rem' }}>
        <Card.Img variant="top" style={{ width: '15rem' }} src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.hourly_rate}
           <br />
            {item.address} 
            <br />
            {item.city}, &nbsp; 
            {item.state} 
            <br />
            {item.zip_code}
            <br/>
            <a href={item.website} target="_blank" rel="noreferrer">{item.website}</a>
            <br/>
    <a href='tel:{item.phone_number}'>{item.phone_number}</a>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
     
    )
  })
}

return (
  <Container>
    <Row>
<CardColumns className="col-12">
  {items}
</CardColumns>
</Row>
  </Container>


)

}

let Dance = () => (
    <div>
      <Route path="/dance" component={DanceStudios} />
    </div>
  )

export default Dance;


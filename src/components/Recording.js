import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'



function RecordingStudios(){

const [products, setProducts] = useState(false);

useEffect(() => {
  const apiUrl = `http://localhost:4000/recording_studios`;
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
      <Container className="container">
      <Col className="col-lg-3 col-xs-8">
      <Card key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ width: '18rem' }} src={item.image} />
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
            {item.web_site}
            <br/>
            {item.phone_number}
          </Card.Text>

         {/* <Button variant="primary" onclick="">Add To Cart</Button>*/}
        </Card.Body>
      </Card>
      </Col>
      </Container>
    )
  })
}

return (
<Row>
<CardColumns>
  {items}
</CardColumns>
</Row>

)

}

let Recording = () => (
    <div>
      <Route path="/recording" component={RecordingStudios} />
    </div>
  )

export default Recording;



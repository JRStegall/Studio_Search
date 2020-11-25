import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import Accordion from 'react-bootstrap/Accordion';


function ProductionStudios() {

    const [products, setProducts] = useState(false);

    useEffect(() => {
        const apiUrl = `https://fathomless-mountain-98798.herokuapp.com/production_studios`;
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
            if (item.is_deleted !== true)
                items.push(
    
                        <Col >
                            <Card style={{ width: '15rem' }} className="">
                                <Card.Img variant="top" style={{ width: '15rem' }} src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Accordion >
          <Accordion.Toggle as={Button} variant="link" eventKey="0">More Info</Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
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
          </Accordion.Collapse>
          </Accordion>
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

let Production = () => (
    <div>
        <Route path="/production" component={ProductionStudios} />
    </div>
)


export default Production;



import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'



function RehearsalStudios() {

    const [products, setProducts] = useState(false);

    useEffect(() => {
        const apiUrl = `http://localhost:4000/rehearsal_studios`;
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
                    <Container >
                        
                        <Col >
                            <Card style={{ width: '18rem' }} className="card">
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
                                        <br />
                                        <a href={item.website} target="_blank">{item.website}</a>
                                        <br />
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

let Rehearsal = () => (
    <div>
        <Route path="/rehearsal" component={RehearsalStudios} />
    </div>
)


export default Rehearsal;



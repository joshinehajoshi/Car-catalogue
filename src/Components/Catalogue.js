import React, { useState, useEffect } from 'react';
import CarData from './Data/CarData';
import '../styling/catalogue.css';
import { Card, ListGroup, ListGroupItem, Carousel } from 'react-bootstrap';

function Catalogue() {
    const [carData, setCarData] = useState(null);
    const [data, setData] = useState(null);
    const [origin, setOrigin] = useState("");

    const UsaOrigin = () => {
        setOrigin("USA")
    }

    const EurpOrigin = () => {
        setOrigin("Europe")
    }

    const JapanOrigin = () => {
        setOrigin("Japan")
    }



    useEffect(() => {
        setData(CarData);
        console.log("ne", CarData);
        // fetch("https://myfakeapi.com/api/cars/")
        //     .then(res => res.json())
        //     .then(videos => setCarData(videos))
        //     console.log(carData)
        // }, []);
    },[])

  return <div>
      {/* <h1>Catalogue</h1> */}
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <button onClick={UsaOrigin}>USA</button>
      <button onClick={EurpOrigin}>Europe</button>
      <button onClick={JapanOrigin}>Japan</button>
      <div className="catalogue-wrapper">
      {CarData.filter(person => person.Origin == origin).map((a) => {
          return (
              <div className="catalogue-card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg" />
            <Card.Body>
              <Card.Title>{a.Name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><b>Origin: </b>{a.Origin}</ListGroupItem>
              <ListGroupItem><b>Horse Power: </b>{a.Horsepower}</ListGroupItem>
              <ListGroupItem><b>Weight in lbs: </b>{a.Weight_in_lbs}</ListGroupItem>
              <ListGroupItem><b>Year: </b>{a.Year}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </div>
          )
      })}
      </div>
  </div>
}

export default Catalogue;

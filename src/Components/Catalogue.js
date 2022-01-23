import React, { useState, useEffect } from 'react';
import CarData from './Data/CarData';
import '../styling/catalogue.css';
import { Card, ListGroup, ListGroupItem, Carousel, Button } from 'react-bootstrap';

function Catalogue() {
    const [carData, setCarData] = useState(null);
    const [data, setData] = useState(null);
    const [origin, setOrigin] = useState("");
    const [year, setYear] = useState("");

    const UsaOrigin = () => {
        setOrigin("USA")
    }

    const EurpOrigin = () => {
        setOrigin("Europe")
    }

    const JapanOrigin = () => {
        setOrigin("Japan")
    }

    const SeventyYear = () => {
        setYear("1970-01-01")
    }
    const SeventyOneYear = () => {
        setYear("1971-01-01")
    }
    const SeventyTwoYear = () => {
        setYear("1972-01-01")
    }

    const SeventyThreeYear = () => {
        setYear("1973-01-01")
    }

    const SeventyFourYear = () => {
        setYear("1974-01-01")
    }

    const SeventyFiveYear = () => {
        setYear("1975-01-01")
    }

    const SeventySixYear = () => {
        setYear("1976-01-01")
    }

    const SeventySevenYear = () => {
        setYear("1977-01-01")
    }

    const SeventyEightYear = () => {
        setYear("1978-01-01")
    }

    const SeventyNineYear = () => {
        setYear("1979-01-01")
    }

    const EightyYear = () => {
        setYear("1980-01-01")
    }

    const EightyOneYear = () => {
        setYear("1981-01-01")
    }

    const EightyTwoYear = () => {
        setYear("1982-01-01")
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
      <div className="filter-header">
        <div>
            <h3>Filter Cars by Country of Origin</h3>
            <Button variant="dark" onClick={UsaOrigin}>USA</Button>
            <Button variant="dark" onClick={EurpOrigin}>Europe</Button>
            <Button variant="dark" onClick={JapanOrigin}>Japan</Button>
        </div>
        <div className="pt-4">
            <h3>Filter Cars by Year</h3>
            <Button variant="dark" onClick={SeventyYear}>1970</Button>
            <Button variant="dark" onClick={SeventyOneYear}>1971</Button>
            <Button variant="dark" onClick={SeventyTwoYear}>1972</Button>
            <Button variant="dark" onClick={SeventyThreeYear}>1973</Button>
            <Button variant="dark" onClick={SeventyFourYear}>1974</Button>
            <Button variant="dark" onClick={SeventyFiveYear}>1975</Button>
            <Button variant="dark" onClick={SeventySixYear}>1976</Button>
            <Button variant="dark" onClick={SeventySevenYear}>1977</Button>
            <Button variant="dark" onClick={SeventyEightYear}>1978</Button>
            <Button variant="dark" onClick={SeventyNineYear}>1979</Button>
            <Button variant="dark" onClick={EightyYear}>1980</Button>
            <Button variant="dark" onClick={EightyOneYear}>1981</Button>
            <Button variant="dark" onClick={EightyTwoYear}>1982</Button>
        </div>

      </div>
      <div className="catalogue-wrapper">
      {CarData.filter(person => person.Origin == origin || person.Year == year).map((a) => {
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

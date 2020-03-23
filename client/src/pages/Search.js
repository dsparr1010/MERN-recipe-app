import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Jumbotron, Container, Button, Form, Card } from 'react-bootstrap';
import API from '../utils/API';
//import { response } from "express";

const Search = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
      console.log('useEffect call = searchValue' + searchValue)
        loadRecipes()
        console.log('useEffect call = recipes' + recipes)
    }, []);

    const loadRecipes = event => {
       if (event) {
         event.preventDefault();
       }
        API.fetchQuery(searchValue)
            .then(response => {
                console.log('Search page = API fetchquery response ' +response);
                console.log(response.data)
                setRecipes(response.data);
                console.log(recipes);
                return response;
            })
            .catch(err => {
            console.log(err)
        })
    }

    return (
      <>
        <Jumbotron fluid>
          <h1>SEARCH PAGE</h1>
          <Container>
              <Form.Group>
                <Form.Row className='justify-content-center'>
                  <Form.Label column="lg" lg={2} >
                    Search for a Recipe
                  </Form.Label>
                    <Col md={4}>
                    <Form.Control
                      name='query'
                      size="mlg"
                      type="text"
                      placeholder="Booty"
                      onChange= { e => setSearchValue(e.target.value) }
                    />
                    <Button
                      onClick={ event => loadRecipes(event) }
                    >SEARCH</Button>
                  </Col>
                </Form.Row>
              </Form.Group>
              <h1>

              </h1>
              <br></br>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Title </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
          </Container>
        </Jumbotron>
      </>
    );
};

export default Search;
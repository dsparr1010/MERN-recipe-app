import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Jumbotron, Container, Button, Form, Card } from 'react-bootstrap';
import API from '../utils/API';

const Search = () => {
    const [recipes, setRecipes] = useState({});
    const [searchValue, setSearchValue] = useState('');
    const [healthLabels, setHealthLabels] = useState([]);

    useEffect(() => {
      console.log('useEffect call = searchValue' + searchValue)
        loadRecipes()
        console.log(recipes)
    }, []);

    const loadRecipes = event => {
       if (event) {
         event.preventDefault();
       }
        API.fetchQuery(searchValue)
            .then(response => {
                console.log(`subtitle from recipe indexed at 0 : ${response[0].subtitle}`)
                setRecipes(response);
                setHealthLabels()
                console.log(`RECIPE SET TO: ${JSON.stringify(recipes)}`);
                //Array.from(response.)
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
                      placeholder="Paleo"
                      onChange= { e => setSearchValue(e.target.value) }
                    />
                    <Button
                      onClick={ event => loadRecipes(event) }
                    >SEARCH</Button>
                  </Col>
                </Form.Row>
              </Form.Group>
              <br></br>
            {recipes.length ? ( 
              <ul>
                {recipes.map(recipe => (
                  <ul key = {recipe.name}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe.image} alt={recipe.name}/>
                      <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{recipe.subtitle}</Card.Subtitle>
                            <Card.Text>
                            {recipe.ingredients}
                          </Card.Text>
                        <Card.Link href={recipe.url}>See Recipe</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </ul>
                ))}
              </ul>

              ) : (
                <h2>No results</h2>
              )}
          </Container>
        </Jumbotron>
      </>
    );
};

export default Search;
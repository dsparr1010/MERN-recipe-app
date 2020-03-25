import React, { useEffect, useState } from "react";
import { Col, Jumbotron, Container, Button, Form, Card } from 'react-bootstrap';
import API from '../utils/API';

const Search = () => {
  const [recipes, setRecipes] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [columns, setColumns] = useState(recipes);

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
              setRecipes(response);
              console.log(`RECIPE SET TO: ${JSON.stringify(recipes)}`);
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
        {recipes && recipes.length ? ( 
          <ul>
            {recipes.map(recipe => (
              <ul key = {recipe.cardId}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={recipe.image} alt={recipe.name}/>
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <ul key = {recipe.subtitleId}>
                          {recipe.subtitle && recipe.subtitle.map(i => (
                            <ol>{i}</ol>
                          ))}
                        </ul>
                      </Card.Subtitle>
                        <Card.Text>
                          <ul key = {recipe.ingredientsId}>
                            {recipe.ingredients && recipe.ingredients.map(i => (
                              <ul >{i}
                              </ul>
                            ))}
                          </ul>
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
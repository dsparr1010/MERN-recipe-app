import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Jumbotron, Container, Button, Form } from 'react-bootstrap';
import API from '../utils/API';
import { response } from "express";

const Search = () => {
    const [recipes, setRecipes] = useState('');
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        loadRecipes()
        console.log(recipes)
    }, []);

    const loadRecipes = event => {
        event.preventDefault();

        API.fetchQuery()
            .then(response => {
                console.log('Search page = API fetchquery')
                setRecipes(response);
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
              <Form.Group onSubmit={loadRecipes}>
                <Form.Row className='justify-content-center'>
                  <Form.Label column="lg" lg={2} >
                    Search for a Recipe
                  </Form.Label>
                    <Col md={4}>
                    <Form.Control
                      size="mlg"
                      type="text"
                      placeholder="Booty"
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
          </Container>
        </Jumbotron>
      </>
    );
};

export default Search;
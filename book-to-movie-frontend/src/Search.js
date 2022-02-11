import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }

  handleSearchSubmit = async (event) => {
    event.preventDefault();
    const userInput = event.target.searchBar.value
    const bookUrl = `${process.env.REACT_APP_SERVER}/searchBooks?q=${userInput}`;
    const movieUrl = `${process.env.REACT_APP_SERVER}/searchMovies?q=${userInput}`;
    const moviesResponse = await axios.get(movieUrl)
    const booksResponse = await axios.get(bookUrl)
    this.props.getMoviesData(moviesResponse.data);
    this.props.getBooksData(booksResponse.data);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSearchSubmit}>
          <Form.Group className="mb-3" controlId="searchBar">
            <Form.Label></Form.Label>
            <Form.Control placeholder="Enter Title" type="text" size="md"></Form.Control>
            <Button type="submit">Search</Button>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

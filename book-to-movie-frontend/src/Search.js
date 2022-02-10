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
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=ba5d3aaeed0770bfabb2457d35c9fea2&query=${userInput}`;
    const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${userInput}&key=AIzaSyDMU6p9pjV3moWj-N9NTt91yjasemQyCTE&orderBy=relevance&printType=books`;
    const moviesResponse = await axios.get(movieUrl)
    const booksResponse = await axios.get(bookUrl)
    this.props.getMoviesData(moviesResponse.data.results);
    this.props.getBooksData(booksResponse.data.items);



    
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

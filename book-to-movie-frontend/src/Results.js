import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Results extends Component {
  render() {
    return (
      <Container> 
        {this.props.booksArray.map((book, idx) => 
        <div key={idx}>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.description}</p>
          <img src={`${book.volumeInfo.imageLinks.thumbnail}`} alt="book cover"/>
          </div>)}
          {this.props.moviesArray.map((movie, idx) =>
          <div key={idx}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="book cover"/>
          </div>
          )}
      </Container>
    )
  }
}

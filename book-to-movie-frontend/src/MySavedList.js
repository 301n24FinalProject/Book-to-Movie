import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

export default class MySavedList extends Component {
  render() {
    return (
      <Container>
        {this.props.savedBooksArray.map((book, idx) =>
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', width: '30vw' }}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <img src={`${book.image}`} alt="book cover" />
          </div>)}
        {this.props.savedMoviesArray.map((movie, idx) =>
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', width: '30vw' }}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <img src={`${movie.image}`} alt="movie cover" />
          </div>
        )}
      </Container>
    )
  }
}

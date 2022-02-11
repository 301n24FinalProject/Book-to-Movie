import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

export default class Results extends Component {
  render() {
    return (
      <Container>
        {this.props.booksArray.map((book, idx) =>
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', width: '30vw' }}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <img src={`${book.image}`} alt="book cover" />
            <Button onClick={() => this.props.saveBook(book)}>Add Title</Button>
          </div>)}
        {this.props.moviesArray.map((movie, idx) =>
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', width: '30vw' }}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <img src={`${movie.image}`} alt="movie cover" />
            <Button onClick={() => this.props.saveMovie(movie)}>Add Title</Button>
          </div>
        )}
      </Container>
    )
  }
}

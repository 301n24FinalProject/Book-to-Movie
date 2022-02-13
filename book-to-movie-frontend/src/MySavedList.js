import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SavedResultItem from './SavedResultItem';

export default class MySavedList extends Component {

  componentDidMount() {
    this.props.getBooksfromDB();
    this.props.getMoviesfromDB();
  }


  render() {

    return (
      <Container style={{ display: 'flex', flexDirection: 'row', minWidth: '90wv', justifyContent: 'space-between', marginTop: '3rem'}}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center' }}>
      {this.props.savedBooksArray.length > 0 && <h2>Books</h2>}
        {this.props.savedBooksArray.map((book, idx) =>
          <SavedResultItem key={idx} item={book}  deleteBook={this.props.deleteBook} />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center' }}>
      {this.props.savedMoviesArray.length > 0 && <h2>Movies</h2>}
        {this.props.savedMoviesArray.map((movie, idx) =>
          <SavedResultItem key={idx} item={movie}  deleteMovie={this.props.deleteMovie}/>
        )}
      </div>
    </Container>
    )
  }
}

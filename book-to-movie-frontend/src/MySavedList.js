import { withAuth0 } from '@auth0/auth0-react';
import React, { Component } from 'react';
import { Container, Modal } from 'react-bootstrap';
import SavedResultItem from './SavedResultItem';
import UpdateResultItem from './UpdateResultItem';

 class MySavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    }
  }

  componentDidMount() {
    this.props.getBooksfromDB();
    this.props.getMoviesfromDB();
  }

  addNote = (item) => {
    this.setState({ selectedItem: item }, () => console.log('item', this.state.selectedItem));
  }

  saveNote = (note) => {
    this.props.updateItem({...this.state.selectedItem, notes: note});
    this.setState({selectedItem: null});
  }

  render() {

    return (
      <Container style={{ display: 'flex', flexDirection: 'row', minWidth: '90wv', justifyContent: 'space-between', marginTop: '3rem' }}>
        <UpdateResultItem show={!!this.state.selectedItem} onHide={() => this.setState({ selectedItem: null })} item={this.state.selectedItem} saveNote={this.saveNote}/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center' }}>
          {this.props.savedBooksArray.length > 0 && <h2>Books</h2>}
          {this.props.savedBooksArray.map((book, idx) =>
            <SavedResultItem key={`${book.title}-${idx}`} item={book} deleteItem={this.props.deleteBook} addNote={() => this.addNote({ ...book, type: 'book' })} />)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center' }}>
          {this.props.savedMoviesArray.length > 0 && <h2>Movies</h2>}
          {this.props.savedMoviesArray.map((movie, idx) =>
            <SavedResultItem key={`${movie.title}-${idx}`} item={movie} deleteItem={this.props.deleteMovie} addNote={() => this.addNote({ ...movie, type: 'movie' })} />
          )}
        </div>
      </Container>
    )
  }
}

export default withAuth0(MySavedList)
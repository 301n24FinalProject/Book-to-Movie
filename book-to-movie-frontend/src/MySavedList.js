import { withAuthenticationRequired, withAuth0 } from '@auth0/auth0-react';
import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
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
    this.setState({ selectedItem: item });
  }

  saveNote = (note) => {
    this.props.updateItem({ ...this.state.selectedItem, notes: note });
    this.closeModal();
  }

  closeModal = () => {
    this.setState({ selectedItem: null });
  }

  render() {

    return (
      <Container >
        <UpdateResultItem show={!!this.state.selectedItem} onHide={() => this.setState({ selectedItem: null })} item={this.state.selectedItem} saveNote={this.saveNote} closeModal={this.closeModal} />
        <Container style={{ minWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
          <h3 style={{ display: 'block', textAlign: 'center' }}>{`Hi, ${this.props.user.given_name}!`}</h3>
          <Image src={this.props.user.picture} roundedCircle='true' style={{ margin: '1rem 0' }} />
          <h3 style={{ display: 'block', textAlign: 'center' }}>Here's your saved list:</h3>
        </Container>
        {(this.props.savedBooksArray.length === 0 && this.props.savedMoviesArray.length === 0) &&
          <Container style={{ minWidth: '100%' }}>
            <h2 style={{ textAlign: 'center', display: 'block', marginTop: '3rem' }}>You don't have any titles saved</h2>
          </Container>}
        <Container style={{ display: 'flex', flexDirection: 'row', minWidth: '90wv', justifyContent: 'space-between', marginTop: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center' }}>
            {this.props.savedBooksArray.length > 0 && <h1>Books</h1>}
            {this.props.savedBooksArray.map((book, idx) =>
              <SavedResultItem key={`${book.title}-${idx}`} item={book} deleteItem={this.props.deleteBook} addNote={() => this.addNote({ ...book, type: 'book' })} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center' }}>
            {this.props.savedMoviesArray.length > 0 && <h1>Movies</h1>}
            {this.props.savedMoviesArray.map((movie, idx) =>
              <SavedResultItem key={`${movie.title}-${idx}`} item={movie} deleteItem={this.props.deleteMovie} addNote={() => this.addNote({ ...movie, type: 'movie' })} />
            )}
          </div>
        </Container>
      </Container>
    )
  }
}

export default withAuthenticationRequired(MySavedList)
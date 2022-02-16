
import React, { Component } from 'react';
import { Container, Card, Image, ListGroup } from 'react-bootstrap';
import Search from './Search.js';
import Results from './Results.js';

export default class Landing extends Component {

  render() {
    let credit = { fontSize: 8, textDecoration: 'none', color: 'black' };
    console.log(this.props.moviesArray.length);
    return (
      <Container style={{ width: '100vw' }}>
        {(this.props.booksArray.length === 0) && (this.props.moviesArray.length === 0) && (
          <Container style={{ display: 'flex', flexDirection: 'row', margin: '3rem auto -2rem auto', alignItems: 'center' }}>
            {/* <Container style={{ display: 'flex', justifyContent: 'center', padding: '0 0', flexDirection: 'column', alignItems: 'center', width: '300px'}}> */}
            <Container style={{ width: '300px' }}>
              <Image rounded src={require("./images/aaron-burden-6jYoil2GhVk-unsplash.jpg")} alt={"Silhouette of child reading"} height='220px' width='300px' /><br />
              <p style={credit}>Photo by <a style={{ color: 'black'}} href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> on <a style={{ color: 'black'}} href="https://unsplash.com/s/photos/book-turn-to-film?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </Container>
            {/* <Container style={{display: 'flex', justifyContent: 'center', padding: '0 0', flexDirection: 'column', alignItems: 'center', width: '300px'}}> */}
            <Container style={{ width: '300px' }}>
              <Image rounded src={require("./images/erik-witsoe-GF8VvBgcJ4o-unsplash.jpg")} alt={"People watching a movie"} height='220px' width='300px' /><br />
              <p style={credit}>Photo by <a style={{ color: 'black'}} href="https://unsplash.com/@ewitsoe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik Witsoe</a> on <a style={{ color: 'black'}} href="https://unsplash.com/s/photos/watching-movie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </Container>
          </Container>
        )}
        <Search getMoviesData={this.props.getMoviesData} getBooksData={this.props.getBooksData} />

        <Results
          moviesArray={this.props.moviesArray}
          saveMovie={this.props.saveMovie}
          booksArray={this.props.booksArray}
          saveBook={this.props.saveBook}
        />
        {(this.props.booksArray.length === 0) && (this.props.moviesArray.length === 0) && (
          <Container>
            <ListGroup variant='flush' style={{ alignItems: 'center', width: '105%' }}>
              
              <ListGroup variant="flush" style={{textAlign: 'center'}}>
                <ListGroup.Item>Are you a teacher, librarian, parent, or student that wants to know if a book has been turned into a movie or a movie was based on a book?  Our site gives you the ability to find out</ListGroup.Item>
                <ListGroup.Item>Just type in the title in the search bar and you will get a list of books and movies with that title</ListGroup.Item>
                <ListGroup.Item>Want to keep a list of books and movies?  Just click the "Add Title" button beneath the one you want and it will save to your list</ListGroup.Item>
                <ListGroup.Item>Access the saved list by going to "My Saved List".  If you no longer want a title, select the "Delete" button. It's that simple</ListGroup.Item>
              </ListGroup>

            </ListGroup>

          </Container>
        )}
      </Container>
    )
  }
}

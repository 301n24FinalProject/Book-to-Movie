import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import Search from "./Search";
import Results from "./Results";
import MySavedList from './MySavedList';
import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesArray: [],
      booksArray: [],
      savedMoviesArray: [],
      savedBooksArray: []
    }
  }

  getMoviesData = (moviesResponse) => {
    this.setState({ moviesArray: moviesResponse })
  }

  getBooksData = (booksResponse) => {
    this.setState({ booksArray: booksResponse })
  }

  getBooksfromDB = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { 'Authorization': `Bearer ${jwt}`},
        method: 'get',
        baseURL: SERVER,
        url: '/books',
      }
      const response = await axios (config);
      console.log('Server Response:',response.data);
      this.setState({ savedBooksArray: response.data});
    }
  }

  getMoviesfromDB = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { 'Authorization': `Bearer ${jwt}`},
        method: 'get',
        baseURL: SERVER,
        url: '/movies',
      }
      const response = await axios (config);
      console.log('Server Response:',response.data);
      this.setState({ savedMoviesArray: response.data});
    }
  }

  saveBook = async (book) => {
    book.email = this.props.auth0.user?.email;
    console.log(book);
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt} `},
      method: 'post',
      baseURL: SERVER,
      url: '/books',
      data: book
    }
    try {
      await axios(config);
    } catch (error) {
      console.log(error);
    }
  }

  saveMovie = async (movie) => {
    movie.email = this.props.auth0.user?.email;
    console.log(movie);
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt} `},
      method: 'post',
      baseURL: SERVER,
      url: '/movies',
      data: movie
    }
    try {
      await axios(config);
    } catch (error) {
      console.log(error);
    }
  }

  deleteBook = async (id) => {
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt} `},
      method: 'delete',
      baseURL: SERVER,
      url: `/books/${id}`
    }
    try {
      const response = await axios(config);
      if (response.status === 202) {
        const filteredBooks = this.state.savedBooksArray.filter(book => book._id !== id);
        this.setState({ books: filteredBooks});
      }
    } catch (error) {
      console.log(error);
    }
  }



  render() {
    return (
      <>
        <Router>
          <Header isAuthenticated={this.props.auth0.isAuthenticated} loginWithRedirect={this.props.auth0.loginWithRedirect} logout={this.props.auth0.logout} />
          <Switch>
            <Route exact path="/">
              <Redirect to='/search' />
            </Route>
            <Route exact path="/search">
              <Search getMoviesData={this.getMoviesData} getBooksData={this.getBooksData} />
              <Results
                moviesArray={this.state.moviesArray}
                saveMovie={this.saveMovie}
                booksArray={this.state.booksArray}
                saveBook={this.saveBook}
              />
            </Route>
            <Route exact path="/mySavedList">
              <MySavedList savedBooksArray={this.state.savedBooksArray} savedMoviesArray={this.state.savedMoviesArray} deleteBook={this.deleteBook} />
            </Route>
            <Route exact path="/about"></Route>
            <Route exact path="/login"></Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);


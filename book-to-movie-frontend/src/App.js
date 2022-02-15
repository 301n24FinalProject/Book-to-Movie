// import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Header from "./Header";
import MySavedList from './MySavedList';
import Results from "./Results";
import Search from "./Search";

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
        headers: { 'Authorization': `Bearer ${jwt}` },
        method: 'get',
        baseURL: SERVER,
        url: '/books',
      }
      const response = await axios(config);
      console.log('Server Response:', response.data);
      this.setState({ savedBooksArray: response.data });
    }
  }

  getMoviesfromDB = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { 'Authorization': `Bearer ${jwt}` },
        method: 'get',
        baseURL: SERVER,
        url: '/movies',
      }
      const response = await axios(config);
      console.log('Server Response:', response.data);
      this.setState({ savedMoviesArray: response.data });
    }
  }

  saveBook = async (book) => {
    book.email = this.props.auth0.user?.email;
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt} ` },
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
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt} ` },
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
      headers: { 'Authorization': `Bearer ${jwt} ` },
      method: 'delete',
      baseURL: SERVER,
      url: `/books/${id}`
    }
    try {
      const response = await axios(config);
      if (response.status === 202) {
        const filteredBooks = this.state.savedBooksArray.filter(book => book._id !== id);
        this.setState({ savedBooksArray: filteredBooks });
      }
    } catch (error) {
      console.log(error);
    }
    this.getBooksfromDB();
  }

  deleteMovie = async (id) => {
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt} ` },
      method: 'delete',
      baseURL: SERVER,
      url: `/movies/${id}`
    }
    try {
      const response = await axios(config);
      if (response.status === 202) {
        const filteredMovies = this.state.savedMoviesArray.filter(movie => movie._id !== id);
        this.setState({ savedMoviesArray: filteredMovies });
      }
    } catch (error) {
      console.log(error);
    }
    this.getMoviesfromDB();
  }

  updateItem = async (item) => {
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt} ` },
      method: 'put',
      baseURL: SERVER,
      url: `/${item.type}s/${item._id}`,
      data: item
    }
    try {
      await axios(config);
      if (item.type === 'book') {
        const updatedBooks = this.state.savedBooksArray.map(book => book._id === item._id ? item : book)
        this.setState({ savedBooksArray: updatedBooks })
      } else {
        const updatedMovies = this.state.savedMoviesArray.map(movie => movie._id === item._id ? item : movie)
        this.setState({ savedMoviesArray: updatedMovies })
      }
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    console.log(this.props.auth0.user)
    return (
      <div style={{ marginBottom: '2rem' }}>
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
              <MySavedList savedBooksArray={this.state.savedBooksArray} savedMoviesArray={this.state.savedMoviesArray} deleteBook={this.deleteBook} deleteMovie={this.deleteMovie} getBooksfromDB={this.getBooksfromDB} getMoviesfromDB={this.getMoviesfromDB} updateItem={this.updateItem} user={this.props.auth0.user} />
            </Route>
            <Route exact path="/about"></Route>
            <Route exact path="/login"></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default withAuth0(App);


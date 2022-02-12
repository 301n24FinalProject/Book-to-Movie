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

  saveBook = (book) => {
    this.setState({ savedBooksArray: [...this.state.savedBooksArray, book] })
  }

  saveMovie = (movie) => {
    this.setState({ savedMoviesArray: [...this.state.savedMoviesArray, movie] })
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
              <MySavedList savedBooksArray={this.state.savedBooksArray} savedMoviesArray={this.state.savedMoviesArray} />
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


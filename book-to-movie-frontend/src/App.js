import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {withAuth0} from '@auth0/auth0-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import Search from "./Search";
import Results from "./Results";


const SERVER = process.env.REACT_APP_SERVER;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesArray: [],
      booksArray: []
    }
  }

getMoviesData = (moviesResponse) => {
  this.setState({ moviesArray: moviesResponse})
}

getBooksData = (booksResponse) => {
  this.setState({ booksArray: booksResponse})
}


  render() {
    console.log(this.state.moviesArray)
    console.log(this.state.booksArray)
    return (
      <>
      <Router>
        <Header isAuthenticated={this.props.auth0.isAuthenticated}/>
        <Switch>
          <Route exact path="/">
            <Search getMoviesData={this.getMoviesData} getBooksData={this.getBooksData}/>
            <Results moviesArray={this.state.moviesArray} booksArray={this.state.booksArray}/>
            </Route>
          <Route exact path="/profile"></Route>
          <Route exact path="/about"></Route>
          <Route exact path="/login"></Route>
        </Switch>
        <Footer/>
      </Router>
      </>
    )
  }
}

export default withAuth0(App);


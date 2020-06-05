import React, { Component } from "react";
import { Header, MovieList, MovieDetails, Loading } from "./components";
import { withTracker } from "meteor/react-meteor-data";
import { Movies } from "../api/movies.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
    };
  }
  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index,
    });
  };
  render() {
    if (this.props.movies !== undefined) {
      setTimeout(() => {
        this.setState({
          movies: this.props.movies,
          loaded: true,
        });
      }, 1000);
    }
    return (
      <div className="App d-flex flex-column">
        <Header />
        {this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2">
            <MovieList
              movies={this.state.movies}
              updateSelectedMovie={this.updateSelectedMovie}
            />
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
export default withTracker(() => {
  return {
    movies: Movies.find({}).fetch(),
  };
})(App);

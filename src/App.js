import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import { moviesData } from "./Constants/data";
import MovieList from "./Component/MovieList/MovieList";
import AddMovie from "./Component/Add/Add";
import Filter from "./Component/Filter/Filter";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [textSerach, setTextSerach] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  const handleAdd = (newMovie) => {

    if (newMovie.name !== "") {
      setMovies([...movies, newMovie]);
    }
  };
  return (
    <Router>
      <Route
      path="/(|Movielist)"
      render={() => (
    <div style={{ backgroundColor: "#061026" }}>
      <div className="navmenu">
        <Filter
          rating={searchRate}
          setSearchRate={setSearchRate}
          setTextSerach={setTextSerach}
        />
        <AddMovie handleAdd={handleAdd} />
      </div>
      <MovieList
        searchRate={searchRate}
        textSerach={textSerach}
        movies={movies}
      />
    </div>
    )}
    />
    <Route
    path={"/Movie/:id"}
    render={(props) => <Description {...props} Movielist={movies} />}
  />
   </Router>
  );
}

export default App;

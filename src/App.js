import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyNav from "./MyNav";
import "./style.css";
import Main from "./Main";
import Footer from "./Footer";
import React, { useState } from "react";
import SpinnerOverlay from "./SpinnerOverlay";
import ErrorOverlay from "./ErrorOverlay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./TvShows";
import MovieDetails from "./MovieDetails";

function App() {
  const [isLoading, setLoadingState] = useState(true);
  const [errors, setError] = useState("");

  const getData = async function (query) {
    const APIKEY = "9b8cbbea";
    const QUERY = query;
    const URL = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${QUERY}`;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Problema nella fetch!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <BrowserRouter>
      <div>
        {!errors ? (
          <SpinnerOverlay isLoading={isLoading} />
        ) : (
          <ErrorOverlay error={errors} />
        )}
        <MyNav />
        <Routes>
          <Route element={<TvShows />} path="/tv-shows" />
          <Route
            element={
              <Main getData={getData} setLoadingState={setLoadingState} />
            }
            path="/"
          />
          <Route
            element={
              <MovieDetails
                setLoadingState={setLoadingState}
                setError={setError}
              />
            }
            path="/movie-details/:movieId"
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

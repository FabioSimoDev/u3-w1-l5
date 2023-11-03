import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { getComment } from "./commentScript";
import CommentArea from "./CommentArea";

const MovieDetails = function ({ setLoadingState, setError }) {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState(undefined);
  const [comments, setComments] = useState(undefined);
  const getMovieDetails = async function () {
    setLoadingState(true);
    const APIKEY = "9b8cbbea";
    const MOVIE_ID = params.movieId;
    const URL = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${MOVIE_ID}`;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setMovieDetails(data);
        setLoadingState(false);
      } else {
        throw new Error("errore nell'ottenere i dettagli del Film.");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const getComments = async function () {
    setComments(await getComment(params.movieId));
  };

  useEffect(() => {
    getMovieDetails();
    getComments();
  }, []);

  return (
    <Container>
      {movieDetails && (
        <Row className="justify-content-center">
          <Col xxl={8}>
            <Card bg="dark" text="white" className="flex-xxl-row">
              <Col lg={5}>
                <Card.Img
                  variant="top"
                  fluid
                  src={movieDetails.Poster}
                  alt={movieDetails.Title}
                />
              </Col>
              <Card.Body>
                <Card.Title>{movieDetails.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {movieDetails.Genre}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Actors:</strong> {movieDetails.Actors}
                  <br />
                  <strong>Awards:</strong> {movieDetails.Awards}
                  <br />
                  <strong>Director:</strong> {movieDetails.Director}
                  <br />
                  <strong>Language:</strong> {movieDetails.Language}
                  <br />
                  <strong>Plot:</strong> {movieDetails.Plot}
                  <br />
                  <strong>Released:</strong> {movieDetails.Released}
                  <br />
                  <strong>Runtime:</strong> {movieDetails.Runtime}
                  <br />
                  <strong>Rated:</strong> {movieDetails.Rated}
                  <br />
                  <strong>imdbRating:</strong> {movieDetails.imdbRating}
                  <br />
                  <strong>imdbVotes:</strong> {movieDetails.imdbVotes}
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {comments && (
        <CommentArea
          movieComments={comments}
          movieId={params.movieId}
          setComments={setComments}
        />
      )}
    </Container>
  );
};

export default MovieDetails;

import { Container, Col, Row, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { publishComment } from "./commentScript";

const CommentArea = function ({ movieComments, movieId, setComments }) {
  const [commentInput, setCommentInput] = useState({
    comment: "",
    rate: "1",
    elementId: movieId
  });
  const getRatingStars = function (rateNum) {
    return Array.from({ length: rateNum }); //ritorna un array lungo quanto il ratings.
  };

  const handleInputChange = function (key, value) {
    setCommentInput({ ...commentInput, [key]: value });
  };
  return (
    <Container fluid className="text-white h-100 pt-5" id="comments">
      <Col className="d-flex flex-shrink-1 mx-auto" lg={6}>
        <div
          className="d-flex w-100 py-2 position-relative"
          style={{ border: "1px solid white" }}
        >
          <Col
            lg={2}
            className="flex-shrink-1 d-flex align-items-center justify-content-center"
          >
            <Icon.PersonFill />
          </Col>
          <Col
            style={{
              borderLeft: "1px solid white",
              paddingLeft: "10px"
            }}
            className="flex-shrink-1 d-flex flex-column text-truncate"
          >
            <Form
              className="px-2"
              onSubmit={(e) => {
                e.preventDefault();
                publishComment(commentInput, setComments);
              }}
            >
              <div className="d-flex">
                <Form.Control
                  required
                  className="px-0"
                  type="text"
                  placeholder="Lascia un commento.."
                  onChange={(e) => {
                    handleInputChange("comment", e.target.value);
                  }}
                />
                <Form.Select
                  size="sm"
                  required
                  onChange={(e) => {
                    handleInputChange("rate", e.currentTarget.value);
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </div>
              <Button
                type="submit"
                className="rounded-1 border-0"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, #dc3545 50%, transparent)"
                }}
              >
                Pubblica
              </Button>
            </Form>
          </Col>
        </div>
      </Col>
      <Row lg={3} className="gx-3 gy-3 py-3">
        {movieComments && movieComments.length > 0 && (
          <>
            <h5 className="text-center w-100 d-flex flex-column">Commenti: </h5>
          </>
        )}
        {movieComments && movieComments.length === 0 && (
          <h5 className="text-center w-100">
            Non ci sono commenti per questo film.
          </h5>
        )}
        {movieComments &&
          movieComments.map((comment, index) => (
            <Col className="d-flex flex-shrink-1" key={index}>
              <div
                className="d-flex w-100 py-2 position-relative"
                style={{ border: "1px solid white" }}
              >
                <Col
                  lg={2}
                  className="flex-shrink-1 d-flex align-items-center justify-content-center"
                >
                  <Icon.PersonFill />
                </Col>
                <Col
                  style={{
                    borderLeft: "1px solid white",
                    paddingLeft: "10px"
                  }}
                  className="flex-shrink-1 d-flex flex-column text-truncate"
                >
                  <p
                    title={comment.comment}
                    className="fw-bold m-0 text-truncate"
                  >
                    {comment.comment}
                  </p>
                  <small className="my-2">{comment.author.split("@")[0]}</small>
                  <div>
                    {getRatingStars(comment.rate).map((undef, index) => (
                      <small key={index} className="text-warning">
                        <Icon.StarFill />
                      </small>
                    ))}
                  </div>
                </Col>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CommentArea;

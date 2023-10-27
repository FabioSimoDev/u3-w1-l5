import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const SpinnerOverlay = function ({ isLoading }) {
  return (
    <Container
      fluid
      className={
        isLoading
          ? "h-100 position-fixed z-3 bg-dark d-flex align-items-center justify-content-center"
          : "h-100 position-fixed z-3 bg-dark d-flex align-items-center justify-content-center fade-out"
      }
    >
      {" "}
      <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default SpinnerOverlay;

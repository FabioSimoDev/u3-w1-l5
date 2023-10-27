import Container from "react-bootstrap/Container";
const ErrorOverlay = function ({ error }) {
  return (
    <Container
      fluid
      className="h-100 position-fixed z-3 bg-dark d-flex flex-column gap-3 align-items-center justify-content-center"
    >
      <h2 className="fw-semibold text-danger text-center">
        Problema di comunicazione con il server. <br />
        Ricarica la pagina per riprovare.
      </h2>
      <small className="text-warning opacity-50">
        Messaggio di errore: "{error}"
      </small>
    </Container>
  );
};

export default ErrorOverlay;

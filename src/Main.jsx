import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import SingleCarousel from "./SingleCarousel";
const Main = function ({ getData, setLoadingState }) {
  return (
    <>
      <Container fluid className="px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <ButtonGroup>
              <Dropdown className="ms-4 mt-1">
                <Dropdown.Toggle
                  variant="secondary"
                  className="rounded-0 btn-sm genres-dropdown"
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#">Drama</Dropdown.Item>
                  <Dropdown.Item href="#">Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </div>
        <Row className="ms-lg-5 ms=md=3 ms-2">
          <SingleCarousel
            title="Trending Now"
            getData={getData}
            query="harry potter"
          />
          <SingleCarousel
            title="Watch it Again"
            getData={getData}
            query="lord of the rings"
          />
          <SingleCarousel
            title="New Releases"
            getData={getData}
            setLoadingState={setLoadingState}
            query="marvel"
          />
        </Row>
      </Container>
    </>
  );
};

export default Main;

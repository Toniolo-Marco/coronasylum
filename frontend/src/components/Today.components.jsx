import {
  React,
  Chart,
  Navbar,
  ColorStyle,
  TextStyle,
  Row,
  Col,
  Jumbotron,
  Button,
  Container,
  FormControl,
  InputGroup,
  SearchIcon,
  Compound,
} from "../index.import.js";
import countries from "../utils/countries";
export default function Today() {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>

      <Container fluid>
        {countries
          .filter((e) => e.country.substring(0, 3).toLowerCase() === "ita")
          .map((e) => {
            return (
              <Compound key={e.slug} query={{ ...e, category: "total" }} />
            );
          })}
      </Container>
    </React.Fragment>
  );
}

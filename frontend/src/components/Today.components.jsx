import {
  React,
  Navbar,
  ColorStyle,
  TextStyle,
  Row,
  Col,
  Button,
  Container,
  FormControl,
  InputGroup,
  SearchIcon,
  Compound,
  Filter,
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

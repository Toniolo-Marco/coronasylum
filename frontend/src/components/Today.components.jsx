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
      <Container fluid>
        {countries.map((e) => {
          return <Compound query={{ ...e, category: "total" }} />;
        })}
      </Container>
    </React.Fragment>
  );
}

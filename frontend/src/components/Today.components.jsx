import {
  React,
  Navbar,
  Row,
  Col,
  Container,
  Compound,
  Authentication,
  Filter,
  useState,
  useEffect,
} from "../index.import.js";
import countries from "../utils/countries";

export default function Today() {
  const [listOfCountries, setListOfCountries] = useState([]);
  const auth = React.useContext(Authentication);
  useEffect(() => {
    console.log(listOfCountries);
  }, [listOfCountries]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Filter
          listOfCountries={listOfCountries}
          setListOfCountries={setListOfCountries}
        />
      </Row>
      <Container fluid>
        {countries
          .filter((e) => listOfCountries.includes(e.slug))
          .map((e) => {
            return (
              <Compound key={e.slug} query={{ ...e, category: "total" }} />
            );
          })}
      </Container>
    </div>
  );
}

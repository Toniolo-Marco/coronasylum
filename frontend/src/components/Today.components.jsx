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
  const [viewCounters, setViewCounters] = useState(true);
  const [viewHistogram, setViewHistogram] = useState(true);
  const [viewChartTotalCases, setViewChartTotalCases] = useState(true);

  const auth = React.useContext(Authentication);
  useEffect(() => {
    console.log(listOfCountries);
  }, [listOfCountries]);
  return (
    <Authentication.Consumer>
      {(auth) => (
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
              viewCounters={viewCounters}
              setViewCounters={setViewCounters}
              viewHistogram={viewHistogram}
              setViewHistogram={setViewHistogram}
              viewChartTotalCases={viewChartTotalCases}
              setViewChartTotalCases={setViewChartTotalCases}
            />
          </Row>
          <Container fluid>
            {countries
              .filter((e) => listOfCountries.includes(e.slug))
              .map((e) => {
                return (
                  <Compound
                    key={e.slug}
                    auth={auth}
                    query={{ ...e, category: "total" }}
                  />
                );
              })}
          </Container>
        </div>
      )}
    </Authentication.Consumer>
  );
}

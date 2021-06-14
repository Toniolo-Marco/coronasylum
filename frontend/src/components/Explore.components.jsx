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
} from "../index.import.js";
import countries from "../utils/countries";

export default function Explore() {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [viewCounters, setViewCounters] = useState(true);
  const [viewHistogram, setViewHistogram] = useState(true);
  const [viewChartTotalCases, setViewChartTotalCases] = useState(true);

  const auth = React.useContext(Authentication);

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
              auth={auth}
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
                    viewCounters={viewCounters}
                    viewHistogram={viewHistogram}
                    viewChartTotalCases={viewChartTotalCases}
                  />
                );
              })}
          </Container>
        </div>
      )}
    </Authentication.Consumer>
  );
}

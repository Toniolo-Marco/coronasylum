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
  Histogram,
  useState,
  useEffect,
  downloadData,
  Loading,
  Counter,
} from "../index.import.js";

export default function Compound({ query, ...rest }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    downloadData(query).then((res) => {
      //console.log(res.data);
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <h3 className={`${ColorStyle.colorWhite1}`}>{query.country}</h3>
        </Col>
      </Row>
      {isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Row>
            <Col>
            
            <h3 className={`${ColorStyle.colorWhite1}`}>{console.log(data)}</h3>
              <Chart 
              params={{
                category: query.category,
                status: data.confirmed,
                country: query.country,

                type: "line",
                label: "Chart of Coronavirus "+query.status+" cases in "+query.country,
                backgroundColor: "rgba(0,123,252,0.5)",
                borderColor: "rgba(0,123,252,1)",
                pointRadius: 0,
                responsive: true,
                tooltips: {
                  enabled: true,
                  intersect: false,
                },
              }}/>
            </Col>
            <Col>
              <Counter />
            </Col>
          </Row>
          <Row>
            <Col>
              <Chart />
            </Col>
            <Col>
              <Chart />
            </Col>
            <Col>
              <Chart />
            </Col>
          </Row>
          <Row>
            <Col>
              <Histogram />
            </Col>
            <Col></Col>
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

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
      console.log(res.data);
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
              <Chart />
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

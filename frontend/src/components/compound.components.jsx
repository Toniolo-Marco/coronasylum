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
  const wdate = "2021-05-17";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    downloadData(query).then((res) => {
      console.log(res.data);
      let arr = [];
      if (res.data) {
        arr = res.data;
      }
      setData(arr);
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
              <h3 className={`${ColorStyle.colorWhite1}`}></h3>

              <Chart
                data={data}
                params={{
                  category: "total",
                  status: "Confirmed",
                  country: query.country,

                  type: "line",
                  label:
                    "Chart of Coronavirus Confirmed" +
                    " cases in " +
                    query.country,
                  backgroundColor: "rgba(0,123,252,0.5)",
                  borderColor: "rgba(0,123,252,1)",
                  pointRadius: 0,
                  responsive: true,
                  tooltips: {
                    enabled: true,
                    intersect: false,
                  },
                }}
              />
            </Col>
            <Col>
              <Histogram
                data={data}
                params={{
                  whichDate: wdate,
                  country: query.country,

                  type: "bar",
                  title: "Covid in " + query.country + " Today",
                  label: ["Active", "Recovered", "Deaths"],
                  backgroundColor: [
                    "rgba(43, 181, 57,0.5)",
                    "rgba(255, 255, 255,0.5)",
                    "rgba(255, 51, 51,0.5)",
                  ],
                  borderColor: [
                    "rgba(43, 181, 57,1)",
                    "rgba(255, 255, 255,1)",
                    "rgba(255, 51, 51,1)",
                  ],

                  responsive: true,
                  tooltips: {
                    enabled: true,
                    intersect: false,
                  },
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Chart
                data={data}
                params={{
                  category: "total",
                  status: "Active",
                  country: query.country,

                  type: "line",
                  label: "Active",
                  backgroundColor: "rgba(43, 181, 57,0.5)",
                  borderColor: "rgba(43, 181, 57,1)",
                  pointRadius: 0,
                  responsive: true,
                  tooltips: {
                    enabled: true,
                    intersect: false,
                  },
                }}
              />
            </Col>
            <Col xs={4}>
              <Chart
                data={data}
                params={{
                  category: "total",
                  status: "Recovered",
                  country: query.country,

                  type: "line",
                  label: "Recovered",
                  backgroundColor: "rgba(255, 255, 255,0.5)",
                  borderColor: "rgba(255, 255, 255,1)",
                  pointRadius: 0,
                  responsive: true,
                  tooltips: {
                    enabled: true,
                    intersect: false,
                  },
                }}
              />
            </Col>
            <Col xs={4}>
              <Chart
                data={data}
                params={{
                  category: "total",
                  status: "Deaths",
                  country: query.country,

                  type: "line",
                  label: "Deaths",
                  backgroundColor: "rgba(255, 51, 51,0.5)",
                  borderColor: "rgba(255, 51, 51,1)",
                  pointRadius: 0,
                  responsive: true,
                  tooltips: {
                    enabled: true,
                    intersect: false,
                  },
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

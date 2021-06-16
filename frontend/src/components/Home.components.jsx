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
  SearchIcon,
  Histogram,
  ImageStyle,
  useState,
  downloadData,
  useEffect,
  Counter,
  Authentication,
} from "../index.import.js";
import covidfristimage from "../img/imghome.png";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const auth = React.useContext(Authentication);
  const [value, setValue] = useState();

  const query = { slug: "italy", country: "Italy" };
  useEffect(() => {
    auth &&
      downloadData(query, auth).then((res) => {
        console.log(auth);
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
      <Navbar />
      <br />
      <Container fluid>
        <Row>
          <Col md={1} xs={0} />
          <Col md={5} xs={12}>
            <img
              className={`${ImageStyle.imgHome1}`}
              src={covidfristimage}
              alt={"virus"}
            />
          </Col>

          {/*Normal size*/}
          <Col
            md={5}
            className={`${TextStyle.txtverticalmiddle} d-none d-sm-block`}
          >
            <div>
              <h1 className={`${ColorStyle.colorWhite1}`}>
                CoronAsylum: From Everywhere To Everyone
              </h1>

              <h2 className={`${ColorStyle.colorBlue1}`}>—</h2>

              <p
                className={`${TextStyle.txtcenterjustify} ${ColorStyle.colorGrey5}`}
              >
                In this site you have an easy access to Covid-19 data from every
                country of the world. This is a non-profit project, realized in
                may 2021. Our mission is to spread official information in a
                clear way, understandable by everyone.
                <br /> <br />
                Start exploring now:
                <Button
                  variant="primary"
                  onClick={(e) => {
                    history.push(`/explore`);
                  }}
                  style={{ marginLeft: "35%" }}
                >
                  Explore
                  <SearchIcon style={{ marginLeft: "15px" }} />
                </Button>
              </p>
            </div>
          </Col>
          {/*Mobile size*/}
          <Col
            md={0}
            xs={12}
            className={`${TextStyle.txtverticalmiddle} d-block d-sm-none`}
          >
            <div>
              <h1 className={`${ColorStyle.colorWhite1}`}>
                CoronAsylum: From Everywhere To Everyone
              </h1>
              <h2 className={`${ColorStyle.colorBlue1}`}>—</h2>
              <p
                className={`${TextStyle.txtcenterjustify} ${ColorStyle.colorGrey5}`}
              >
                In this site you have an easy access to Covid-19 data from every
                country of the world. This is a non-profit project, realized in
                may 2021. Our mission is to spread official information in a
                clear way, understandable by everyone.
              </p>
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="primary"
                  onClick={(e) => {
                    history.push(`/explore`);
                  }}
                >
                  Explore
                  <SearchIcon style={{ marginLeft: "15px" }} />
                </Button>
              </div>
            </div>
          </Col>

          <Col md={1} xs={0} />
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col md={1} xs={0} />
          <Col>
            <h2 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              Bad at Math? Nevermind.
            </h2>
            <br />
            <p className={`${TextStyle.txtcenter} ${ColorStyle.colorGrey5}`}>
              Speed is everything nowadays. Our team has developed several types
              of graphs to facilitate the understanding of numbers and trends:
            </p>
          </Col>
          <Col md={1} xs={0} />
        </Row>

        <br />
        <br />
        <Row>
          <Col md={6} xs={12}>
            <h3 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              Cartesian:
            </h3>
            <p className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              quickly understand the trend
            </p>

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
          <Col md={6} xs={12}>
            <h3 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              Histogram:
            </h3>
            <p className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              compare total cases, recovered and deaths
            </p>
            <Histogram
              data={data}
              params={{
                country: "Italy",

                type: "bar",
                title: "Today",
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
        <br />
        <br />
        <br />
        <Row>
          <Col md={1} xs={0} />
          <Col md={4} xs={12}>
            <h3 className={`${ColorStyle.colorWhite1}`}>Real Time counter:</h3>
            <p className={` ${ColorStyle.colorGrey5}`}>
              Maybe have 24 hours old data is not enough; that's why we designed
              a real time counter. This component allows you to know what's
              going on (more or less). It is based on the trend of the last
              week, therefore it can incerease and decrease too! To have an
              accurate number we suggest you to refresh the page daily while our
              dataset refresh countries one by one at 1:00AM(UTC+0). For
              example, on the right you have the counter of active case in Italy
              in this moment.
            </p>
          </Col>
          <Col
            md={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                width: "100%",
                margin: "auto",
                fontSize: "2.7vw",
              }}
            >
              {data && data.length > 7 && (
                <Counter
                  data={data}
                  params={{
                    category: "total",
                    status: "Active",
                    country: query.country,
                    duration: 5,
                  }}
                />
              )}
            </div>
          </Col>
          <Col md={1} xs={0} />
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col md={2} xs={0} />
          <Col>
            <Jumbotron className={`${ColorStyle.bgGrey3}`}>
              <h1>What's Covid-19?</h1>
              <h5>
                It's remarkable for everyone to be aware about what's going on
                out there. The World Health Organization wrote articles on
                prevention, symptoms and myth busters. You can learn more on the
                WHO's official website pressing the button below!
              </h5>
              <br />
              <Button
                target="_blank"
                href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
                variant="primary"
              >
                Learn more
              </Button>
            </Jumbotron>
          </Col>
          <Col md={2} xs={0} />
        </Row>
      </Container>
    </React.Fragment>
  );
}

import { Component } from "react";
import {
    React,
    Chart,
    ColorStyle,
    Row,
    Col,
    Histogram,
    useState,
    useEffect,
    downloadData,
    Loading,
    Counter,
    NoData,
    NotAuthorized,
} from "../index.import.js";

export default function Compound({
    auth,
    query,
    viewCounters,
    viewHistogram,
    viewChartTotalCases,
    ...rest
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [authorized, setAuthorized] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        downloadData(query, auth)
            .then((res) => {
                setAuthorized(true);

                let arr = [];
                if (res.data) {
                    arr = res.data;
                }
                setData(arr);

                setIsLoading(false);
            })
            .catch((err) => {
                setAuthorized(false);

                setIsLoading(false);
            });
    }, [auth]);

    function component() {
        if (isLoading) {
            return <Loading />;
        } else if (!authorized) {
            return (
                <React.Fragment>
                    <div id="notAuthorized" />
                    <NotAuthorized />
                </React.Fragment>
            );
        } else if (data.length === 0) {
            return <NoData />;
        } else {
            return (
                <CreateCompound
                    query={query}
                    data={data}
                    viewCounters={viewCounters}
                    viewHistogram={viewHistogram}
                    viewChartTotalCases={viewChartTotalCases}
                />
            );
        }
    }

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h3 className={`${ColorStyle.colorWhite1}`}>
                        {query.country}
                    </h3>
                </Col>
            </Row>
            {component()}
        </React.Fragment>
    );
}

export function CreateCompound({
    query,
    data,
    viewCounters,
    viewHistogram,
    viewChartTotalCases,
}) {
    if (viewCounters && viewHistogram && viewChartTotalCases)
        return (
            <div>
                <Row style={{ marginTop: "20px" }}>
                    <Col xs={6}>
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
                    <Col xs={6}>
                        <Histogram
                            data={data}
                            params={{
                                country: query.country,

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
                <Row style={{ marginTop: "20px" }}>
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
                        {data && data.length > 7 && (
                            <Counter
                                data={data}
                                params={{
                                    category: "total",
                                    status: "Recovered",
                                    country: query.country,
                                    duration: 5,
                                }}
                            />
                        )}
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
                        {data && data.length > 7 && (
                            <Counter
                                data={data}
                                params={{
                                    category: "total",
                                    status: "Deaths",
                                    country: query.country,
                                    duration: 5,
                                }}
                            />
                        )}
                    </Col>
                </Row>
            </div>
        );
    else if (!viewCounters && viewHistogram && viewChartTotalCases)
        return (
            <div>
                <Row style={{ marginTop: "20px" }}>
                    <Col xs={6}>
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
                    <Col xs={6}>
                        <Histogram
                            data={data}
                            params={{
                                country: query.country,

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
                <Row style={{ marginTop: "20px" }}>
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
            </div>
        );
    else if (!viewCounters && !viewHistogram && viewChartTotalCases)
        return (
            <div>
                <Row style={{ marginTop: "20px" }}>
                    <Col xs={2} />
                    <Col xs={8}>
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
                    <Col xs={2} />
                </Row>
                <Row style={{ marginTop: "20px" }}>
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
            </div>
        );
    else if (!viewCounters && viewHistogram && !viewChartTotalCases)
        return (
            <div>
                <Row style={{ marginTop: "20px" }}>
                    <Col xs={2} />
                    <Col xs={8}>
                        <Histogram
                            data={data}
                            params={{
                                country: query.country,

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
                    <Col xs={2} />
                </Row>
                <Row style={{ marginTop: "20px" }}>
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
            </div>
        );
    else if (viewCounters && !viewHistogram && viewChartTotalCases)
        return (
            <div>
                <Row style={{ marginTop: "20px" }}>
                    <Col xs={2} />
                    <Col xs={8}>
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
                    <Col xs={2} />
                </Row>
                <Row style={{ marginTop: "20px" }}>
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
                        {data && data.length > 7 && (
                            <Counter
                                data={data}
                                params={{
                                    category: "total",
                                    status: "Recovered",
                                    country: query.country,
                                    duration: 5,
                                }}
                            />
                        )}
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
                        {data && data.length > 7 && (
                            <Counter
                                data={data}
                                params={{
                                    category: "total",
                                    status: "Deaths",
                                    country: query.country,
                                    duration: 5,
                                }}
                            />
                        )}
                    </Col>
                </Row>
            </div>
        );
    else if (viewCounters && !viewHistogram && !viewChartTotalCases)
        return (
            <div>
                <Row style={{ marginTop: "20px" }}>
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
                        {data && data.length > 7 && (
                            <Counter
                                data={data}
                                params={{
                                    category: "total",
                                    status: "Recovered",
                                    country: query.country,
                                    duration: 5,
                                }}
                            />
                        )}
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
                        {data && data.length > 7 && (
                            <Counter
                                data={data}
                                params={{
                                    category: "total",
                                    status: "Deaths",
                                    country: query.country,
                                    duration: 5,
                                }}
                            />
                        )}
                    </Col>
                </Row>
            </div>
        );
    else if (viewCounters && viewHistogram && !viewChartTotalCases)
        return (
            <div>
                <Row style={{ marginTop: "20px" }}>
                    <Col xs={2} />
                    <Col xs={8}>
                        <Histogram
                            data={data}
                            params={{
                                country: query.country,

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
                    <Col xs={2} />
                </Row>
                <Row style={{ marginTop: "20px" }}>
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
                        {data && data.length > 7 && (
                            <Counter
                                data={data}
                                params={{
                                    category: "total",
                                    status: "Recovered",
                                    country: query.country,
                                    duration: 5,
                                }}
                            />
                        )}
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
                        {data && data.length > 7 && (
                            <Counter
                                data={data}
                                params={{
                                    category: "total",
                                    status: "Deaths",
                                    country: query.country,
                                    duration: 5,
                                }}
                            />
                        )}
                    </Col>
                </Row>
            </div>
        );
    else if (!viewCounters && !viewHistogram && !viewChartTotalCases)
        return (
            <div>
                <Row style={{ marginTop: "20px" }}>
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
            </div>
        );
}

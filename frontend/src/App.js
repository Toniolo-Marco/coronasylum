import React, { useEffect, useState } from "react";
import Counter from "./components/counter.components";
import { inttoString } from "./utils/string.manipulation";
import { downloadData } from "./utils/statistics.utils";
import MyChart from "./components/chart";
import CallBackend from "./components/backend.components";
import GeneralChart from "./components/general.components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home.component";
import styles from "./scss/global.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

//const JsonFile = CreateJsonChart(500, 250, "description");

function App() {
  const [number, setNumber] = useState(157_000);
  useEffect(() => setTimeout(() => setNumber(number + 1), 1000), [number]);

  return (
    <div className={styles.bgBlack}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/*
        <Route path="/login" component={Login} />
        <Route path="/singin" component={SingIn} />
        */}
      </Switch>
    </Router>
    </div>
  );
  /*
  return (
    <div>
      <CallBackend />
      <Counter init={number} />
      <MyChart></MyChart>
      <GeneralChart nome="giovanni" />
    </div>
  );
  */
}

export default App;

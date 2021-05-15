import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  React,
  useEffect,
  useState,
  Home,
  About,
  API,
  Contacts,
  Covid19,
  Developer,
  Database,
  ColorStyle,
  TextStyle,
} from "./index.import";

//const JsonFile = CreateJsonChart(500, 250, "description");

function App() {
  const [number, setNumber] = useState(157_000);
  useEffect(() => setTimeout(() => setNumber(number + 1), 1000), [number]);

  return (
    <div className={ColorStyle.bgGrey1}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/API" component={API} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route exact path="/Covid19" component={Covid19} />
          <Route exact path="/about/Developer" component={Developer} />
          <Route exact path="/about/Database" component={Database} />

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

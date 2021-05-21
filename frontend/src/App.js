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
  Today,
  Redirect,
  DivStyle,
} from "./index.import";

//const JsonFile = CreateJsonChart(500, 250, "description");

function App() {
  const [number, setNumber] = useState(157_000);
  useEffect(() => setTimeout(() => setNumber(number + 1), 1000), [number]);

  return (
    <div className={`${ColorStyle.bgGrey1} ${DivStyle.divOverflowHidden} `}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/About/API" component={API} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route exact path="/Covid19" component={Covid19} />
          <Route exact path="/About/Developer" component={Developer} />
          <Route exact path="/About/Database" component={Database} />
          <PrivateRoute exact path="/Today" component={Today} />
          {/*
        <Route path="/login" component={Login} />
        <Route path="/singin" component={SingIn} />
        */}
        </Switch>
      </Router>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function useAuth() {}

export default App;

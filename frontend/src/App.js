import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  React,
  useState,
  Home,
  About,
  API,
  Contacts,
  Covid19,
  Developer,
  Database,
  ColorStyle,
  Today,
  Redirect,
  DivStyle,
  Authentication,
} from "./index.import";

//const JsonFile = CreateJsonChart(500, 250, "description");

function App() {
  const [user, setUser] = useState({});

  return (
    <div className={`${ColorStyle.bgGrey1} ${DivStyle.divOverflowHidden} `}>
      <Authentication.Provider value={{ user, setUser }}>
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
      </Authentication.Provider>
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

import publicIp from "public-ip";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  React,
  useState,
  Home,
  About,
  Contacts,
  ColorStyle,
  Explore,
  DivStyle,
  Authentication,
  useEffect,
} from "./index.import";
import { getBrowser } from "./utils/browser.utils";

function App() {
  const [user, setUser] = useState({});
  const [session, setSession] = useState({});
  useEffect(async () => {
    setSession({ ...session, ip: await publicIp.v4(), browser: getBrowser() });
  }, []);

  return (
    <div className={`${ColorStyle.bgGrey1} ${DivStyle.divOverflowHidden} `}>
      <Authentication.Provider value={{ user, setUser, session, setSession }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About/:tab" component={About} />
            <Route exact path="/Contacts" component={Contacts} />
            <Route path="/Explore" component={Explore} />

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

export default App;

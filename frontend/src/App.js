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
} from "./index.import";
import publicIp from "public-ip";

function App() {
  const [user, setUser] = useState({});
  const [ip, setIp] = useState(
    (async () => {
      return await publicIp.v4();
    })()
  );

  return (
    <div className={`${ColorStyle.bgGrey1} ${DivStyle.divOverflowHidden} `}>
      <Authentication.Provider value={{ user, setUser }}>
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

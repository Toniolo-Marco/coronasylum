//IMPORT
export { default as React } from "react";

export { useEffect } from "react";
export { useState } from "react";
export { useRef } from "react";
export { createRef } from "react";
export { Redirect } from "react-router-dom";

export { Authentication } from "./Authentication.js";

//BOOTSTRAP
export {
  Row,
  Col,
  Button,
  Nav,
  NavDropdown,
  Dropdown,
  Jumbotron,
  Container,
  FormControl,
  InputGroup,
  Spinner,
  Card,
  FormCheck,
  Alert,
  Tab,
  Tabs,
} from "react-bootstrap";
export { default as Bootstrap } from "bootstrap/dist/css/bootstrap.min.css";

//scss
export { default as ColorStyle } from "./scss/color.module.scss";
export { default as TextStyle } from "./scss/text.module.scss";
export { default as GlobalStyle } from "./scss/global.module.scss";
export { default as NavbarStyle } from "./scss/navbar.module.scss";
export { default as LoadingStyle } from "./scss/loading.module.scss";
export { default as ImageStyle } from "./scss/img.module.scss";
export { default as DivStyle } from "./scss/div.module.scss";
export { default as CounterContainer } from "./scss/counterContainer.module.scss";
export { default as DigitContainer } from "./scss/digitContainer.module.scss";

//components
export { default as Chart } from "./components/chart.components";
export { default as Histogram } from "./components/histogram.components";
export { default as Counter } from "./components/counter.components";
export { default as Loading } from "./components/loading.components";
export { default as Compound } from "./components/compound.components";
export { default as NoData } from "./components/noData.components";
export { default as NotAuthorized } from "./components/notAuthorized.components";

//pages
export { default as Home } from "./components/Home.components";
export { default as About } from "./components/About.components";
export { default as Explore } from "./components/Explore.components";

//prefabs
export { default as Navbar } from "./prefabs/Navbar.prefabs";
export { default as Filter } from "./prefabs/Filter.prefabs";
export { default as Login } from "./prefabs/GoogleLogin.prefabs";
export { default as Logout } from "./prefabs/GoogleLogout.prefabs";

//utils
export { downloadData } from "./utils/statistics.utils";

export { inttoString } from "./utils/string.manipulation";
export { apiDateToString } from "./utils/string.manipulation";

export { apiDateToMonth } from "./utils/string.manipulation";

//ICONS
export { GoSearch as SearchIcon } from "react-icons/go";

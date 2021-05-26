//IMPORT
export { default as React } from "react";

export { useEffect } from "react";
export { useState as useState } from "react";
export { useRef as useRef } from "react";
export { createRef as createRef } from "react";
export { Redirect } from "react-router-dom";
export { moment as moment } from "moment";
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

//pages
export { default as Home } from "./components/Home.components";
export { default as About } from "./components/About.components";
export { default as API } from "./components/About.API.components";
export { default as Database } from "./components/About.Database.components";
export { default as Developer } from "./components/About.Developer.components";
export { default as Contacts } from "./components/Contacts.components";
export { default as Covid19 } from "./components/Covid19.components";
export { default as Today } from "./components/Today.components";

//prefabs
export { default as Navbar } from "./prefabs/Navbar.prefabs";
export { default as Form } from "./prefabs/Form.prefabs";
export { default as Filter } from "./prefabs/Filter.prefabs";
export { Authentication } from "./Authentication.js";

//utils
export { downloadData as downloadData } from "./utils/statistics.utils";

export { inttoString as inttoString } from "./utils/string.manipulation";
export { apiDateToString as apiDateToString } from "./utils/string.manipulation";

export { apiDateToMonth as apiDateToMonth } from "./utils/string.manipulation";

//ICONS
export { GoSearch as SearchIcon } from "react-icons/go";

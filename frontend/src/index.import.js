//IMPORT
export { default as React} from "react";

export { useEffect } from "react";
export { useState as useState} from "react";
export { useRef as useRef} from "react";
export { createRef as createRef} from "react";

export { default as Bootstrap} from "bootstrap/dist/css/bootstrap.min.css";

//scss
export { default as ColorStyle } from "./scss/color.module.scss";
export { default as TextStyle } from "./scss/text.module.scss";
export { default as GlobalStyle } from "./scss/global.module.scss";

//components
export { default as Chart } from "./components/chart.components";
export { default as Counter } from "./components/counter.components";

//pages 
export { default as Home } from "./components/Home.components";
export { default as About } from "./components/About.components";
export { default as API } from "./components/About.API.components";
export { default as Database } from "./components/About.Database.components";
export { default as Developer } from "./components/About.Developer.components";
export { default as Contacts } from "./components/Contacts.components";
export { default as Covid19 } from "./components/Covid19.components";


//prefabs
export { default as Navbar } from "./prefabs/Navbar.prefabs";
export { default as Form } from "./prefabs/Form.prefabs";

//utils
export { default as downloadData} from "./utils/statistics.utils";

export { inttoString as inttoString} from "./utils/string.manipulation";
export { stringtoDate as stringtoDate} from "./utils/string.manipulation";
export { datetoShortDate as datetoShortDate} from "./utils/string.manipulation";
export { monthtoString as monthtoString} from "./utils/string.manipulation";



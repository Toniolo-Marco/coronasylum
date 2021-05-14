import {React, Bootstrap, Navbar, Form, ColorStyle, TextStyle} from "../index.import.js";
//import Button from "react-bootstrap/Button";


export default function Contacts() {
  return (
    <div>
      <Navbar />
      <h1 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite}`}>Contacts us at: CoronAsylum</h1>
      <h6 className={TextStyle.txtcenter}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
        incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h6>
      <Form></Form>

      
    </div>
  );
}

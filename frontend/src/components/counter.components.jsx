import React, { useEffect, useState } from "react";
import { inttoString } from "../utils/string.manipulation";
import styles from "../scss/counter.module.scss";

export default function Counter(props) {
  return (
    <>
      <div className={styles.counterCases}>{inttoString(props.init)}</div>
    </>
  );
}

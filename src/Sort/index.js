import React from "react";
import { sortUp, sortDown } from "../utils/Utils";
import styles from "./sort.module.css";

const Sort = (props) => {
  function onClickDescend() {
    const sorted = [...sortDown(props.parkingLots)];
    props.setParkingLots(sorted);
  }
  function onClickAscend() {
    const sorted = [...sortUp(props.parkingLots)];
    props.setParkingLots(sorted);
  }

  return (
    <div className={styles.Sort}>
      <label className={styles.Label}>Sort by Score: </label>
      <button className={styles.BtnWorst} onClick={onClickDescend}>
        worst
      </button>
      <button className={styles.BtnBest} onClick={onClickAscend}>
        best
      </button>
    </div>
  );
};

export default Sort;

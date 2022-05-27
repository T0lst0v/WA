import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./SearchBar";
import Card from "./Card";
import SortButtons from "./Sort";
import dataProcess from "./utils/DataProcess";
import { sortDown } from "./utils/Utils";

//NOTE: uncomment in order to use with REACT_APP_YELP_LINK
const apiKey = process.env.REACT_APP_YELP_KEY;

const App = () => {
  const [parkingLots, setParkingLots] = useState([]);

  const getParkingLots = (location) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      //NOTE: uncomment this headers in order to work with REACT_APP_YELP_LINK
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    // NOTE: temporary proxy Server to avoid CORS error during Development:
    // https://cors-anywhere.herokuapp.com/
    // need to activate -> https://cors-anywhere.herokuapp.com/corsdemo

    // NOTE: uncomment and replace fetch function to Use REACT_APP_YELP_LINK
    const apiLink = process.env.REACT_APP_YELP_LINK;
    const proxy = process.env.REACT_APP_PROXY;
    fetch(`${proxy}${apiLink}${location}`, requestOptions)
      // fetch(`http://localhost:3001/search?location=${location}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        //NOTE: uncomment in order to use with REACT_APP_YELP_LINK
        data = data.businesses;
        dataProcess(data);
        setParkingLots(sortDown(data));
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div>
      <h1 className={styles.Title}>Lowest Ranked Parking Lots</h1>
      <SearchBar placeholder="Enter Location" onEnter={getParkingLots} />

      {parkingLots.length > 0 && <SortButtons parkingLots={parkingLots} setParkingLots={setParkingLots} />}

      <div className={styles.Container}>
        {parkingLots.map((item, i) => (
          <Card {...item} key={item.name + i} />
        ))}
      </div>
    </div>
  );
};

export default App;

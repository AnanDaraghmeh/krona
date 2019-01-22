import React from "react";
import styles from "./About.module.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className={styles.about}>
        <h2>About</h2>
        <ul>
          <li>
            Exchange rates are powered by{" "}
            <a href="http://www.openrates.io/" target="_blank" rel="noopener noreferrer">
              openrates.io API.</a> All currency data is sourced from the European Central Bank and
            updated daily at around 4:00pm CET.
          </li>
          <li>
            Countries flags in svg format are downloaded from{" "}
            <a href="http://flag-icon-css.lip.is/" target="_blank" rel="noopener noreferrer">
              flag-icon-css.
            </a>
          </li>
          <li>
            The App log and favicon are made by{" "}
            <a href="https://favicon.io/" target="_blank" rel="noopener noreferrer">
              favicon.io.
            </a>
          </li>
        </ul>
        </div>
    );
  }
}

export default About;

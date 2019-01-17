import React from "react";
import Header from "./Header";
import "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <div className="credits">
        <h2>About</h2>
        <ul>
          <li>
            Exchange rates are powered by{" "}
            <a href="http://www.openrates.io/" target="_blank">
              openrates.io API.</a> All currency data is sourced from the European Central Bank and
            updated daily at around 4:00pm CET.
          </li>
          <li>
            Countries flags in svg format are downloaded from{" "}
            <a href="http://flag-icon-css.lip.is/" target="_blank">
              flag-icon-css.
            </a>
          </li>
          <li>
            The App log and favicon are made by{" "}
            <a href="https://favicon.io/" target="_blank">
              favicon.io.
            </a>
          </li>
        </ul>
        </div>
      </>
    );
  }
}

export default About;

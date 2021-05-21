import React from "react";
import { Sha } from "../gh-utils";

export default () => (
  <footer>
    <div className="container">
      <p>
        <small>
          All images are the properties of{" "}
          <a href={"https://16personalities.com"}>16personalities</a> - <Sha />
        </small>
      </p>
    </div>
  </footer>
);

/*
export default () => (
  <div className="container">
    <center>
      <Sha />
    </center>
  </div>
);
*/

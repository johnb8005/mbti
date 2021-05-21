import React from "react";

import Roles from "./roles";
import CognitiveFunctions from "./cognitive-functions";
import Tabs from "../components/tabs";

const Nav = Tabs([{ name: "by Role" }, { name: "by Cognitive Function" }]);

export default () => {
  const [option, setOption] = React.useState<number>(0);

  return (
    <>
      <Nav option={option} onClick={setOption} />
      <br />
      {option === 0 && <Roles />}

      {option === 1 && <CognitiveFunctions />}
    </>
  );
};

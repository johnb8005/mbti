import React from "react";

import Roles from "./roles";
import CognitiveFunctions from "./cognitive-functions";
import Tabs from "../components/tabs";
import Circle from "./circle";

const Nav = Tabs([
  { name: "by Role" },
  { name: "by Cognitive Function" },
  { name: "circle" },
]);

export default () => {
  const [option, setOption] = React.useState<number>(0);

  return (
    <>
      <Nav option={option} onClick={setOption} />

      <br />
      {option === 0 && <Roles />}

      {option === 1 && <CognitiveFunctions />}
      {option === 2 && <Circle />}
    </>
  );
};

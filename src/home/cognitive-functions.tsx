import React from "react";

import * as T from "../lib/type";
import * as U from "../lib/utils";
import * as UiUtils from "../ui-utils";

import { listPersonalities, listCognitiveFunctions } from "../utils";

const CognitiveFunction = ({
  cognitiveFunction,
}: {
  cognitiveFunction: T.CognitiveFunction;
}) => (
  <div className="col-md-3">
    <h3>{T.CognitiveFunction[cognitiveFunction]}</h3>
    <ul className="list-group">
      {listPersonalities
        .filter((x) => cognitiveFunction === U.toDominant(U.toComponent(x)))
        .map((x) => (
          <UiUtils.PersonalitySmallRow key={x} mbti={x} />
        ))}
    </ul>
  </div>
);

const CognitiveFunctions = () => (
  <div className="row">
    {listCognitiveFunctions.map((role) => (
      <CognitiveFunction cognitiveFunction={role} key={role} />
    ))}
  </div>
);

export default CognitiveFunctions;

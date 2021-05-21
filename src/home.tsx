import React from "react";

import * as T from "./lib/type";

import { SourceCodeLink } from "./gh-utils";

export default () => {
  return (
    <>
      <ul>
        {Object.values(T.MBTI)
          .filter((x) => typeof x !== "string")
          .map((x) => (
            <li>{T.MBTI[x as T.MBTI]}</li>
          ))}
      </ul>
      <SourceCodeLink />
    </>
  );
};

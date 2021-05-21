import React from "react";

import * as T from "./lib/type";
import * as U from "./lib/utils";

import { SourceCodeLink } from "./gh-utils";

const listPersonalities: T.MBTI[] = Object.values(T.MBTI)
  .filter((x) => typeof x !== "string")
  .map((x) => x as T.MBTI);

export default () => {
  return (
    <>
      <ul>
        {listPersonalities.map((x) => (
          <li>
            {T.MBTI[x as T.MBTI]} - Role: {T.Role[U.getRole(U.toComponent(x))]}
          </li>
        ))}
      </ul>
      <SourceCodeLink />
    </>
  );
};

import React from "react";

import { Link } from "react-router-dom";

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
        {listPersonalities.map((x) => {
          const m = x as T.MBTI;
          return (
            <li>
              <Link to={`/${x}/detail`}>{T.MBTI[m]}</Link> - {T.Personality[m]}{" "}
              - Role: {T.Role[U.getRole(U.toComponent(x))]}
            </li>
          );
        })}
      </ul>

      <h3>Resources</h3>

      <ul>
        <li>
          <a href={`https://www.16personalities.com`}>16Personalities.com</a>
        </li>
        <li>
          <a href={`https://personalityjunkie.com`}>The Personality Junkie</a>
        </li>
        <li>
          <a href={`https://www.teamtechnology.co.uk/tt/t-articl/mb-simpl.htm`}>
            teamtechnology
          </a>
        </li>
      </ul>
      <SourceCodeLink />
    </>
  );
};

import React from "react";

import * as T from "./lib/type";

import { SourceCodeLink } from "./gh-utils";
import * as UiUtils from "./ui-utils";

const listPersonalities: T.MBTI[] = Object.values(T.MBTI)
  .filter((x) => typeof x !== "string")
  .map((x) => x as T.MBTI);

export default () => {
  return (
    <>
      <ul>
        {listPersonalities.map((x) => {
          const m = x as T.MBTI;
          return <UiUtils.PersonalitySmallRow mbti={x} />;
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

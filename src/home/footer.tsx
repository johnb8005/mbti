import React from "react";
import { SourceCodeLink } from "../gh-utils";

export default () => {
  return (
    <>
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

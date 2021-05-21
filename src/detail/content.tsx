import React from "react";
import { Link } from "react-router-dom";
import * as T from "../lib/type";
import * as U from "../lib/utils";

const Content = ({ mbtiId }: { mbtiId: T.MBTI }) => {
  const cps = U.toComponent(mbtiId);
  const role = U.getRole(cps);
  const sPersonality: string = T.MBTI[mbtiId];

  return (
    <>
      <p>
        {sPersonality} {T.Personality[mbtiId]} - Role {T.Role[role]}
      </p>

      <h3>Dominant </h3>

      <p>{T.CognitiveFunction[U.toDominant(cps)]}</p>

      <h3>Romantic Partners</h3>

      <ul>
        {U.findRomanticPartners(cps).map((x) => (
          <li>
            <Link to={`/${U.fromComponent(x)}/detail`}>
              {T.MBTI[U.fromComponent(x)]}
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <a
            href={`https://www.16personalities.com/${sPersonality.toLowerCase()}-personality`}
          >
            16Personalities.com
          </a>
        </li>
        <li>
          <a
            href={`https://personalityjunkie.com/the-${sPersonality.toLowerCase()}/`}
          >
            The Personality Junkie
          </a>
        </li>
      </ul>

      <p>
        <Link to={"/"}>Back</Link>
      </p>
    </>
  );
};

export default Content;

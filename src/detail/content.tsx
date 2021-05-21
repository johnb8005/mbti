import React from "react";
import { Link } from "react-router-dom";
import * as T from "../lib/type";
import * as U from "../lib/utils";

import { toImgPath } from "../utils";
import * as UIUtils from "../ui-utils";

const Content = ({ mbtiId }: { mbtiId: T.MBTI }) => {
  const cps = U.toComponent(mbtiId);
  const role = U.getRole(cps);
  const sPersonality: string = T.MBTI[mbtiId];
  const imgPath =
    sPersonality.toLowerCase() + "-" + T.Personality[mbtiId].toLowerCase();

  return (
    <>
      <h1>
        {sPersonality} - {T.Personality[mbtiId]}
      </h1>

      <p className="float-right">
        <img height={300} src={toImgPath(mbtiId)} />
        <br />
        <small>Image from 16Personalities.com</small>
      </p>

      <ul>
        <li>Role {T.Role[role]}</li>
        <li>
          Cognitive Function: {T.CognitiveFunction[U.toDominant(cps)]},{" "}
          <small>
            see{" "}
            <a href="https://en.wikipedia.org/wiki/Jungian_cognitive_functions#Isabel_Myers">
              <i className="fa fa-link" />
            </a>
          </small>
        </li>
      </ul>

      <h5>Romantic Partners</h5>

      <ul>
        {U.findRomanticPartners(cps).map((x) => (
          <UIUtils.PersonalitySmallRow mbti={U.fromComponent(x)} />
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

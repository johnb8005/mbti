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

  return (
    <>
      <h1>
        {sPersonality} <small>{T.Personality[mbtiId]}</small>
      </h1>

      <p className="float-right">
        <img height={300} src={toImgPath(mbtiId)} />
        <br />
        <small className="float-right">
          Image from{" "}
          <a href={"https://16personalities.com"}>16Personalities.com</a>
        </small>
      </p>

      <ul className={"list list-unstyled"}>
        <li>
          Role: <code>{T.Role[role]}</code>
        </li>
      </ul>

      <h5>Cognitive Functions/Type Dynamics</h5>

      <ul>
        {[
          ["Dominant", U.toDominant(cps)],
          ["Auxiliary", U.toAuxiliary(cps)],
          ["Tertiary", U.toTertiary(cps)],
          ["Inferior", U.toInferior(cps)],
        ].map(([label, c]) => (
          <li>
            {label}: <code>{T.CognitiveFunction[c]}</code>
          </li>
        ))}
      </ul>

      <p>
        <small>
          see{" "}
          <a href="https://en.wikipedia.org/wiki/Jungian_cognitive_functions#Isabel_Myers">
            <i className="fa fa-link" />
          </a>
        </small>
      </p>

      <h5>Income potential</h5>

      <p>
        <small>
          see&nbsp;
          <Link to={"/income"}>
            <i className="fa fa-link" />
          </Link>
        </small>
      </p>

      <h5>IQ</h5>

      <p>
        <small>
          see&nbsp;
          <Link to={"/iq"}>
            <i className="fa fa-link" />
          </Link>
        </small>
      </p>

      <h5>(Romantic) Partners</h5>

      <ul className="list-group">
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

        <li>
          <a href={U.listToPersonalityDB(mbtiId)}>The Personality DB</a>
        </li>
      </ul>

      <p>
        <Link to={"/"}>
          <i className="fa fa-arrow-left"></i> Back to list
        </Link>
      </p>
    </>
  );
};

export default Content;

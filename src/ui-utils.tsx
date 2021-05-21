import React from "react";

import { Link } from "react-router-dom";

import * as T from "./lib/type";
import * as U from "./lib/utils";

import { toImgPath } from "./utils";

export const PersonalitySmallRow = ({ mbti }: { mbti: T.MBTI }) => (
  <li className={"list-group-item"}>
    <img height={50} src={toImgPath(mbti)} />
    <Link to={`/${mbti}/detail`}>{T.MBTI[mbti]}</Link> - {T.Personality[mbti]} -
    Role: {T.Role[U.getRole(U.toComponent(mbti))]}
  </li>
);

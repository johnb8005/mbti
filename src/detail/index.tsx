import React from "react";
import { useParams } from "react-router-dom";
import * as T from "../lib/type";

import Content from "./content";

const isMbti = (mbti: number): mbti is T.MBTI => {
  if (isNaN(mbti)) {
    return false;
  }

  if (mbti < 0 || mbti > 15) {
    return false;
  }

  return true;
};

export default () => {
  const { mbti } = useParams<{ mbti?: string }>();

  const nMbti = Number(mbti);

  if (!isMbti(nMbti)) {
    throw Error("mbti is undefined");
  }

  return <Content mbtiId={nMbti} />;
};

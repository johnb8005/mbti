import React from "../../_snowpack/pkg/react.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.js";
import Content from "./content.js";
const isMbti = (mbti) => {
  if (isNaN(mbti)) {
    return false;
  }
  if (mbti < 0 || mbti > 15) {
    return false;
  }
  return true;
};
export default () => {
  const {mbti} = useParams();
  const nMbti = Number(mbti);
  if (!isMbti(nMbti)) {
    throw Error("mbti is undefined");
  }
  return /* @__PURE__ */ React.createElement(Content, {
    mbtiId: nMbti
  });
};

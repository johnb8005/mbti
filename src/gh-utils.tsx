import React from "react";

const ghUrl = "https://github.com/johnb8005/mbti";
const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
const ghUrlSha = `${ghUrl}/commit/${sha}`;

export const SourceCodeLink = () => {
  return (
    <a href={ghUrl}>
      <i className="fa fa-link"></i> Source Code
    </a>
  );
};

export const Sha = () => {
  return (
    <p>
      <small>
        <a href={ghUrlSha}>{sha}</a>
      </small>
    </p>
  );
};

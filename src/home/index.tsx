import React from "react";

import * as T from "../lib/type";
import * as U from "../lib/utils";
import * as UiUtils from "../ui-utils";

const listPersonalities: T.MBTI[] = Object.values(T.MBTI)
  .filter((x) => typeof x !== "string")
  .map((x) => x as T.MBTI);

const listRoles: T.Role[] = Object.values(T.Role)
  .filter((x) => typeof x !== "string")
  .map((x) => x as T.Role);

const Group = ({ role }: { role: T.Role }) => (
  <div className="col-md-3">
    <h3>{T.Role[role]}</h3>
    <ul className="list-group">
      {listPersonalities
        .filter((x) => role === U.getRole(U.toComponent(x)))
        .map((x) => (
          <UiUtils.PersonalitySmallRow key={x} mbti={x} />
        ))}
    </ul>
  </div>
);

const groups = [""];

export default () => {
  return (
    <div className="row">
      {listRoles.map((role) => (
        <Group role={role} key={role} />
      ))}
    </div>
  );
};

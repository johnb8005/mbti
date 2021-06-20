import React from "react";
import { Redirect } from "react-router-dom";
import * as SVG from "@nexys/svg";
import { MBTI } from "../../lib/type";

const radius = 200;
const offsetRatio = 0.1;
const c = { x: radius * (1 + offsetRatio), y: radius * (1 + offsetRatio) };

const circleDivides: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

const Text = ({
  i,
  x,
  y,
  onClick,
}: {
  i: MBTI;
  x: number;
  y: number;
  onClick: (i: MBTI) => void;
}) => (
  <text x={x} y={y} onClick={() => onClick(i)} style={{ cursor: "pointer" }}>
    {MBTI[i]}
  </text>
);

export default () => {
  const [selected, setSelected] = React.useState<MBTI | undefined>(undefined);

  if (selected) {
    return <Redirect to={`/${selected}/detail`} />;
  }

  return (
    <SVG.Layout>
      <SVG.Circle r={radius} coord={c} />

      <>
        {circleDivides.map((i) => {
          const s1 = {
            x: radius * (1.1 + Math.cos((i * Math.PI) / 8)),
            y: radius * (1.1 + Math.sin((i * Math.PI) / 8)),
          };

          const s2 = {
            x: radius * (1.1 - Math.cos((i * Math.PI) / 8)),
            y: radius * (1.1 - Math.sin((i * Math.PI) / 8)),
          };

          return (
            <svg key={i}>
              <Text
                x={1.05 * s1.x}
                y={1.05 * s1.y}
                i={i + 8}
                onClick={setSelected}
              />
              <Text
                x={1.05 * s2.x}
                y={1.05 * s2.y}
                i={i}
                onClick={setSelected}
              />

              <SVG.Circle r={2} coord={s1} stroke="red" />
              <SVG.Circle r={2} coord={s2} stroke="red" />
              <SVG.Line p1={s1} p2={s2} />
            </svg>
          );
        })}
      </>
    </SVG.Layout>
  );
};

import React from "react";
import * as SVG from "@nexys/svg";
import { ZodiacSign } from "../../lib/zodiac/type";
import { elementColors } from "../utils";

const radius = 200;
const offsetRatio = 0.1;
const c = { x: radius * (1 + offsetRatio), y: radius * (1 + offsetRatio) };

const circleDivides: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Text = ({
  i,
  x,
  y,
  onClick,
}: {
  i: ZodiacSign;
  x: number;
  y: number;
  onClick?: (i: ZodiacSign) => void;
}) => (
  <text
    x={x}
    y={y}
    onClick={onClick && (() => onClick(i))}
    style={{ cursor: "pointer" }}
  >
    {ZodiacSign[i]}
    {/*<use xlinkHref="http://use.fontawesome.com/releases/v5.3.1/webfonts/fa-brands-400.svg#twitter"></use>*/}
  </text>
);

export default () => {
  return (
    <svg width={"100%"} height={600}>
      <>
        {circleDivides.map((i) => {
          const s1 = {
            x: radius * (1.1 + Math.cos(-Math.PI / 2 + (i * Math.PI) / 6)),
            y: radius * (1.1 + Math.sin(-Math.PI / 2 + (i * Math.PI) / 6)),
          };

          const color = elementColors[i % 4] as any;

          return (
            <svg key={i}>
              <Text x={1.05 * s1.x} y={1.05 * s1.y} i={i} />
              <SVG.Circle r={2} coord={s1} stroke={color} />
              <SVG.Line p1={s1} p2={c} stroke={color} />
            </svg>
          );
        })}
      </>
    </svg>
  );
};

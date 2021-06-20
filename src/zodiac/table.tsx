import React from "react";

import * as Z from "../lib/zodiac/main";
import * as T from "../lib/zodiac/type";
import { elementColors } from "./utils";

export default () => (
  <table className={"table"}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Unicode</th>
        <th>Sun Sign Dates</th>
        <th>Ecliptic Longitude</th>
        <th>House</th>
        <th>Polarity</th>
        <th>Modality</th>
        <th>Triplicity</th>

        <th>Northern Season</th>
        <th>Southern Season</th>
        <th>Opposite</th>
        <th>Twins</th>
      </tr>
    </thead>
    <tbody>
      {Z.list.map((z, i) => {
        const elementIdx = Z.zodiacSignToElement(z);
        const element = T.ZodiacElement[elementIdx];
        return (
          <tr key={i}>
            <td>{T.ZodiacSign[z]}</td>
            <td>{Z.toUnicode(z)}</td>
            <td>{Z.toDate(z)}</td>
            <td>{Z.formatDegrees(Z.toDegrees(z))}</td>
            <td>{Z.toHouse(z)}</td>
            <td>{Z.toPolarity(z) === false ? "Positive" : "Negative"}</td>
            <td>{T.Modality[Z.toModality(z)]}</td>
            <td style={{ color: elementColors[elementIdx] }}>{element}</td>
            <td>{T.Season[Z.toSeason(z)]}</td>
            <td>{T.Season[(Z.toSeason(z) + 2) % 3]}</td>
            <td>{T.ZodiacSign[Z.toOpposite(z)]}</td>
            <td>{Z.formatTwins(Z.toTwins(z))}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

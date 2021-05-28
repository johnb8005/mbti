import React from "react";

import * as Z from "./lib/zodiac/main";
import * as T from "./lib/zodiac/type";
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
        <th>Opposite</th>
        <th>Northern Season</th>
        <th>Southern Season</th>
      </tr>
    </thead>
    <tbody>
      {Z.list.map((z, i) => (
        <tr key={i}>
          <td>{T.ZodiacSign[z]}</td>
          <td>{Z.toUnicode(z)}</td>
          <td>{Z.toDate(z)}</td>
          <td>{Z.formatDegrees(Z.toDegrees(z))}</td>
          <td>{Z.toHouse(z)}</td>
          <td>{Z.toPolarity(z) === false ? "Positive" : "Negative"}</td>
          <td>{T.Modality[Z.toModality(z)]}</td>
          <td>{T.ZodiacElement[Z.zodiacSignToElement(z)]}</td>
          <td>{T.ZodiacSign[Z.toOpposite(z)]}</td>
          <td>{T.Season[Z.toSeason(z)]}</td>
          <td>{T.Season[(Z.toSeason(z) + 2) % 3]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

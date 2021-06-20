import React from "../../_snowpack/pkg/react.js";
import * as Z from "../lib/zodiac/main.js";
import * as T from "../lib/zodiac/type.js";
import {elementColors} from "./utils.js";
export default () => /* @__PURE__ */ React.createElement("table", {
  className: "table"
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Unicode"), /* @__PURE__ */ React.createElement("th", null, "Sun Sign Dates"), /* @__PURE__ */ React.createElement("th", null, "Ecliptic Longitude"), /* @__PURE__ */ React.createElement("th", null, "House"), /* @__PURE__ */ React.createElement("th", null, "Polarity"), /* @__PURE__ */ React.createElement("th", null, "Modality"), /* @__PURE__ */ React.createElement("th", null, "Triplicity"), /* @__PURE__ */ React.createElement("th", null, "Northern Season"), /* @__PURE__ */ React.createElement("th", null, "Southern Season"), /* @__PURE__ */ React.createElement("th", null, "Opposite"), /* @__PURE__ */ React.createElement("th", null, "Twins"), /* @__PURE__ */ React.createElement("th", null, "Planet"))), /* @__PURE__ */ React.createElement("tbody", null, Z.list.map((z, i) => {
  const elementIdx = Z.zodiacSignToElement(z);
  const element = T.ZodiacElement[elementIdx];
  return /* @__PURE__ */ React.createElement("tr", {
    key: i
  }, /* @__PURE__ */ React.createElement("td", null, T.ZodiacSign[z]), /* @__PURE__ */ React.createElement("td", null, Z.toUnicode(z)), /* @__PURE__ */ React.createElement("td", null, Z.toDate(z)), /* @__PURE__ */ React.createElement("td", null, Z.formatDegrees(Z.toDegrees(z))), /* @__PURE__ */ React.createElement("td", null, Z.toHouse(z)), /* @__PURE__ */ React.createElement("td", null, Z.toPolarity(z) === false ? "Positive" : "Negative"), /* @__PURE__ */ React.createElement("td", null, T.Modality[Z.toModality(z)]), /* @__PURE__ */ React.createElement("td", {
    style: {color: elementColors[elementIdx]}
  }, element), /* @__PURE__ */ React.createElement("td", null, T.Season[Z.toSeason(z)]), /* @__PURE__ */ React.createElement("td", null, T.Season[(Z.toSeason(z) + 2) % 3]), /* @__PURE__ */ React.createElement("td", null, T.ZodiacSign[Z.toOpposite(z)]), /* @__PURE__ */ React.createElement("td", null, Z.formatTwins(Z.toTwins(z))), /* @__PURE__ */ React.createElement("td", null, T.Planet[Z.zodiacToPlanet(z)]));
})));

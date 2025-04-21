import React from "react";
import ChartCircle from "./ChartCircle";

const RiskWidget = () => (
  <>
    <ChartCircle percentage={80} label="Passed (7338)" />
    <ul>
      <li>Failed (188)</li>
      <li>Warning (80)</li>
      <li>Not evaluated (50)</li>
    </ul>
  </>
);

export default RiskWidget;

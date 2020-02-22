import React from "react";
import { LineChart } from "./LineChart";

export default {
  component: LineChart,
  title: "LineChart",
};
export const basic = () => {
  return (
    <div style={{ maxWidth: 375 }}>
      <LineChart
        fill="#FFCA28"
        data={[
          80348,
          82094,
          70250,
          76231,
          83358,
          81380,
          112630,
          111594,
          110308,
          32559,
          39932,
          110203,
          101051,
          111418,
          111906,
          103736,
          112186,
          113056,
          70699,
          32559,
          39932,
        ]}
        height={38}
        width={375}
      />
    </div>
  );
};

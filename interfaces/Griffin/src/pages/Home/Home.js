import React from "react";
import { LineChart } from "../../components/LineChart";

export const Home = () => (
  <div>
    <LineChart />
    <div
      style={{
        width: 375,
        background: "linear-gradient(to right, #FFCA28, #FFB300)",
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          color: "#B98808",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: 32,
        }}
      >
        108 MB/s
      </p>
    </div>
  </div>
);

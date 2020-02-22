import React from "react";
import * as R from "ramda";
import { colors } from "../../styles/tokens/defaults";

const maxValue = R.reduce(R.max, -Infinity);

export const LineChart = ({
  data = [],
  fill = colors.red["800"],
  width = 375,
  height = 100,
}) => {
  const x = R.times(i => i, data.length);
  const maxY = maxValue(data);
  const y = data.map(value => Math.round(value / (maxY / 100)));

  return (
    <svg style={{ display: "block" }} viewBox={`0 0 ${width} ${height}`}>
      <rect
        style={{ fill: "url(#line_chart_fill)" }}
        clipPath={"url(#line_chart_clip)"}
        x="0"
        y="0"
        height={height}
        width={width}
      />
      <linearGradient id={"line_chart_fill"}>
        <stop offset="0%" stopColor="#FFCA28" />
        <stop offset="100%" stopColor="#FFB300" />
      </linearGradient>
      <clipPath id={"line_chart_clip"}>
        {y.map((value, i) => (
          <rect
            style={{ fill }}
            key={`${i}-${value}`}
            height={(value * height) / 100}
            y={height - (value * height) / 100}
            x={(width / x.length) * i}
            width={width / x.length + 1}
          />
        ))}
      </clipPath>
    </svg>
  );
};

10;
300;
5;

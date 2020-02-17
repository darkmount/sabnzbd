import React from "react";
import { css, cx } from "emotion";

const color = "white";

export const Button = ({ children, ...rest }) => (
  <button
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
    {...rest}
  >
    {children}
  </button>
);

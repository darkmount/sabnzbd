import React from "react";
import { Global, css } from "@emotion/core";
import {
  dimensions,
  colors,
  fontFamily,
  lineHeight,
  spacing,
} from "./tokens/defaults";

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: ${fontFamily.sans.join(" ")};
        line-height: ${lineHeight.tight};
      }
      .bg-yellow--grad {
        background-image: radial-gradient(50% 82%, #ffca28 0%, #ffb300 82%);
        background-position: top center;
        background-repeat: no-repeat;
      }
      .height--full {
        height: ${dimensions.full} !important;
      }
      .margin--none {
        margin: ${spacing["0"]} !important;
      }
      .width--full {
        width: ${dimensions.full} !important;
      }
    `}
  />
);

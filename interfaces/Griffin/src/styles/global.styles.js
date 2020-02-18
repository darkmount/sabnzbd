import React from "react";
import { Global, css } from "@emotion/core";
import { dimensions, colors, fontFamily, lineHeight, spacing } from "./tokens/defaults";

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: ${fontFamily.sans.join(' ')};
        line-height: ${lineHeight.tight};
      }
      .bg-yellow--grad {
        background-image: radial-gradient(50% 82%, ${colors.yellow['500']} 0%, ${colors.orange['500']} 82%);
        background-repeat: no-repeat;
        background-size: cover;
      }
      .height--full {
        height: ${dimensions.full} !important;
      }
      .margin--none {
        margin: ${spacing['0']} !important;
      }
      .width--full {
        width: ${dimensions.full} !important;
      }
    `}
  />
);

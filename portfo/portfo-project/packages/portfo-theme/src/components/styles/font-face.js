import React from "react";
import { connect, Global, css } from "frontity";
import InterRegular from "../assets/fonts/inter-regular.woff2";
import InterExtSmall from "../assets/fonts/inter-300.woff2";
import InterSemiBold from "../assets/fonts/inter-500.woff2";
import InterSemiBlack from "../assets/fonts/inter-600.woff2";
import InterExtraBlack from "../assets/fonts/inter-700.woff2";
import SemiBlack from "../assets/fonts/inter-800.woff2";
import ExtraBlack from "../assets/fonts/inter-900.woff2";

// const font = {
//   all: [
//     InterRegular,
//     InterExtSmall,
//     InterSemiBold,
//     InterSemiBlack,
//     InterExtraBlack,
//     SemiBlack,
//     ExtraBlack,
//   ],
// };

const FontFace = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: "regular";
          font-display: "swap";
          src: url(${InterRegular}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-display: "swap";
          src: url(${InterExtSmall}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${InterSemiBold}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-display: "swap";
          src: url(${InterSemiBlack}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-display: "swap";
          src: url(${InterExtraBlack}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 800;
          font-display: "swap";
          src: url(${SemiBlack}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 900;
          font-display: "swap";
          src: url(${ExtraBlack}) format("woff2");
        }
      `}
    />
  );
};

export default connect(FontFace);

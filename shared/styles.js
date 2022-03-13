import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 10px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
);

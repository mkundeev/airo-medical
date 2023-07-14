import { GlobalStyles } from "@mui/material";

export const customGlobalStyles = (
  <GlobalStyles
    styles={{
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      body: {
        padding: 0,
        margin: 0,
      },
      a: {
        textDecoration: "none",
      },
      img: {
        display: " block",
        maxWidth: "100%",
        height: "auto",
      },
      "ol, ul": {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
      "h1, h2, h3, h4, h5, h6, p": {
        margin: 0,
      },
    }}
  />
);
